package alerts

import (
	"crypto/sha256"
	"encoding/hex"
	"fmt"
	"sync"
	"time"

	"github.com/kkkdddd-start/winalog-go/internal/types"
)

type DedupCache struct {
	mu      sync.RWMutex
	window  time.Duration
	entries map[string]*dedupEntry
}

type dedupEntry struct {
	EventKey  string
	RuleName  string
	Timestamp time.Time
	Count     int
}

func NewDedupCache(window time.Duration) *DedupCache {
	c := &DedupCache{
		window:  window,
		entries: make(map[string]*dedupEntry),
	}

	go c.cleanupLoop()
	return c
}

func (c *DedupCache) IsDuplicate(ruleName string, event *types.Event) bool {
	key := c.generateKey(ruleName, event)

	c.mu.RLock()
	defer c.mu.RUnlock()

	entry, exists := c.entries[key]
	if !exists {
		return false
	}

	if time.Since(entry.Timestamp) > c.window {
		return false
	}

	return true
}

func (c *DedupCache) Mark(ruleName string, event *types.Event) {
	key := c.generateKey(ruleName, event)

	c.mu.Lock()
	defer c.mu.Unlock()

	entry, exists := c.entries[key]
	if exists {
		entry.Count++
		entry.Timestamp = time.Now()
	} else {
		c.entries[key] = &dedupEntry{
			EventKey:  key,
			RuleName:  ruleName,
			Timestamp: time.Now(),
			Count:     1,
		}
	}
}

func (c *DedupCache) GetCount(ruleName string, event *types.Event) int {
	key := c.generateKey(ruleName, event)

	c.mu.RLock()
	defer c.mu.RUnlock()

	entry, exists := c.entries[key]
	if !exists {
		return 0
	}

	if time.Since(entry.Timestamp) > c.window {
		return 0
	}

	return entry.Count
}

func (c *DedupCache) Clear() {
	c.mu.Lock()
	defer c.mu.Unlock()
	c.entries = make(map[string]*dedupEntry)
}

func (c *DedupCache) cleanupLoop() {
	ticker := time.NewTicker(c.window / 2)
	defer ticker.Stop()

	for range ticker.C {
		c.cleanup()
	}
}

func (c *DedupCache) cleanup() {
	c.mu.Lock()
	defer c.mu.Unlock()

	cutoff := time.Now().Add(-c.window)
	for key, entry := range c.entries {
		if entry.Timestamp.Before(cutoff) {
			delete(c.entries, key)
		}
	}
}

func (c *DedupCache) generateKey(ruleName string, event *types.Event) string {
	var keyData string

	userStr := ""
	if event.UserSID != nil && *event.UserSID != "" {
		userStr = *event.UserSID
	} else if event.User != nil && *event.User != "" {
		userStr = *event.User
	}

	ipStr := ""
	if event.IPAddress != nil && *event.IPAddress != "" {
		ipStr = *event.IPAddress
	}

	keyData = fmt.Sprintf("%s|%d|%s|%s|%s|%s",
		ruleName, event.EventID, event.Computer, event.Source, userStr, ipStr)

	hash := sha256.Sum256([]byte(keyData))
	return hex.EncodeToString(hash[:])
}

func (c *DedupCache) Size() int {
	c.mu.RLock()
	defer c.mu.RUnlock()
	return len(c.entries)
}

# Web UI 功能修复设计文档

## 1. Analyze 页面修复

### 问题
前端 `handleRun` 使用 `setTimeout` + 硬编码 mock 结果，后端 `/api/analyze/:type` 未实现。

### 修复方案

#### 后端 - 新增分析 API

**文件**: `internal/api/handlers_analyze.go`

```go
type AnalyzeRequest struct {
    Type      string `json:"type"` // brute-force, login, kerberos, powershell, etc.
    StartTime string `json:"start_time"`
    EndTime   string `json:"end_time"`
    Hours     int    `json:"hours"`
}

type AnalyzeHandler struct {
    db        *storage.DB
    analyzers map[string]*analyzers.Analyzer
}

func (h *AnalyzeHandler) RunAnalysis(c *gin.Context) {
    var req AnalyzeRequest
    if err := c.ShouldBindJSON(&req); err != nil {
        c.JSON(400, ErrorResponse{Error: err.Error()})
        return
    }

    analyzer, ok := h.analyzers[req.Type]
    if !ok {
        c.JSON(404, ErrorResponse{Error: "analyzer not found"})
        return
    }

    result, err := analyzer.Analyze(h.db, req.Hours)
    if err != nil {
        c.JSON(500, ErrorResponse{Error: err.Error()})
        return
    }

    c.JSON(200, result)
}
```

#### 前端 - 修改 API 调用

**文件**: `internal/gui/src/pages/Analyze.tsx`

```typescript
const handleRun = async () => {
  setLoading(true)
  setError('')
  try {
    const res = await analyzeAPI.run(selectedAnalyzer, { hours })
    setResult(res.data)
  } catch (err) {
    setError('Failed to run analyzer')
  } finally {
    setLoading(false)
  }
}
```

---

## 2. Collect 页面修复

### 问题
前端使用 `setTimeout` 模拟，后端 `/api/collect` 未实现。

### 修复方案

#### 后端 - 新增收集 API

```go
type CollectRequest struct {
    Sources     []string `json:"sources"`
    Excludes    []string `json:"excludes"`
    Options     struct {
        Compress       bool `json:"compress"`
        CalculateHash  bool `json:"calculate_hash"`
    } `json:"options"`
}

func (h *CollectHandler) StartCollect(c *gin.Context) {
    var req CollectRequest
    if err := c.ShouldBindJSON(&req); err != nil {
        c.JSON(400, ErrorResponse{Error: err.Error()})
        return
    }

    // 调用 collectors 包执行收集
    result, err := h.collector.Collect(req.Sources, req.Excludes, req.Options)
    if err != nil {
        c.JSON(500, ErrorResponse{Error: err.Error()})
        return
    }

    c.JSON(200, result)
}
```

#### 前端 - 修改 API 调用

```typescript
const handleCollect = async () => {
  setLoading(true)
  setStatus(t('collect.starting'))
  try {
    const enabledSources = logSources.filter(s => s.enabled).map(s => s.name)
    const disabledSources = excludedLogs.filter(l => l.enabled).map(l => l.name)
    
    const res = await collectAPI.collect({
      sources: enabledSources,
      excludes: disabledSources,
      options: options
    })
    
    setStatus(t('collect.completed'))
  } catch (err) {
    setStatus('error: ' + err.message)
  } finally {
    setLoading(false)
  }
}
```

---

## 3. Settings 页面修复

### 问题
配置保存只有前端状态，无后端 API。

### 修复方案

#### 后端 - 新增配置 API

```go
type SettingsHandler struct {
    config *config.Config
}

func (h *SettingsHandler) GetSettings(c *gin.Context) {
    c.JSON(200, h.config)
}

func (h *SettingsHandler) SaveSettings(c *gin.Context) {
    var settings map[string]interface{}
    if err := c.ShouldBindJSON(&settings); err != nil {
        c.JSON(400, ErrorResponse{Error: err.Error()})
        return
    }

    if err := h.config.Update(settings); err != nil {
        c.JSON(500, ErrorResponse{Error: err.Error()})
        return
    }

    c.JSON(200, gin.H{"status": "saved"})
}
```

#### 前端 - 修改保存逻辑

```typescript
const handleSave = async () => {
  try {
    await settingsAPI.save(settings)
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  } catch (err) {
    console.error('Failed to save settings:', err)
  }
}
```

---

## 4. Reports 页面修复

### 问题
`ListReports` 返回硬编码单条数据。

### 修复方案

#### 后端 - 实现真实报告列表

```go
func (h *ReportsHandler) ListReports(c *gin.Context) {
    reports, err := h.db.ListReports(50) // 从数据库读取
    if err != nil {
        c.JSON(500, ErrorResponse{Error: err.Error()})
        return
    }
    c.JSON(200, gin.H{"reports": reports, "total": len(reports)})
}
```

#### Storage 层 - 新增报告存储

```go
func (db *DB) ListReports(limit int) ([]ReportInfo, error) {
    rows, err := db.Query("SELECT id, type, format, generated_at, size, path FROM reports ORDER BY generated_at DESC LIMIT ?", limit)
    if err != nil {
        return nil, err
    }
    defer rows.Close()

    var reports []ReportInfo
    for rows.Next() {
        var r ReportInfo
        if err := rows.Scan(&r.ID, &r.Type, &r.Format, &r.GeneratedAt, &r.Size, &r.Path); err != nil {
            return nil, err
        }
        reports = append(reports, r)
    }
    return reports, nil
}
```

---

## 5. Dashboard 统计修复

### 问题
`collectionStats` 使用硬编码 "N/A"。

### 修复方案

#### 后端 - 实现统计 API

```go
func (h *StatsHandler) GetCollectionStats(c *gin.Context) {
    stats, err := h.db.GetCollectionStats()
    if err != nil {
        c.JSON(500, ErrorResponse{Error: err.Error()})
        return
    }
    c.JSON(200, stats)
}
```

---

## 6. Forensics 哈希验证修复

### 问题
`handleVerify` 失败时使用 `Math.random()` 模拟结果。

### 修复方案

#### 前端 - 移除 mock fallback

```typescript
const handleVerify = async () => {
  setVerifying(true)
  try {
    const res = await forensicsAPI.verifyHash(filePath, hashInput)
    setHashResult({
      verified: res.data.match,
      expected: hashInput,
      actual: res.data.actual,
      path: filePath
    })
  } catch (error) {
    setHashResult({
      verified: false,
      expected: hashInput,
      actual: 'Error computing hash',
      path: filePath
    })
  } finally {
    setVerifying(false)
  }
}
```

#### 后端 - 实现真实哈希计算

```go
func (h *ForensicsHandler) VerifyHash(c *gin.Context) {
    filePath := c.Query("path")
    expectedHash := c.Query("hash")

    actualHash, err := computeSHA256(filePath)
    if err != nil {
        c.JSON(200, gin.H{
            "match":  false,
            "actual": "",
            "error":  err.Error()
        })
        return
    }

    c.JSON(200, gin.H{
        "match":  actualHash == expectedHash,
        "actual": actualHash,
    })
}
```

---

## API 路由注册

```go
func SetupRoutes(r *gin.Engine, db *storage.DB) {
    // 分析
    analyzeHandler := NewAnalyzeHandler(db)
    r.POST("/api/analyze/:type", analyzeHandler.RunAnalysis)

    // 收集
    collectHandler := NewCollectHandler(db)
    r.POST("/api/collect", collectHandler.StartCollect)
    r.POST("/api/collect/import", collectHandler.Import)

    // 设置
    settingsHandler := NewSettingsHandler(cfg)
    r.GET("/api/settings", settingsHandler.GetSettings)
    r.POST("/api/settings", settingsHandler.SaveSettings)

    // 报告
    reportsHandler := NewReportsHandler(db)
    r.GET("/api/reports", reportsHandler.ListReports)
    // ... 其他路由
}
```

---

## 依赖关系

```
analyzeAPI.run
  └─> POST /api/analyze/:type
       └─> AnalyzeHandler.RunAnalysis
            └─> analyzers.Analyzer.Analyze()
                 └─> storage.DB.QueryEvents()

collectAPI.collect
  └─> POST /api/collect
       └─> CollectHandler.StartCollect
            └─> collectors.LiveCollector.Collect()
                 └─> Windows Event Log API

settingsAPI.save
  └─> POST /api/settings
       └─> SettingsHandler.SaveSettings
            └─> config.Config.Update()
                 └─> config file (YAML)

reportsAPI.list
  └─> GET /api/reports
       └─> ReportsHandler.ListReports
            └─> storage.DB.ListReports()
```

---

## 风险评估

| 修复项 | 风险 | 缓解措施 |
|--------|------|----------|
| Analyze | 中 | 先实现最简单的 brute-force analyzer |
| Collect | 高 | Windows 特定功能，Linux 环境需模拟 |
| Settings | 低 | 配置写入文件，需处理权限问题 |
| Reports | 中 | 需确保数据库 schema 包含 reports 表 |

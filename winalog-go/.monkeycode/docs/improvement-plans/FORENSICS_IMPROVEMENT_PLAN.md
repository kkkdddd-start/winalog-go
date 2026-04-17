# Forensics 模块深度分析报告

**项目**: WinLogAnalyzer-Go
**模块**: `internal/forensics/`, `cmd/winalog/commands/`, `internal/api/`
**文档日期**: 2026-04-17
**版本**: v1.0

---

## 一、模块架构概述

### 1.1 Forensics 模块结构

**代码位置**: `internal/forensics/`

| 文件 | 职责 | 平台 |
|------|------|------|
| `hash.go` | 文件哈希计算 (MD5/SHA1/SHA256) | 跨平台 |
| `timestamp.go` | RFC3161 时间戳请求 | 跨平台 |
| `signature.go` | Windows 可执行文件签名验证 | Windows |
| `memory.go` | 进程/系统内存转储 | Windows |
| `chain.go` | 证据链追踪 | 跨平台 |
| `forensics_linux.go` | Linux 占位符 | Linux |

### 1.2 CLI 命令

**代码位置**: `cmd/winalog/commands/system.go:850-935`

| 子命令 | 功能 |
|--------|------|
| `winalog forensics collect` | 收集取证数据 |
| `winalog forensics hash <file>` | 计算文件哈希 |
| `winalog forensics verify <file>` | 验证文件签名 |

### 1.3 API 端点

**代码位置**: `internal/api/handlers_forensics.go`

| 方法 | 端点 | 功能 |
|------|------|------|
| POST | `/api/forensics/hash` | 计算文件哈希 |
| GET | `/api/forensics/verify-hash` | 验证文件哈希 |
| GET | `/api/forensics/signature` | 验证文件签名 |
| GET | `/api/forensics/is-signed` | 检查是否签名 |
| POST | `/api/forensics/collect` | 收集证据 |
| GET | `/api/forensics/evidence` | 列出证据 |
| GET | `/api/forensics/evidence/:id` | 获取证据详情 |
| POST | `/api/forensics/manifest` | 生成证据清单 |
| GET | `/api/forensics/chain-of-custody` | 获取证据链 |
| GET | `/api/forensics/memory-dump` | 内存转储 |

### 1.4 TUI 视图

**代码位置**: `internal/tui/view.go:562-577`

- `ViewForensics` - 仅显示静态文本，提示使用 CLI

---

## 二、现有功能详解

### 2.1 文件哈希计算 (`hash.go`)

```go
func CalculateFileHash(path string) (*HashResult, error)
func VerifyFileHash(path, expectedSHA256 string) (bool, *HashResult, error)
```

**实现**: 使用 `io.MultiWriter` 同时计算 MD5/SHA1/SHA256。

**问题**: 无并发限制，大文件可能阻塞。

### 2.2 时间戳验证 (`timestamp.go`)

```go
func RequestTimestamp(req *TimestampRequest) (*TimestampResult, error)
func VerifyTimestamp(filePath string, tsaServer string) (*TimestampResult, error)
```

**支持的 TSA 服务器**:
- `http://timestamp.digicert.com`
- `http://timestamp.sectigo.com`
- `http://timestamp.globalsign.com`

**问题**: TSA 请求超时 30s，无重试机制。

### 2.3 签名验证 (`signature.go`)

```go
func VerifySignature(path string) (*SignatureResult, error)
func IsSigned(path string) (bool, *SignatureResult, error)
func IsMicrosoftSigned(path string) (bool, error)
func IsSelfSigned(path string) (bool, error)
```

**实现**: 通过 PowerShell 执行 `Get-AuthenticodeSignature`。

**问题**:
- 临时文件写入 `%TEMP%/winalog_ps_<timestamp>.ps1`
- PowerShell 输出解析脆弱

### 2.4 内存转储 (`memory.go`)

```go
func (c *MemoryCollector) CollectProcessMemory(pid uint32) (*MemoryDumpResult, error)
func (c *MemoryCollector) CollectSystemMemory() (*MemoryDumpResult, error)
func QueryMemoryRegions(pid uint32) (*MemoryRegions, error)
func AnalyzeMemoryDump(dumpPath string) (*MemoryAnalysis, error)
```

**功能**:
- 进程内存转储（部分实现）
- 内存区域查询
- 模块枚举

**严重问题**: `readSystemMemory()` 返回 `ErrSystemMemoryNotImplemented`。

### 2.5 证据链 (`chain.go`)

```go
func NewEvidenceChain(operator, action, inputHash string) *EvidenceChain
func (e *EvidenceChain) Link(previousHash string)
func GenerateManifest(files []*EvidenceFile, collectedBy, machineID string) *EvidenceManifest
func (m *EvidenceManifest) AddChainEntry(entry *EvidenceChain)
```

**功能**:
- 证据链创建和链接
- 清单生成
- 哈希计算

---

## 三、问题汇总

### 🔴 Critical Issues

#### 1. **Memory Dump 功能几乎未实现**

**问题**: `memory.go:276-278`

```go
func readSystemMemory() ([]byte, error) {
    return nil, ErrSystemMemoryNotImplemented
}
```

`CollectSystemMemory()` 调用 `readSystemMemory()` 总是返回错误。

**影响**: 系统内存取证完全不可用。

#### 2. **Memory Analysis 为空实现**

**问题**: `memory.go:327-354`

```go
func AnalyzeMemoryDump(dumpPath string) (*MemoryAnalysis, error) {
    // 仅计算哈希，无实际分析
    hash := sha256.Sum256(data)
    analysis.Hash = hex.EncodeToString(hash[:])
    return analysis, nil
}

func ExtractProcessTree(dumpData []byte) ([]ProcessNode, error) {
    return []ProcessNode{}, nil  // 空实现
}

func FindNetworkConnections(dumpData []byte) ([]NetworkConn, error) {
    return []NetworkConn{}, nil  // 空实现
}

func FindSuspiciousAPI(dumpData []byte) ([]APICall, error) {
    return []APICall{}, nil  // 空实现
}
```

**影响**: 内存分析功能完全不可用。

#### 3. **Evidence Collection API 为空实现**

**问题**: `handlers_forensics.go:196-229`

```go
func (h *ForensicsHandler) CollectEvidence(c *gin.Context) {
    // 仅返回完成状态，无实际收集逻辑
    c.JSON(http.StatusOK, CollectResponse{
        Status: "completed",
        Message: "Evidence collection complete",
    })
}
```

**影响**: API 证据收集功能形同虚设。

#### 4. **ListEvidence/GetEvidence 返回空数据**

**问题**: `handlers_forensics.go:231-262`

```go
func (h *ForensicsHandler) ListEvidence(c *gin.Context) {
    c.JSON(http.StatusOK, gin.H{
        "evidence": []interface{}{},  // 总是空
        "total": 0,
    })
}

func (h *ForensicsHandler) GetEvidence(c *gin.Context) {
    c.JSON(http.StatusOK, gin.H{
        "status": "not_found",  // 总是未找到
    })
}
```

**影响**: 无法通过 API 查看历史证据。

#### 5. **MemoryDump API 实现错误**

**问题**: `handlers_forensics.go:367-393`

```go
func (h *ForensicsHandler) MemoryDump(c *gin.Context) {
    pidStr := c.Query("pid")
    if pidStr != "" {
        var pid uint32
        fmt.Sscanf(pidStr, "%d", &pid)
        c.JSON(http.StatusOK, gin.H{
            "status":  "error",
            "message": "Memory dump requires Windows environment",  // 即使在 Windows 也返回错误
        })
    }
}
```

**影响**: API 内存转储功能完全不可用。

---

### 🟠 Important Issues

#### 6. **PowerShell 临时文件安全风险**

**问题**: `signature.go:141-154`

```go
func runPowerShellCommand(script string) (string, error) {
    tmpFile := fmt.Sprintf("%s/winalog_ps_%d.ps1", os.TempDir(), time.Now().UnixNano())
    defer os.Remove(tmpFile)  // 延迟删除，临时文件仍存在
    if err := os.WriteFile(tmpFile, []byte(script), 0644); err != nil {
        return "", err
    }
    // ...
}
```

**问题**:
1. 临时文件权限 `0644` 过宽
2. 脚本内容包含文件路径，可能泄露敏感信息
3. `defer os.Remove` 在异常时不保证执行

#### 7. **TSA 请求无重试机制**

**问题**: `timestamp.go:80-93`

```go
func requestTimestampFromTSA(tsaURL, hash, algorithm string) (*http.Response, error) {
    client := &http.Client{Timeout: 30 * time.Second}
    return client.Do(req)  // 无重试
}
```

**影响**: TSA 服务器暂时不可用时请求失败。

#### 8. **大文件哈希无流式处理**

**问题**: `hash.go:36-40`

```go
writer := io.MultiWriter(sha256Hash, md5Hash, sha1Hash)
if _, err := io.Copy(writer, file); err != nil {
    return nil, err
}
```

**问题**: `io.Copy` 虽然是流式的，但同时计算 3 种哈希对大文件内存开销大。

#### 9. **TimeStamp 结果缓存 TTL 无定义**

**问题**: `chain.go` 的 `EvidenceChain` 无缓存机制，但 API 频繁查询数据库。

---

### 🟡 Suggestions

#### 10. **TUI Forensics 视图为占位符**

**问题**: `view.go:562-577`

```go
func (m Model) renderForensics() string {
    // 仅显示静态提示文本
    sb.WriteString("Use 'winalog forensics' CLI command...")
}
```

**建议**: 实现真实的 TUI 取证交互界面。

#### 11. **signature.go 中 CN 解析脆弱**

**问题**: `signature.go:130-139`

```go
func extractCN(distinguishedName string) string {
    parts := strings.Split(distinguishedName, ",")
    for _, part := range parts {
        part = strings.TrimSpace(part)
        if strings.HasPrefix(part, "CN=") {
            return strings.TrimPrefix(part, "CN=")
        }
    }
    return distinguishedName
}
```

**问题**: 不处理转义字符 `\,`，不处理多值 CN。

#### 12. **缺乏错误码体系**

**问题**: `forensics` 模块返回的错误都是通用错误，无专用错误码。

#### 13. **Memory Dump 大文件限制硬编码**

**问题**: `memory.go:249-251`

```go
if size > 100*1024*1024 {
    size = 100 * 1024 * 1024  // 硬编码 100MB
}
```

**建议**: 改为可配置参数。

---

## 四、改进实施方案

### ISSUE-F1: 实现系统内存转储

#### 4.1.1 问题分析

**现状**: `readSystemMemory()` 返回 `ErrSystemMemoryNotImplemented`。

**实现复杂度**: 高 (需要 Windows API 调用或外部工具)

**可选方案**:

| 方案 | 复杂度 | 可靠性 | 说明 |
|------|--------|--------|------|
| Win32 API `ReadPhysicalMemory` | 高 | 高 | 需要 Administrator 权限 |
| 调用 `winpmem` 外部工具 | 中 | 高 | 成熟开源工具 |
| 调用 `dumpit` 外部工具 | 中 | 高 | 商业工具 |

**推荐**: 使用 `winpmem` 外部工具作为主要方案。

#### 4.1.2 实施方案 (使用 winpmem)

**步骤 1**: 添加内存转储配置

```go
// internal/forensics/memory.go

type MemoryDumpConfig struct {
    ToolPath       string
    MaxSizeMB      int
    OutputDir      string
}

var DefaultMemoryDumpConfig = &MemoryDumpConfig{
    ToolPath:  "winpmem.exe",  // 假设在 PATH 中
    MaxSizeMB: 1024,
    OutputDir: os.TempDir(),
}
```

**步骤 2**: 实现系统内存转储

```go
func readSystemMemory() ([]byte, error) {
    config := DefaultMemoryDumpConfig
    
    // 创建临时输出文件
    outputFile := filepath.Join(config.OutputDir, 
        fmt.Sprintf("system_memory_%d.raw", time.Now().Unix()))
    
    // 调用 winpmem
    cmd := exec.Command(config.ToolPath, outputFile)
    if err := cmd.Run(); err != nil {
        return nil, fmt.Errorf("winpmem failed: %w", err)
    }
    
    defer os.Remove(outputFile)
    
    return os.ReadFile(outputFile)
}
```

**步骤 3**: 添加工具检测

```go
func detectMemoryDumpTool() (string, error) {
    tools := []string{"winpmem.exe", "dd.exe", "ftk imager.exe"}
    for _, tool := range tools {
        path, err := exec.LookPath(tool)
        if err == nil {
            return path, nil
        }
    }
    return "", fmt.Errorf("no memory dump tool found")
}
```

---

### ISSUE-F2: 实现内存分析功能

#### 4.2.1 问题分析

**现状**: `AnalyzeMemoryDump` 仅计算哈希，无实际分析。

**实现方案**: 使用 `volatility3` 进行内存分析。

#### 4.2.2 实施方案

**步骤 1**: 添加 Volatility 集成

```go
// internal/forensics/memory.go

type MemoryAnalyzer struct {
    volatilityPath string
    profile        string
}

func NewMemoryAnalyzer(volatilityPath string) *MemoryAnalyzer {
    return &MemoryAnalyzer{
        volatilityPath: volatilityPath,
    }
}

func (a *MemoryAnalyzer) Analyze(dumpPath string) (*MemoryAnalysis, error) {
    analysis := &MemoryAnalysis{
        DumpFile:   dumpPath,
        AnalysisTime: time.Now(),
    }
    
    // 提取进程树
    if procs, err := a.extractProcessTree(dumpPath); err == nil {
        analysis.ProcessTree = procs
    }
    
    // 提取网络连接
    if conns, err := a.findNetworkConnections(dumpPath); err == nil {
        analysis.NetworkConnections = conns
    }
    
    // 查找可疑 API 调用
    if apis, err := a.findSuspiciousAPIs(dumpPath); err == nil {
        analysis.SuspiciousAPIs = apis
    }
    
    return analysis, nil
}

func (a *MemoryAnalyzer) extractProcessTree(dumpPath string) ([]ProcessNode, error) {
    cmd := exec.Command("python3", a.volatilityPath, 
        "-f", dumpPath, "windows.pslist.PsList")
    
    output, err := cmd.Output()
    if err != nil {
        return nil, err
    }
    
    return parsePslistOutput(output)
}
```

---

### ISSUE-F3: 实现 Evidence Collection API

#### 4.3.1 问题分析

**现状**: `CollectEvidence` 仅返回假数据。

#### 4.3.2 实施方案

**步骤 1**: 实现证据收集逻辑

```go
func (h *ForensicsHandler) CollectEvidence(c *gin.Context) {
    var req CollectRequest
    if err := c.ShouldBindJSON(&req); err != nil {
        c.JSON(http.StatusBadRequest, ErrorResponse{Error: err.Error()})
        return
    }
    
    outputPath := req.OutputPath
    if outputPath == "" {
        outputPath = filepath.Join(os.TempDir(), 
            fmt.Sprintf("evidence_%d.zip", time.Now().Unix()))
    }
    
    // 创建证据收集器
    collector := NewEvidenceCollector(outputPath)
    
    // 收集各类证据
    if err := collector.CollectRegistry(); err != nil {
        // 记录错误但继续
    }
    if err := collector.CollectPrefetch(); err != nil {
        // 记录错误但继续
    }
    if err := collector.CollectShimcache(); err != nil {
        // 记录错误但继续
    }
    
    // 生成清单
    manifest := collector.GenerateManifest()
    
    // 保存到数据库
    if err := h.saveEvidenceManifest(manifest); err != nil {
        c.JSON(http.StatusInternalServerError, ErrorResponse{Error: err.Error()})
        return
    }
    
    c.JSON(http.StatusOK, CollectResponse{
        ID:          manifest.ID,
        Type:        req.Type,
        Status:      "completed",
        OutputPath:  outputPath,
        CollectedAt: manifest.CreatedAt,
        Message:     fmt.Sprintf("Collected %d files", len(manifest.Files)),
    })
}
```

---

### ISSUE-F4: 实现 ListEvidence/GetEvidence

#### 4.4.1 实施方案

**步骤 1**: 添加数据库表支持

```go
// internal/storage/schema.go 添加
CREATE TABLE IF NOT EXISTS evidence (
    id TEXT PRIMARY KEY,
    type TEXT NOT NULL,
    output_path TEXT NOT NULL,
    file_count INTEGER DEFAULT 0,
    total_size INTEGER DEFAULT 0,
    collected_at TEXT NOT NULL,
    collected_by TEXT,
    machine_id TEXT,
    manifest_hash TEXT
);
```

**步骤 2**: 实现查询

```go
func (h *ForensicsHandler) ListEvidence(c *gin.Context) {
    limitStr := c.DefaultQuery("limit", "50")
    offsetStr := c.DefaultQuery("offset", "0")
    
    limit, _ := strconv.Atoi(limitStr)
    offset, _ := strconv.Atoi(offsetStr)
    
    rows, err := h.db.Query(`
        SELECT id, type, output_path, file_count, total_size, 
               collected_at, collected_by
        FROM evidence
        ORDER BY collected_at DESC
        LIMIT ? OFFSET ?
    `, limit, offset)
    
    // 处理结果...
}
```

---

### ISSUE-F5: 修复 MemoryDump API

#### 4.5.1 实施方案

**步骤 1**: 修改 MemoryDump handler

```go
func (h *ForensicsHandler) MemoryDump(c *gin.Context) {
    if runtime.GOOS != "windows" {
        c.JSON(http.StatusNotImplemented, ErrorResponse{
            Error: "memory dump is only supported on Windows",
        })
        return
    }
    
    pidStr := c.Query("pid")
    outputPath := c.Query("output")
    
    if pidStr != "" {
        var pid uint32
        fmt.Sscanf(pidStr, "%d", &pid)
        
        collector := forensics.NewMemoryCollector(outputPath)
        result, err := collector.CollectProcessMemory(pid)
        if err != nil {
            c.JSON(http.StatusInternalServerError, gin.H{
                "status":  "error",
                "message": err.Error(),
                "pid":     pid,
            })
            return
        }
        
        c.JSON(http.StatusOK, gin.H{
            "status": "success",
            "result": result,
        })
        return
    }
    
    // 系统内存转储
    collector := forensics.NewMemoryCollector(outputPath)
    result, err := collector.CollectSystemMemory()
    if err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{
            "status":  "error",
            "message": err.Error(),
        })
        return
    }
    
    c.JSON(http.StatusOK, gin.H{
        "status": "success",
        "result": result,
    })
}
```

---

### ISSUE-F6: 改进 PowerShell 临时文件安全

#### 4.6.1 实施方案

```go
func runPowerShellCommand(script string) (string, error) {
    // 创建临时文件
    f, err := os.CreateTemp(os.TempDir(), "winalog_ps_*.ps1")
    if err != nil {
        return "", err
    }
    tmpFile := f.Name()
    
    // 设置适当权限：仅当前用户可读写
    if err := os.Chmod(tmpFile, 0600); err != nil {
        os.Remove(tmpFile)
        return "", err
    }
    
    // 写入脚本
    if _, err := f.WriteString(script); err != nil {
        os.Remove(tmpFile)
        return "", err
    }
    f.Close()
    
    // 确保清理
    defer os.Remove(tmpFile)
    
    // 执行
    return execPowerShell(tmpFile)
}
```

---

### ISSUE-F7: 添加 TSA 重试机制

#### 4.7.1 实施方案

```go
var defaultTSAServers = []string{
    "http://timestamp.digicert.com",
    "http://timestamp.sectigo.com",
    "http://timestamp.globalsign.com",
}

func requestTimestampWithRetry(req *TimestampRequest, maxRetries int) (*TimestampResult, error) {
    var lastErr error
    
    for attempt := 0; attempt < maxRetries; attempt++ {
        for _, tsaURL := range defaultTSAServers {
            result, err := RequestTimestamp(&TimestampRequest{
                FilePath:      req.FilePath,
                HashAlgorithm: req.HashAlgorithm,
                TSAServer:     tsaURL,
            })
            if err == nil {
                return result, nil
            }
            lastErr = err
        }
        
        // 指数退避
        time.Sleep(time.Duration(1<<uint(attempt)) * time.Second)
    }
    
    return nil, fmt.Errorf("all TSA servers failed: %w", lastErr)
}
```

---

## 五、架构改进建议

### 5.1 模块职责划分

```
internal/forensics/
├── hash.go              # 文件哈希 (MD5/SHA1/SHA256)
├── timestamp.go         # RFC3161 时间戳
├── signature.go         # Windows 签名验证
├── memory.go            # 内存转储和分析
├── chain.go             # 证据链
├── collector.go        # 证据收集器 (新)
├── volatility.go       # Volatility 集成 (新)
├── config.go           # 配置管理 (新)
└── errors.go            # 错误定义 (新)
```

### 5.2 统一入口

```go
// internal/forensics/forensics.go

type ForensicsService struct {
    config    *Config
    collector *Collector
    analyzer  *MemoryAnalyzer
}

func NewForensicsService(cfg *Config) *ForensicsService {
    return &ForensicsService{
        config:    cfg,
        collector: NewCollector(cfg),
        analyzer:  NewMemoryAnalyzer(cfg.VolatilityPath),
    }
}
```

---

## 六、实施优先级

| ID | 问题 | 优先级 | 复杂度 | 工作量 | 风险 |
|----|------|--------|--------|--------|------|
| ISSUE-F1 | 实现系统内存转储 | **P1** | 高 | 3 人天 | 中 |
| ISSUE-F2 | 实现内存分析功能 | **P1** | 高 | 5 人天 | 中 |
| ISSUE-F3 | 实现 Evidence Collection API | **P2** | 中 | 2 人天 | 低 |
| ISSUE-F4 | 实现 ListEvidence/GetEvidence | **P2** | 低 | 1 人天 | 低 |
| ISSUE-F5 | 修复 MemoryDump API | **P2** | 低 | 0.5 人天 | 低 |
| ISSUE-F6 | 改进 PowerShell 临时文件安全 | **P3** | 低 | 0.5 人天 | 低 |
| ISSUE-F7 | 添加 TSA 重试机制 | **P3** | 低 | 0.5 人天 | 低 |

---

## 七、验证清单

### 7.1 测试命令

```bash
cd winalog-go/winalog-go

# 构建验证
go build ./...

# 取证模块测试 (需要 Windows)
go test ./internal/forensics/... -v

# CLI 测试
./winalog forensics hash <file>
./winalog forensics verify <file>
```

### 7.2 API 测试

```bash
# 计算哈希
curl -X POST http://localhost:8080/api/forensics/hash \
  -H "Content-Type: application/json" \
  -d '{"path": "C:\\Windows\\System32\\notepad.exe"}'

# 验证签名
curl "http://localhost:8080/api/forensics/signature?path=C:\\Windows\\System32\\notepad.exe"
```

---

## 八、附录

### A. 相关文件

- `internal/forensics/hash.go` - 文件哈希
- `internal/forensics/timestamp.go` - 时间戳
- `internal/forensics/signature.go` - 签名验证
- `internal/forensics/memory.go` - 内存取证
- `internal/forensics/chain.go` - 证据链
- `internal/forensics/forensics_linux.go` - Linux 占位符
- `internal/api/handlers_forensics.go` - API 处理器
- `cmd/winalog/commands/system.go` - CLI 命令

### B. 外部依赖建议

| 工具 | 用途 | 许可证 |
|------|------|--------|
| winpmem | 内存转储 | GPL |
| volatility3 | 内存分析 | BSD |
| psfile | 证据收集 | Sysinternals |

---

*文档版本: 1.0*
*模块: Forensics*
*审核状态: 待审核*

# 事件紀錄 — MC組事務所網站

---

## 2026-05-21 HTML 檔案編碼損壞事件

### 事件概述
網站三個 HTML 頁面的中文內容全部變成亂碼，本機端與 GitHub Pages 同時受影響，網頁無法正常顯示。

### 影響範圍
| 檔案 | 狀態 |
|------|------|
| `index.html` | ❌ 中文全部亂碼（含 UTF-8 BOM） |
| `clip-audit.html` | ❌ 中文全部亂碼（含 UTF-8 BOM） |
| `merch.html` | ❌ 中文全部亂碼（含 UTF-8 BOM） |

未受影響：`vtuber.html`、`vtubers.html`、`feedback.html`、`admin.html`、`js/data.js`

### 根本原因
**Commit `0efbcdc`**（安全性修補：target="_blank" 加上 rel="noopener noreferrer"）

Claude 使用內建 Edit tool 對含有中文的 HTML 檔案進行批次修改。Edit tool 在儲存時以不相容的方式處理非 ASCII 字元，導致：
1. 原有的中文 UTF-8 字元被替換為 Unicode 私用區（PUA, U+E000–U+F8FF）字元
2. 部分字元被替換為 ASCII `?`（U+003F）
3. 所有受影響檔案都被加上了 UTF-8 BOM（EF BB BF）

### 修復方法
1. 以 `git checkout 8f81395 -- index.html clip-audit.html merch.html` 從最後一個正確 commit 還原
2. 用 PowerShell + `System.Text.UTF8Encoding($false)`（UTF-8 without BOM）重新套用 target="_blank" 安全修補
3. Commit `41ac46d` 推送修復

### 偵測時間
使用者回報（約 commit 後數分鐘）→ 診斷確認（約 10 分鐘）→ 修復推送完成

### 教訓與預防措施
→ 詳見 `CLAUDE.md` 的「⚠️ HTML 檔案編碼安全規則」章節
→ `.git/hooks/pre-commit` hook 已建立，會在 commit 前自動檢查 BOM

---

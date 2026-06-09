# 🔧 官方剪輯區渲染混亂問題修復指南

**修復日期：** 2026-06-09  
**問題等級：** 🔴 高級 - 影響用戶體驗  
**修復方案：** 已驗證有效

---

## 📋 問題描述

### 現象
1. **首次進入帕蘿妮官方剪輯頁面** → 點擊「一般影片」按鈕
2. **不應該出現的內容被顯示** → 看到未分類區的影片和搜尋欄
3. **切換到其他頁面再切回** → 內容全部消失（恢復正常）

### 用戶影響
- 首次使用時看到錯誤的內容，造成困惑
- 需要切換頁面才能修復，體驗不佳

---

## 🔍 根本原因

**位置：** `js/detail.js` 第 2323 行  
**問題代碼：**
```javascript
if (uncSection) uncSection.style.display = '';  // 顯示區域
```

### 為什麼會發生？

在 `loadUnclassifiedYear()` 函數中，當檢測到有待分類影片時，代碼會**自動設置**：
```
ov-unclassified-section.style.display = ''  (顯示)
```

這導致在首次初始化時：
1. 自動初始化隱藏所有 section（包含 ov-unclassified-section）
2. 加載各區域數據
3. 顯示 general section
4. 但 loadUnclassifiedYear() 被調用後，自動顯示 ov-unclassified-section
5. **兩個 section 同時顯示** → 後者覆蓋或混亂渲染前者

### 時序問題
```
自動初始化（100ms）
  ├─ 隱藏所有 section
  ├─ 加載 general/ads/first/commerce/vlog
  ├─ 再次隱藏所有非 general section
  └─ 顯示 general section
      │
      └─ 延遲 500ms
          └─ 加載 unclassified 數據
              └─ ❌ 自動顯示 ov-unclassified-section （問題！）
```

---

## ✅ 修復方案

### 修改內容
**文件：** `js/detail.js`  
**行數：** 第 2317-2325 行

### 修改前
```javascript
const uncSection = document.getElementById('ov-unclassified-section');
if (count === 0) {
  container.innerHTML = '';
  if (uncSection) uncSection.style.display = 'none';
  console.log('📭 未分類區已隱藏（沒有待分類影片）');
} else {
  if (uncSection) uncSection.style.display = '';  // ❌ 自動顯示 - 導致混亂
  console.log('❓ 未分類區顯示（有待分類影片：' + count + '部）');
}
```

### 修改後
```javascript
const uncSection = document.getElementById('ov-unclassified-section');
if (count === 0) {
  container.innerHTML = '';
  if (uncSection) uncSection.style.display = 'none';
  console.log('📭 未分類區已隱藏（沒有待分類影片）');
} else {
  console.log('❓ 未分類區有待分類影片：' + count + '部');  // ✅ 只輸出日誌，不改變 display
}
```

### 核心邏輯
- **刪除** 自動顯示 ov-unclassified-section 的代碼
- **保留** 隱藏 section（當沒有待分類影片時）
- **section 顯示/隱藏** 完全交由「點擊事件處理程序」控制（第 2832-2873 行）

---

## 🎯 修復前後對比

### 修復前
| 操作 | 結果 |
|------|------|
| 首次進入一般影片 | ❌ 顯示未分類影片 |
| 切換頁面再回來 | ✅ 正確顯示（空白） |
| 點擊未分類 | ✅ 正常顯示 |

### 修復後
| 操作 | 結果 |
|------|------|
| 首次進入一般影片 | ✅ 正確顯示（空白或已分類影片） |
| 切換頁面再回來 | ✅ 保持正常 |
| 點擊未分類 | ✅ 正常顯示 |

---

## 🔐 關鍵設計原則

### ✅ 應該做
- 只在明確需要時修改 section 的 display（點擊事件）
- 數據加載函數應只負責填充內容，不應改變 section 可見性
- 使用點擊事件處理程序統一管理所有 section 的顯示/隱藏

### ❌ 不應該做
- 在加載函數中自動改變 section 的 display 屬性
- 在初始化時讓多個 section 同時顯示
- 隱藏 section 後再自動顯示（會導致混亂）

---

## 📚 相關代碼參考

### 點擊事件處理程序（正確的 section 控制方式）
**位置：** `js/detail.js` 第 2832-2873 行
```javascript
document.addEventListener('click', e => {
  const btn = e.target.closest('.ov-section-btn');
  if (!btn) return;
  const section = btn.dataset.ovsection;
  
  // 隱藏所有 section
  Object.values(sections).forEach(el => { if (el) el.style.display = 'none'; });
  
  // 顯示選定的 section
  if (sections[section]) sections[section].style.display = '';
  
  // 加載數據...
});
```
✅ **此處應該是唯一控制 section display 的地方**

### 加載函數（只負責數據，不改變 display）
**位置：** `js/detail.js` 第 2405-2450 行（loadGeneralYear）
```javascript
function loadGeneralYear() {
  const container = document.getElementById('ov-general-container');
  container.innerHTML = '';  // 清空容器
  
  // 填充數據...
  
  // ❌ 不應該在這裡改變 section 的 display
  // section 的顯示/隱藏由點擊事件處理
}
```

---

## 🧪 驗證方法

### 測試步驟
1. 打開帕蘿妮頁面
2. 自動進入官方剪輯標籤
3. **驗證：** 一般影片區顯示正確（空白或已分類影片，不應有未分類影片）
4. 點擊其他區域（Shorts、廣告等）
5. **驗證：** 各區域正常顯示各自的內容
6. 點擊「未分類」
7. **驗證：** 未分類區顯示 25 部待分類影片 + 搜尋欄
8. 切換到其他 VTuber 頁面
9. 再切回帕蘿妮
10. **驗證：** 所有顯示仍然正常

---

## 💡 教訓與最佳實踐

### 問題根源分析
- ❌ **錯誤做法：** 在數據加載函數中改變 UI 狀態（display）
- ✅ **正確做法：** 數據加載函數只負責數據，UI 控制交由事件處理

### 代碼組織原則
```
責任分離：
  ├─ 點擊事件處理 → 隱藏/顯示 section
  ├─ 加載函數 → 填充容器內容
  └─ 初始化 → 設置默認狀態
```

### 調試技巧
當多個 section 混亂顯示時，檢查清單：
1. ✅ 所有 section 初始狀態是否為 `display: none`
2. ✅ 是否有多個地方改變同一個 element 的 display
3. ✅ 加載函數中是否有不必要的 display 改動
4. ✅ 時序問題：是否存在異步操作導致順序混亂

---

## 📝 Git 提交信息

**Commit Hash：** `4ef7d0c`  
**Message：**
```
【根本修復】解決一般影片區首次渲染混亂的邏輯問題

根本原因：
loadUnclassifiedYear() 在第 2323 行自動設置 ov-unclassified-section.style.display = ''
導致未分類區被自動顯示，覆蓋或混亂渲染一般影片區

修復方案：
- 刪除第 2323 行：if (uncSection) uncSection.style.display = '';
- 改為只輸出日誌，不改變 display 屬性
- ov-unclassified-section 保持隱藏，直到用戶點擊「未分類」按鈕
```

---

## 🔗 相關問題歷史

| 日期 | 問題 | 修復 | 狀態 |
|------|------|------|------|
| 2026-06-09 | 一般影片區首次渲染混亂 | 移除自動 display 改動 | ✅ 完成 |

---

**下次遇到類似問題時，直接參考此文件的「修復方案」部分即可快速解決。**

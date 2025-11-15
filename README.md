# 提詞器 Teleprompter

一個純前端的提詞器網頁應用，提供文字輸入、即時預覽與自動滾動播放功能。

## 專案介紹

這是一個使用 React + Vite 開發的提詞器應用，適合演講、錄製影片或直播時使用。應用採用最小可行性方案（MVP）設計，提供核心的提詞功能。

## 功能列表

### 核心功能（MVP）

- ✅ **文字輸入/編輯**：提供多行文字輸入框，支援即時編輯
- ✅ **即時預覽**：輸入時右側同步顯示大字體預覽效果
- ✅ **自動滾動**：平滑的自動向下滾動功能
- ✅ **播放控制**：開始/暫停/重置按鈕
- ✅ **速度調整**：可調整滾動速度（0.5x - 3.0x）
- ✅ **鍵盤快捷鍵**：
  - 空白鍵：開始/暫停
  - ↑↓：調整速度
  - Home：重置到頂部
- ✅ **響應式設計**：支援桌面、平板、手機等不同裝置

## 技術棧

- **前端框架**：React 18
- **建置工具**：Vite 5
- **狀態管理**：Zustand
- **樣式框架**：Tailwind CSS
- **字型**：Inter

## 需求

- **Node.js 版本**：18+（請參考 `.nvmrc` 文件）

## 安裝與啟動

### 1. 安裝依賴

```bash
npm install
```

### 2. 啟動開發伺服器

```bash
npm run dev
```

應用將在 `http://localhost:5173` 啟動。

### 3. 建置生產版本

```bash
npm run build
```

建置後的檔案將輸出到 `dist` 目錄。

### 4. 預覽生產版本

```bash
npm run preview
```

## 部署步驟

### GitHub Pages 部署

專案已配置 GitHub Actions，當推送到 `master` 分支時會自動部署到 GitHub Pages。

部署流程：
1. 將程式碼推送到 GitHub 倉庫
2. 確保在 `master` 分支
3. GitHub Actions 會自動觸發建置和部署流程
4. 部署完成後，應用將可在 `https://[username].github.io/teleprompter-example/` 訪問

### 手動部署

如果需要手動部署到其他平台：

1. 執行建置命令：
   ```bash
   npm run build
   ```

2. 將 `dist` 目錄的內容上傳到您的網頁伺服器

## 專案結構

```
teleprompter-example/
├── src/
│   ├── components/      # React 元件
│   │   ├── Header.jsx
│   │   ├── EditorPanel.jsx
│   │   ├── PreviewPanel.jsx
│   │   └── ControlPanel.jsx
│   ├── store/           # Zustand 狀態管理
│   │   └── teleprompterStore.js
│   ├── App.jsx          # 主應用元件
│   ├── main.jsx         # 應用入口
│   └── index.css        # 全域樣式
├── idea/                # 產品規格文件
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 使用說明

1. **輸入文字**：在左側編輯區輸入或貼上您的演講稿內容
2. **預覽效果**：右側會即時顯示大字體預覽效果
3. **調整速度**：使用速度滑桿調整滾動速度（0.5x - 3.0x）
4. **開始播放**：點擊「開始」按鈕或按空白鍵開始自動滾動
5. **控制播放**：使用「暫停」按鈕或空白鍵暫停，使用「重置」按鈕回到頂部

## 鍵盤快捷鍵

- **空白鍵**：開始/暫停播放
- **↑ 鍵**：增加滾動速度（+0.1x）
- **↓ 鍵**：減少滾動速度（-0.1x）
- **Home 鍵**：重置到頂部並停止播放

## 瀏覽器支援

- Chrome（最新版）
- Firefox（最新版）
- Safari（最新版）
- Edge（最新版）

## 授權

本專案採用 MIT 授權。

## 後續迭代規劃

### Phase 2（次要功能）
- 手動滾動控制
- 字體大小調整
- 主題切換（深色/淺色）
- 全螢幕模式

### Phase 3（進階功能）
- 本地儲存（LocalStorage）
- 匯入/匯出文字檔
- 字數統計與閱讀時間估算
- 倒數計時功能

# React 企業入口門戶網站

> 完整的企業級 Portal 網站，採用 React + TypeScript + Tailwind CSS 開發

![React](https://img.shields.io/badge/React-19.2-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38bdf8)
![Vite](https://img.shields.io/badge/Vite-7.2-646cff)

## 📋 專案簡介

這是一個完整的企業入口門戶網站，遵循嚴格的設計規範，包含七大功能區塊：

- **Header** - 固定置頂雙層導覽列
- **Hero** - 自動輪播主視覺區
- **QuickAccess** - 圓形圖示快捷入口
- **News** - 最新消息卡片區
- **SearchModule** - Tabs 切換搜尋模組
- **Activity** - 會員活動橫式卡片
- **Footer** - 三層級資訊底欄
- **ScrollToTop** - 智慧回頂按鈕

## 🚀 快速開始

### 安裝依賴

```bash
npm install
```

### 啟動開發伺服器

```bash
npm run dev
```

開啟瀏覽器訪問：http://localhost:5173/

### 建置正式版本

```bash
npm run build
npm run preview  # 預覽建置結果
```

## 🎨 設計規範

### 色碼系統

專案使用嚴格的色碼規範，所有顏色均已定義於 Tailwind 配置：

| 用途 | 色碼 | Tailwind Class |
|------|------|----------------|
| 主色（金色） | #D4A73C | `bg-primary` / `text-primary` |
| 主色 Hover | #B8932F | `hover:bg-primaryDark` |
| 次要色（深灰藍） | #2F3A40 | `text-secondary` |
| 強調色（橘色） | #E28A2E | `bg-accent` |
| 背景淺色 | #F7E3D3 | `bg-light` |
| 背景深色 | #EED2BB | `bg-lightDark` |
| 內容背景 | #FAF7F2 | `bg-background` |
| Top Bar | #E9F0EE | `bg-topbar` |

### 字體設定

```css
font-family: 'Noto Sans TC', sans-serif;
```

### 間距規範

- 區塊上下間距：80px (`py-80px`)
- 區塊內間距：60px (`py-60px`)
- Top Bar 高度：40px
- Navbar 高度：80px

## 📦 專案結構

```
react-web/
├── src/
│   ├── components/          # 所有組件
│   │   ├── Header.tsx      # 頂部導覽列
│   │   ├── Hero.tsx        # 輪播圖
│   │   ├── QuickAccess.tsx # 快捷入口
│   │   ├── News.tsx        # 新聞卡片
│   │   ├── SearchModule.tsx # 搜尋模組
│   │   ├── Activity.tsx    # 活動區
│   │   ├── Footer.tsx      # 底部資訊
│   │   ├── ScrollToTop.tsx # 回頂按鈕
│   │   └── index.ts        # 組件統一匯出
│   ├── App.tsx             # 主應用程式
│   ├── main.tsx            # 入口檔案
│   ├── index.css           # 全域樣式
│   └── App.css             # 應用樣式
├── public/                  # 靜態資源
├── tailwind.config.js      # Tailwind 配置
├── postcss.config.js       # PostCSS 配置
├── vite.config.ts          # Vite 配置
├── tsconfig.json           # TypeScript 配置
└── package.json            # 專案依賴
```

## 🔧 技術棧

- **React 19** - UI 框架
- **TypeScript** - 類型安全
- **Vite** - 建置工具
- **Tailwind CSS** - 樣式框架
- **Lucide React** - 圖示庫
- **PostCSS** - CSS 處理

## 📱 響應式設計

專案採用 Desktop-first 設計，支援完整 RWD：

- **Desktop**: ≥1200px（主要設計）
- **Tablet**: 768px - 1199px
- **Mobile**: <768px

## ✨ 組件詳細說明

### Header

- **Top Bar**: 語言切換、會員登入入口
- **Navbar**: Logo、主選單（8項）、搜尋功能
- **下拉選單**: CSS group-hover 觸發，平滑動畫
- **Fixed 定位**: 帶有 120px spacer

### Hero

- **自動輪播**: 每 5 秒切換
- **手動控制**: 左右箭頭、底部指示點
- **平滑動畫**: 1000ms 淡入淡出
- **圖片來源**: picsum.photos

### News

- **三欄卡片**: 響應式 Grid 佈局
- **固定標題高度**: line-clamp-2 + h-[54px]
- **日期顯示**: YYYY/MM/DD 格式
- **動態按鈕**: 「更多 {category}」

### Footer

- **三層結構**:
  1. 導覽連結區（四欄）
  2. 聯絡資訊區（Logo + 資訊）
  3. 版權聲明區
- **特色**: 電話號碼帶黃色圖示、可點擊無障礙標章

### ScrollToTop

- **智慧顯示**: 捲動超過 300px 才出現
- **平滑捲動**: 一鍵回頂
- **金色圓形**: 符合品牌色系

## 🎯 開發重點

### 色碼管理

所有色碼必須使用 Tailwind 配置中的變數，嚴禁硬編碼：

```tsx
// ✅ 正確
<div className="bg-primary hover:bg-primaryDark">

// ❌ 錯誤（僅在無法使用變數時例外）
<div className="bg-[#D4A73C]">
```

### 過渡效果

統一使用 300ms 過渡時間：

```tsx
className="transition-all duration-300"
```

### 按鈕樣式

避免預設白色底色：

```tsx
<button className="bg-transparent hover:text-primary">
```

### Fixed 元素

使用 Fixed 定位時需考慮內容遮蓋：

```tsx
<header className="fixed top-0 z-50">...</header>
<div className="h-[120px]"></div> {/* Spacer */}
```

## 📝 程式碼規範

- 使用函式組件與 React Hooks
- TypeScript 類型定義完整
- 組件命名使用 PascalCase
- 檔案命名與組件名稱一致
- 統一使用 `export const` 匯出組件

## 🔗 相關連結

- [React 官方文檔](https://react.dev/)
- [Tailwind CSS 文檔](https://tailwindcss.com/)
- [Vite 文檔](https://vitejs.dev/)
- [Lucide Icons](https://lucide.dev/)

## 📄 授權

Copyright © 2024 中華民國資訊軟體協會

---

**Built with ❤️ using React + TypeScript + Tailwind CSS**
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

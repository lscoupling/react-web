/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 企業色系
        topbar: '#E9F0EE',
        topbarText: '#555555',
        primary: '#D4A73C',
        primaryDark: '#B8932F',
        secondary: '#2F3A40',
        accent: '#E28A2E',
        
        // 中立色系
        light: '#F7E3D3',
        lightDark: '#EED2BB',
        background: '#FAF7F2',
        white: '#FFFFFF',
        
        // 文字色
        textDark: '#2F3A40',
        textMain: '#333333',
        textSecondary: '#666666',
        textMuted: '#6B5B52',
        textLight: '#5A4A42',
        
        // 區塊色系
        cardBg: '#FFFFFF',
        cardCategory: '#D4A73C',
        footerBg: '#F7E3D3',
        footerText: '#5A4A42',
        footerTitle: '#4A3B34',
        footerBottomBg: '#EED2BB',
        
        // Tabs 色系
        tabUnactive: '#F2F2F2',
        tabActive: '#7FAFA3',
        searchBtn: '#F0B429',
        searchBtnHover: '#D9A021',
      },
      fontFamily: {
        sans: ['Noto Sans TC', 'sans-serif'],
      },
      spacing: {
        '120px': '120px',
        '80px': '80px',
        '60px': '60px',
        '40px': '40px',
      },
      boxShadow: {
        'nav': '0 0 8px rgba(0, 0, 0, 0.05)',
        'card': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'dropdown': '0 10px 25px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        'lg': '10px',
        'card': '8px',
      },
    },
  },
  plugins: [],
}

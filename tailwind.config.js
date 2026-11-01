/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Archivo Black"', 'sans-serif'],
        sans: ['Hind', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        paper: {
          DEFAULT: '#f8fafc',
          secondary: '#f1f5f9',
          card: '#ffffff',
          border: '#e2e8f0',
        },
        ink: {
          DEFAULT: '#0f172a',
          muted: '#475569',
          subtle: '#64748b',
        },
        highlight: {
          yellow: '#e0f2fe',
          'yellow-text': '#0369a1',
          red: '#b91c1c',
          green: '#0284c7',
          blue: '#0369a1',
        },
        brand: {
          electric: '#0284c7',
          'electric-hover': '#0369a1',
          cyan: '#0ea5e9',
          navy: '#0f172a',
          dark: '#1e293b',
          green: '#15803d',
          'green-hover': '#166534',
        },
        wa: {
          header: '#075e54',
          bg: '#efeae2',
          bubble: '#ffffff',
          check: '#34b7f1',
        }
      },
      animation: {
        'pulse-cta': 'pulse-cta 2.2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        'pulse-cta': {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 8px 20px -4px rgba(2, 132, 199, 0.35)' },
          '50%': { transform: 'scale(1.015)', boxShadow: '0 12px 25px -4px rgba(2, 132, 199, 0.45)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}

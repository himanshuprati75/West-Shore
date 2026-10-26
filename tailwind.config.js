/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#050F22',
          900: '#0A1C3C', // Westshore Lakeshore Authority Deep Navy
          850: '#0E2652',
          800: '#13326B',
          700: '#1D468F',
          600: '#255BB8',
        },
        rescue: {
          50: '#FFF5F0',
          100: '#FFE4D9',
          500: '#FB4D0E', // Official Trane & Westshore Mechanical Brand Orange
          600: '#E03E00',
          700: '#BA3200',
        },
        lakeshore: {
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
          400: '#38BDF8',
          500: '#0284C7',
          600: '#0369A1',
        },
        emergency: {
          500: '#DC2626',
          600: '#B91C1C',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'pulse-subtle': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-subtle': 'bounce 2s infinite',
      }
    },
  },
  plugins: [],
}

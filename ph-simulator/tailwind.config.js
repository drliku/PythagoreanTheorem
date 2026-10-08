/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter Tight"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', '"Inter Tight"', 'ui-sans-serif', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        lab: {
          950: '#060b1c',
          900: '#0b1329',
          850: '#0f1a36',
          800: '#132044',
          700: '#1c2d5a',
          600: '#2a3f75',
          500: '#41579a',
          400: '#677cbc',
          300: '#97a8da',
          200: '#c5d0ef',
          100: '#e7ecfb',
        },
        acid: '#f26522',
        base: '#6c4bd6',
        aqua: '#5cc8ff',
      },
      boxShadow: {
        panel: '0 1px 0 rgba(255,255,255,0.05) inset, 0 24px 60px -24px rgba(0,0,0,0.7)',
      },
    },
  },
  plugins: [],
};

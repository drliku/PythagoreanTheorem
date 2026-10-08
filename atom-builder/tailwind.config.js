/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Manrope"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Sora"', '"Manrope"', 'ui-sans-serif', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        lab: {
          950: '#050a1a',
          900: '#0a1228',
          850: '#0e1833',
          800: '#121f3f',
          700: '#1b2b55',
          600: '#283c6e',
          500: '#3d5491',
          400: '#6178b5',
          300: '#93a6d6',
          200: '#c3cfee',
          100: '#e5ebfa',
        },
        proton: '#ff5a6e',
        neutron: '#a9b4c8',
        electron: '#4cb5ff',
      },
      boxShadow: {
        panel: '0 1px 0 rgba(255,255,255,0.04) inset, 0 20px 50px -20px rgba(0,0,0,0.6)',
      },
    },
  },
  plugins: [],
};

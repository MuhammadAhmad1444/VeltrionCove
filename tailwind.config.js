/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        mist: '#F2F5F7',
        line: '#DDE5E9',
        ink: { DEFAULT: '#0C2B33', soft: '#3D5A61', faint: '#6B8287' },
        cove: { DEFAULT: '#0E7C86', light: '#2BB3BD', deep: '#0A4F57', wash: '#E3F2F3' },
        sand: { DEFAULT: '#F2C98A', soft: '#FBF0DD' },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      borderRadius: { card: '16px' },
      maxWidth: { site: '1240px' },
    },
  },
  plugins: [],
}

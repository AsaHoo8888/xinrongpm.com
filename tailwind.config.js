/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#111827',
        steel: '#64708a',
        signal: '#475aa7',
        leaf: '#60b630',
        cloud: '#f6f8ff',
        line: '#dce2f2',
      },
      boxShadow: {
        soft: '0 24px 70px rgba(18, 24, 38, 0.14)',
        lift: '0 18px 48px rgba(71, 90, 167, 0.18)',
      },
    },
  },
  plugins: [],
};

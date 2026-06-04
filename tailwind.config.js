/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#172033',
        steel: '#5d7187',
        signal: '#1f9d8a',
        ember: '#e86f43',
      },
      boxShadow: {
        soft: '0 24px 70px rgba(23, 32, 51, 0.14)',
      },
    },
  },
  plugins: [],
};

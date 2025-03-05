/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#BF5745',
        secondary: '#F3CC9F',
        dark: '#2F2F2F',
        accent: '#6A8D73',
        deepDark: '#1E3231',
      },
      fontFamily: {
        medieval: ['MedievalSharp', 'cursive'],
      },
    },
  },
  plugins: [],
};
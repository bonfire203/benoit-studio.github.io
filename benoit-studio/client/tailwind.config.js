/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
      ],
  theme: {
    extend: {
        colors: {
            primary: '#f1cbff',
            secondary: '#FFCCBB',
            neutral: '#BBEEFF',
        }
    },
  },
  plugins: [],
}


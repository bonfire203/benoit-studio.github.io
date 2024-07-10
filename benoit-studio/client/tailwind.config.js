/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
      ],
  theme: {
    extend: {
        colors: {
            primary: '#0B3954',
            secondary: '#087E8B',
            neutral: '#BFD7EA',
        }
    },
  },
  plugins: [],
}


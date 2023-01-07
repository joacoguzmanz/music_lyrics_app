/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'figma': '0px 4px 36px 2px rgba(0, 0, 0, 0.25)'
      },
      fontFamily: {
        'poppins': ['poppins', 'sans-serif']
      },
    },
  },
  plugins: [],
}
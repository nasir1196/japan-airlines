/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}", ],
  theme: {
    extend: {},
    screens: {
      'sm': '390px',
      "pad": "780px",
      'laptop': '1080px',
      'desktop': '1280px',
    },
    container: { padding: "2rem", center: true }
  },
  plugins: [],
};

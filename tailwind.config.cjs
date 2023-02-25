/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-orange": "#F9E3DC",
        "dark-orange": "FF6635"
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#f5f5f5", // your background color
        border: "#e5e5e5",     // your border color
        foreground: "#111111", // <--- add this
      }
    }
  },
  plugins: [],
};

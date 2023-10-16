/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "san-marino": "#4a55a2",
      "tea-green": "#bfedc1",
      "white": "#fff",
    },
    extend: {
      spacing: {
        "62px": "62px",
        "78px": "78px",
        "120px": "120px",
      }
    },
    fontFamily: {
      "playfair-display": ["Playfair Display"],
    },
  },
  plugins: [],
}
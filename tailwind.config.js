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
      "yellow-tick": "#efead8",
      "lime-green":"#C8ECC5",
    },
    extend: {
      spacing: {
        "62px": "62px",
        "78px": "78px",
        "120px": "120px",
      },
      padding:{
        "350": "350px",
        "500": "500px",
        "700": "700px",
      },
      margin:{
        "200": "-200px",
      },
    },
    fontFamily: {
      "playfair-display": ["Playfair Display"],
    },
  },
  plugins: [],
}
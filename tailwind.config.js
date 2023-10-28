/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "san-marino": "#4a55a2",
        "tea-green": "#bfedc1",
        "white": "#fff",
        "yellow-tick": "#efead8",
        "lime-green": "#C8ECC5",
        "aubergine": "#906296",
        "light-purple": "#7E94C7",
      },
      spacing: {
        "62px": "62px",
        "78px": "78px",
        "120px": "120px",
      },
      padding: {
        "350": "350px",
        "500": "500px",
        "700": "700px",
        "200": "-700px",
      },
      margin: {
        "200": "-200px",
      },
      width: {
        "200": "200%",
        "30%": "30%",
        "23%": "23%",
      },
      height: {
        "89vw": "89vw",
        "80vw": "80vw",
      },
    },
    fontFamily: {
      "playfair-display": ["Playfair Display"],
      "raleway": ["Raleway"],
    },
  },
  plugins: [],
}
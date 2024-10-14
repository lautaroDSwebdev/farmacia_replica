/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "font-global": "'Roboto', sans-serif",
      },
      fontSize:{
        "tamaño-letra-global":"1rem",
      },
      maxWidth:{
        "maximo-ancho": "1100px",
        "max-ancho-img":"100%",
      },
      height:{
        "mini-icons-height":"3rem",
      }
    },
  },
  plugins: [],
}


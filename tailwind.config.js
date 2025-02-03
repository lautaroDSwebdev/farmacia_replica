/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  "darkMode": "class",
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
      },
      borderColor: {
        "dark_placeholderYborder": "#f7f7f7",
      },
      backgroundColor: {
        "dark-theme": "#bdbcbc",
        "dark-productstheme": "#a7a6a6",
        "dark_theme_details": "#ef4444",
      },
     
    },
  },
  plugins: [],
}


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
      backgroundColor: {
        "dark-theme": "#C9A29A",
        "dark_theme_details": "#BA4747",
        "dark_placeholderYborder": "#BDBDBD"
      },
      color: {
        "textdarktheme": "#fff"
      }
    },
  },
  plugins: [],
}


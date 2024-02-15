/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/App.js",
    "./src/components/Navbar.js",
    "./src/views/Inicio.jsx",
    "./src/components/Button.js",
    "./src/views/Nosotros.jsx"
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          '204E51': '#204E51',
          'F0F0F0': '#F0F0F0',
          '264948': '#264948'
        }
      }
    },
  },
  plugins: [],
}

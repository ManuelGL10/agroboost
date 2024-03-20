/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/App.js",
    "./src/components/Navbar.js",
    "./src/views/Inicio.jsx",
    "./src/components/Button.js",
    "./src/views/Nosotros.jsx",
    "./src/views/Producto.jsx",
    "./src/views/Servicio.jsx",
    "./src/views/Dashboard_Home.jsx",
    "./src/views/DashboardVenta.jsx",
    "./src/views/DashboardProduct.jsx",
    "./src/views/Login.jsx",
    "./src/views/Registro.jsx",
    "./src/components/Hero.js",
    "./src/components/Agroboost.js",
    "./src/components/Cards.js",
    "./src/components/CardsService.js",
    "./src/components/CardsProduct.js",
    "./src/components/Beneficios.js",
    "./src/components/Footer.js",
    "./src/components/InfoNosotros.js",
    "./src/components/InfoProducto.js",
    "./src/components/Download.js",
    "./src/components/Questions.js",
    "./src/components/Navbar_Admin.js",
    "./src/components/Navbar_Top.js",
    "./src/components/MainHome.js",
    "./src/components/MenuAdmin.js",
    "./src/components/MainVenta.js",
    "./src/components/MainProduct.js",
    "./src/components/LoginForm.js", 
    "./src/components/RegistroForm.js",
    "./src/components/ModalError.js", 
    "./src/components/ModalBienvenida.js",
    
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          '204E51': '#204E51',
          'F0F0F0': '#F0F0F0',
          '264948': '#264948',
          'color_logo': '#66bc8a'
        }
      }
    },
  },
  plugins: [],
}

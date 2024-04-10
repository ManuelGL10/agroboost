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
    "./src/views/DashboardUsuarios.jsx",
    "./src/views/DashboardConfig.jsx",
    "./src/views/DashboardCultivo.jsx",
    "./src/views/Login.jsx",
    "./src/views/Registro.jsx",
    "./src/views/DashboardRegistro.jsx",
    "./src/views/Password.jsx",
    "./src/views/NewPass.jsx",
    "./src/views/Domicilio.jsx",
    "./src/views/ProfileUser.jsx",
    "./src/views/VerificationPage.jsx",
    "./src/views/ProductosVenta.jsx",
    "./src/views/UserHome.jsx",
    "./src/views/UserDevice.jsx",
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
    "./src/components/dashboard/MainHome.js",
    "./src/components/dashboard/MenuAdmin.js",
    "./src/components/dashboard/MainVenta.js",
    "./src/components/dashboard/MainProduct.js",
    "./src/components/dashboard/MainUsers.js",
    "./src/components/dashboard/MainConfig.js",
    "./src/components/dashboard/MainCultivo.js",
    "./src/components/LoginForm.js", 
    "./src/components/RegistroForm.js",
    "./src/components/LoginForm.js", 
    "./src/components/RegistroForm.js",
    "./src/components/ModalError.js", 
    "./src/components/ModalBienvenida.js",
    "./src/components/dashboard/MainRegistro.js",
    "./src/components/ForgottenPassword.js",
    "./src/components/NewPassword.js",
    "./src/components/InfoDomicilio.js",
    "./src/components/dashboard/MainProfile.js",
    "./src/components/MainProfile.js",
    "./src/components/Verificacion.js",
    "./src/components/Modals/ProductModal.js",
    "./src/components/Modals/UsersModal.js",
    "./src/components/Modals/PasswordModal.js",
    "./src/components/Modals/DeleteModal.js",
    "./src/components/Modals/SuccessModal.js",
    "./src/components/Modals/QuestionModal.js",
    "./src/components/Producto.js",
    "./src/components/User/NavBarUser.js",
    "./src/components/User/NavBarLat.js",
    "./src/components/User/InicioUser.js",
    "./src/components/User/DatosUser.js",
    "./src/components/User/GraficaHumedad.js",
    "./src/components/User/ClimateDay.js",
    "./src/components/User/DeviceUser.js",
    "./src/components/User/ModalEditar.js",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          '204E51': '#204E51',
          'F0F0F0': '#F0F0F0',
          '264948': '#264948',
          'color_logo': '#66bc8a'
        },
        background: '#F5F6FA'
      }
    },
  },
  plugins: [],
  darkMode: "class"
}

# TimelessPages 📚

TimelessPages es una plataforma de inventario para una librería. En este **frontend** puedes interactuar con el **backend** del mismo proyecto.

## 🌐 Demo en Línea 🚀

[TimelessPages en acción](https://timeless-pages-product-inventory-gk.vercel.app/)

## 🛠️ Stack Tecnológico 💻

- ⚡ Vite
- ⚛️ React
- 📝 JavaScript
- 🎨 Tailwind CSS (utilizado para pruebas iniciales)
- 🎨 SASS
- 🗂️ Zustand
- 🔀 React Router
- 📡 Axios

## ⚡ Funcionalidades ✨

- **🆕 Registro de Usuario:** permite crear una cuenta con nombre, correo, contraseña y confirmación de contraseña. Desde este componente también se puede acceder al inicio de sesión.

  - Zustand guarda el token en `localStorage` usando `persist` para mantener la sesión activa.
  - Todos los usuarios nuevos son **vendedores por defecto**; solo los administradores pueden cambiar el rol.

- **🔑 Inicio de Sesión (Login):** permite ingresar credenciales y autenticar al usuario.

  - Zustand almacena el token y la información del usuario usando `persist`.
  - Luego, el usuario es redirigido a la página principal (Home).

- **🏠 Página Principal (Home):** incluye un menú con las siguientes opciones:

  - 🛒 Registrar Compra
  - 💰 Registrar Venta
  - 📦 Registrar Producto
  - 📊 Dashboard
  - 🚪 Cerrar Sesión

- **📝 Formularios de Acción:**

  - 🛒 Registrar ventas con selección múltiple
  - 📦 Registrar compras con selección múltiple
  - 📚 Registrar nuevos libros

- **📊 Dashboard:**
  - 📈 Tabla con reporte de inventario en tiempo real
  - 📅 Tabla con reporte de ventas filtrado por fecha
  - 🗂️ Menú lateral (SideMenu) con múltiples opciones para futuras funcionalidades

## 👥 Credenciales de Prueba 🔐

Puedes probar la aplicación con las siguientes cuentas:

- ✉️ correo: useradmin1@gmail.com  
  🔑 contraseña: 123456
- ✉️ correo: useradmin2@gmail.com  
  🔑 contraseña: 123456

> ⚠️ Nota: No incluyas comillas al usar las credenciales.

También puedes crear un nuevo usuario, pero recuerda que serás **vendedor** y no tendrás permisos para registrar compras ni productos.  
El principal permiso de un vendedor es **crear ventas**.

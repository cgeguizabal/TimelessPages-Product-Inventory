# TimelessPages 📚

TimelessPages es una plataforma de inventario para una librería. En este frontend puedes interactuar con el backend del mismo proyecto.

## 🌐 Live Demo
[TimelessPages en acción](https://timeless-pages-product-inventory-gk.vercel.app/register)

## 🛠️ Tech Stack
- Vite
- React
- JavaScript
- Tailwind CSS (usado para pruebas iniciales)
- SASS
- Zustand
- React Router
- Axios

## ⚡ Funcionalidades

- **Registro de usuario:** permite crear una cuenta con nombre, email, contraseña y confirmación de contraseña. Desde este componente también se puede acceder al login. Al registrar un usuario, Zustand guarda el token en `localStorage` usando `persist` para mantener la sesión activa.  
  > Nota: Todos los nuevos usuarios son vendedores por defecto; solo los administradores pueden cambiar el rol.

- **Login:** permite ingresar credenciales y autenticar al usuario. Zustand también guarda el token y la información del usuario utilizando `persist`. Luego, el usuario es redirigido a la página principal (Home).

- **Home:** incluye un menú con las siguientes opciones:
  - Registrar Compra
  - Registrar Venta
  - Registrar Producto
  - Dashboard
  - Logout

- **Formularios de acción:**
  - Registrar ventas con selección múltiple
  - Registrar compras con selección múltiple
  - Registro de nuevos libros

- **Dashboard:** accesible solo por administradores, incluye:
  - Tabla con reporte de stock en tiempo real
  - Tabla con reporte de ventas filtrado por fecha
  - SideMenu con múltiples opciones para futuras funcionalidades

## 👥 Credenciales para probar la aplicación

Puedes experimentar con las siguientes cuentas:

- Admin:
  - email: useradmin1@gmail.com  
    password: 123456
  - email: useradmin2@gmail.com  
    password: 123456

- Vendedor:
  - email: userSeller1@gmail.com  
    password: 123456
  - email: userSeller2@gmail.com  
    password: 123456

> Nota: No incluyas las comillas al usar las credenciales.

También puedes crear un nuevo usuario, pero recuerda que serás un **vendedor** y no tendrás permisos para crear compras o registrar libros. El permiso principal de un vendedor es **crear ventas**.

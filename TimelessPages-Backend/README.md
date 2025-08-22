# 📚 Timeless Pages Inventory API

**Tech Stack:** Laravel, Laravel Sanctum, MySQL, Postman, Railway

**Postman Collection link:** [Click aquí](https://.postman.co/workspace/My-Workspace~fabd6659-33f8-4926-8597-842371a54b83/collection/41282147-a5b0c647-8827-4610-977c-2b0788cd8718?action=share&creator=41282147)

Aplicación creada para manejar el inventario de una librería, gestionada por **Vendedores** y **Administradores**, quienes son los usuarios con acceso a la plataforma. 📖✨

## 🚀 Funcionalidades
- 🔑 Autenticación de usuarios a través de **Bearer Token**  
- 📝 Registro de usuarios  
- 🔓 Inicio y cierre de sesión  
- 👥 CRUD completo de **Usuarios (Users)** con permisos exclusivos para administradores  
- 📦 CRUD de **Productos (Products)** con permisos para vendedores y administradores, con limitaciones para los vendedores  
- 🏢 CRUD de **Proveedores (Suppliers)**, permisos limitados para vendedores  
- 👤 CRUD de **Clientes (Clients)**  
- 🛒 Registro de **Compras (Purchases)**  
- 💰 Registro de **Ventas (Sales)** y obtención de datos de ventas
- 🔓 Configuraciones de permisos por middleware y policies
- 🔓 Validaciones de datos con FormRequest
- 📊 **Reportes de Stock**  
- 📅 **Reporte de ventas** filtradas por fechas  
- 🧾 **Reporte de compras** filtrado por proveedores  

**Dominio de la aplicación:** [Timeless Pages API](https://timelesspages-product-inventory-production.up.railway.app/api)

> ⚠️ Nota: El prefijo `v1` no se incluyó en las rutas iniciales de la API para facilitar el desarrollo y las pruebas. Reconozco que la versionación es importante para el mantenimiento y la compatibilidad hacia atrás, y se implementará antes de que la API entre en producción.

---

## 🔐 Autenticación
| Método | Endpoint       | Descripción |
|--------|----------------|-------------|
| POST   | `/api/login`   | Iniciar sesión |
| POST   | `/api/logout`  | Cerrar sesión |
| POST   | `/api/register`| Registrar usuario |

---

## 👥 Gestión de Usuarios
| Método | Endpoint               | Descripción |
|--------|------------------------|-------------|
| GET    | `/api/users`        | Listar todos los usuarios | Role necesario para ocupar: Admin
| GET    | `/api/users/{id}`   | Obtener usuario por ID | Role necesario para ocupar: Admin
| POST   | `/api/users`        | Crear nuevo usuario | Role necesario para ocupar: Admin
| PUT    | `/api/users/{id}`   | Actualizar usuario | Role necesario para ocupar: Admin
| DELETE | `/api/users/{id}`   | Eliminar usuario | Role necesario para ocupar: Admin

---

## 📦 Gestión de Productos
| Método | Endpoint                  | Descripción |
|--------|---------------------------|-------------|
| GET    | `/api/products`        | Listar todos los productos | Role necesario para ocupar: Admin o seller
| GET    | `/api/products/{id}`   | Obtener producto por ID | Role necesario para ocupar: Admin o seller
| POST   | `/api/products`        | Crear nuevo producto | Role necesario para ocupar: Admin
| PUT    | `/api/products/{id}`   | Actualizar producto | Role necesario para ocupar: Admin
| DELETE | `/api/products/{id}`   | Eliminar producto | Role necesario para ocupar: Admin

---

## 🏢 Gestión de Proveedores
| Método | Endpoint                  | Descripción |
|--------|---------------------------|-------------|
| GET    | `/api/suppliers`       | Listar todos los proveedores | Role necesario para ocupar: Admin o seller
| GET    | `/api/suppliers/{id}`  | Obtener proveedor por ID | Role necesario para ocupar: Admin o seller
| POST   | `/api/suppliers`       | Crear nuevo proveedor | Role necesario para ocupar: Admin
| PUT    | `/api/suppliers/{id}`  | Actualizar proveedor | Role necesario para ocupar: Admin
| DELETE | `/api/suppliers/{id}`  | Eliminar proveedor | Role necesario para ocupar: Admin

---

## 👤 Gestión de Clientes
| Método | Endpoint                  | Descripción |
|--------|---------------------------|-------------|
| GET    | `/api/clients`         | Listar todos los clientes | Role necesario para ocupar: Admin o seller
| GET    | `/api/clients/{id}`    | Obtener cliente por ID | Role necesario para ocupar: Admin o seller
| POST   | `/api//clients`         | Crear nuevo cliente | Role necesario para ocupar: Admin o seller
| PUT    | `/api/clients/{id}`    | Actualizar cliente | Role necesario para ocupar: Admin
| DELETE | `/api/clients/{id}`    | Eliminar cliente | Role necesario para ocupar: Admin

---

## 🛒 Gestión de Compras
| Método | Endpoint                  | Descripción |
|--------|---------------------------|-------------|
| POST   | `/api/purchases`       | Registrar nueva compra | Role necesario para ocupar: Admin


---

## 💰 Gestión de Ventas
| Método | Endpoint                  | Descripción |
|--------|---------------------------|-------------|
| GET    | `/api/sales`           | Listar todas las ventas | Role necesario para ocupar: Admin o seller
| POST   | `/api/sales`           | Registrar nueva venta | Role necesario para ocupar: Admin o seller 


---

## 📊 Reportes
| Método | Endpoint                  | Descripción |
|--------|---------------------------|-------------|
| GET    | `/api/reports/stock`   | Reporte de stock actual | Role necesario para ocupar: Admin
| POST   | `/api/reports/sales`   | Reporte de ventas filtrado por fechas | Role necesario para ocupar: Admin
| POST   | `/api/reports/purchases` | Reporte de compras filtrado por proveedores | Role necesario para ocupar: Admin

---
## 🛠️ Requisitos para probar la aplicación

Actualmente la aplicación se encuentra en línea y puedes utilizarla sin ningún problema. Únicamente comparto contigo una lista de usuarios para que puedas experimentar con ella:

```json
{
  "name": "UserAdmin1",
  "email": "useradmin1@gmail.com"
}
{
  "name": "UserAdmin2",
  "email": "useradmin2@gmail.com"
}
{
  "name": "UserSeller1",
  "email": "userSeller1@gmail.com"
}
{
  "name": "UserSeller2",
  "email": "userSeller2@gmail.com"
}
```

Si quieres utilizarlos localmente, asegúrate de tener los siguientes requisitos en tu computadora:

- PHP 8.x
- Composer
- MySQL ejecutado por XAMPP u otra herramienta
- Apache

---

⚙️ Configuración del entorno

Para conectar la API a tu propia base de datos, simplemente llena el archivo .env con tus credenciales locales de la base de datos. Sin este paso, la API no podrá conectarse a la base de datos.

Ejemplo de configuración:
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=nombre_de_tu_base
DB_USERNAME=usuario_de_tu_base
DB_PASSWORD=contraseña_de_tu_base

---

🚀 Instalación local
⚠️ Asegúrate de que MySQL esté corriendo localmente (por ejemplo con XAMPP) antes de iniciar.

Clona el repositorio
Abre tu terminal en la raíz del proyecto

Ejecuta los siguientes comandos:

composer install # Instala dependencias PHP
cp .env.example .env # Crea tu archivo .env
php artisan serve # Inicia el servidor local


# 📚 Timeless Pages Inventory API

**Stack Tecnológico:** Laravel, Laravel Sanctum, MySQL, Postman, Railway

**Colección de Postman:** [Abrir en Postman](https://www.postman.com/workspace/My-Workspace~fabd6659-33f8-4926-8597-842371a54b83/collection/41282147-a5b0c647-8827-4610-977c-2b0788cd8718?action=share&creator=41282147) ✅

Aplicación creada para gestionar el inventario de una librería, operada por **Vendedores** y **Administradores**, quienes son los usuarios con acceso a la plataforma. 📖✨

## 🚀 Funcionalidades

-   🔑 Autenticación de usuarios mediante **Bearer Token**
-   📝 Registro de usuarios
-   🔓 Inicio y cierre de sesión
-   👥 CRUD completo de **Usuarios** con permisos exclusivos de administrador
-   📦 CRUD de **Productos** con permisos para vendedores y administradores (limitado para vendedores)
-   🏢 CRUD de **Proveedores**, con permisos limitados para vendedores
-   👤 CRUD de **Clientes**
-   🛒 Registro de **Compras**
-   💰 Registro de **Ventas** y obtención de datos de ventas
-   🔓 Configuración de permisos con middleware y policies
-   🔓 Validación de datos con FormRequest
-   📊 **Reportes de Inventario**
-   📅 **Reportes de Ventas** filtrados por fecha
-   🧾 **Reportes de Compras** filtrados por proveedores

**Dominio de la Aplicación:** [Timeless Pages API](https://timelesspages-product-inventory-production.up.railway.app)

---

## 🔐 Autenticación

| Método | Endpoint           | Descripción       |
| ------ | ------------------ | ----------------- |
| POST   | `/api/v1/login`    | Iniciar sesión    |
| POST   | `/api/v1/logout`   | Cerrar sesión     |
| POST   | `/api/v1/register` | Registrar usuario |

---

## 👥 Gestión de Usuarios

| Método | Endpoint             | Descripción        | Rol Requerido |
| ------ | -------------------- | ------------------ | ------------- |
| GET    | `/api/v1/users`      | Listar usuarios    | Admin         |
| GET    | `/apiv1//users/{id}` | Obtener usuario    | Admin         |
| POST   | `/api/v1/users`      | Crear usuario      | Admin         |
| PUT    | `/api/v1/users/{id}` | Actualizar usuario | Admin         |
| DELETE | `/api/v1/users/{id}` | Eliminar usuario   | Admin         |

---

## 📦 Gestión de Productos

| Método | Endpoint                | Descripción         | Rol Requerido  |
| ------ | ----------------------- | ------------------- | -------------- |
| GET    | `/api/v1/products`      | Listar productos    | Admin/Vendedor |
| GET    | `/api/v1/products/{id}` | Obtener producto    | Admin/Vendedor |
| POST   | `/api/v1/products`      | Crear producto      | Admin          |
| PUT    | `/api/v1/products/{id}` | Actualizar producto | Admin          |
| DELETE | `/api/v1/products/{id}` | Eliminar producto   | Admin          |

---

## 🏢 Gestión de Proveedores

| Método | Endpoint                 | Descripción          | Rol Requerido  |
| ------ | ------------------------ | -------------------- | -------------- |
| GET    | `/api/v1/suppliers`      | Listar proveedores   | Admin/Vendedor |
| GET    | `/api/v1/suppliers/{id}` | Obtener proveedor    | Admin/Vendedor |
| POST   | `/api/v1/suppliers`      | Crear proveedor      | Admin          |
| PUT    | `/api/v1/suppliers/{id}` | Actualizar proveedor | Admin          |
| DELETE | `/api/v1/suppliers/{id}` | Eliminar proveedor   | Admin          |

---

## 👤 Gestión de Clientes

| Método | Endpoint               | Descripción        | Rol Requerido  |
| ------ | ---------------------- | ------------------ | -------------- |
| GET    | `/api/v1/clients`      | Listar clientes    | Admin/Vendedor |
| GET    | `/api/v1/clients/{id}` | Obtener cliente    | Admin/Vendedor |
| POST   | `/api/v1/clients`      | Crear cliente      | Admin/Vendedor |
| PUT    | `/api/v1/clients/{id}` | Actualizar cliente | Admin          |
| DELETE | `/api/v1/clients/{id}` | Eliminar cliente   | Admin          |

---

## 🛒 Gestión de Compras

| Método | Endpoint            | Descripción      | Rol Requerido |
| ------ | ------------------- | ---------------- | ------------- |
| POST   | `/api/v1/purchases` | Registrar compra | Admin         |

---

## 💰 Gestión de Ventas

| Método | Endpoint        | Descripción     | Rol Requerido  |
| ------ | --------------- | --------------- | -------------- |
| GET    | `/api/v1/sales` | Listar ventas   | Admin/Vendedor |
| POST   | `/api/v1/sales` | Registrar venta | Admin/Vendedor |

---

## 📊 Reportes

| Método | Endpoint                    | Descripción                           | Rol Requerido |
| ------ | --------------------------- | ------------------------------------- | ------------- |
| GET    | `/api/v1/reports/stock`     | Reporte de inventario actual          | Admin         |
| POST   | `/api/v1/reports/sales`     | Reporte de ventas filtrado por fechas | Admin         |
| POST   | `/api/v1/reports/purchases` | Reporte de compras por proveedores    | Admin         |

---

## 🛠️ Requisitos para Probar la Aplicación

La aplicación está actualmente en línea y completamente funcional. Aquí hay cuentas de prueba que puedes usar:

```json
{
  "name": "UserAdmin1",
  "email": "useradmin1@gmail.com",
  "password": "123456"
}
{
  "name": "UserAdmin2",
  "email": "useradmin2@gmail.com",
  "password": "123456"
}
{
  "name": "UserSeller1",
  "email": "userSeller1@gmail.com",
  "password": "123456"
}
{
  "name": "UserSeller2",
  "email": "userSeller2@gmail.com",
  "password": "123456"
}

Usa las credenciales sin comillas

```

Si deseas ejecutarla de forma local, asegúrate de que tu computadora tenga los siguientes requisitos:

-   PHP 8.x
-   Composer
-   MySQL ejecutado por XAMPP u otra herramienta
-   Apache

---

⚙️ Configuración del Entorno

Para conectar la API a tu propia base de datos, simplemente llena el archivo .env con tus credenciales locales. Sin este paso, la API no podrá conectarse a la base de datos.

Ejemplo de configuración:
DB_CONNECTION=mysql  
DB_HOST=127.0.0.1  
DB_PORT=3306  
DB_DATABASE=your_database_name  
DB_USERNAME=your_database_user  
DB_PASSWORD=your_database_password

---

🚀 Instalación Local
⚠️ Asegúrate de que MySQL esté corriendo localmente (por ejemplo, con XAMPP) antes de iniciar.

Clona el repositorio
Abre tu terminal en la raíz del proyecto

Ejecuta los siguientes comandos:

```bash
composer install      # ⚙️  Instalar dependencias de PHP
cp .env.example .env  # 📝 Crear el archivo de configuración .env
php artisan serve     # 🚀 Iniciar el servidor local

```

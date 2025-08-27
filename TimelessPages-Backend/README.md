# 📚 Timeless Pages Inventory API

**Tech Stack:** Laravel, Laravel Sanctum, MySQL, Postman, Railway

**Postman Collection:** [Abrir en Postman](https://www.postman.com/workspace/My-Workspace~fabd6659-33f8-4926-8597-842371a54b83/collection/41282147-a5b0c647-8827-4610-977c-2b0788cd8718?action=share&creator=41282147) ✅

Aplicación creada para manejar el inventario de una librería, gestionada por **Vendedores** y **Administradores**, quienes son los usuarios con acceso a la plataforma. 📖✨

## 🚀 Funcionalidades

-   🔑 Autenticación de usuarios a través de **Bearer Token**
-   📝 Registro de usuarios
-   🔓 Inicio y cierre de sesión
-   👥 CRUD completo de **Usuarios (Users)** con permisos exclusivos para administradores
-   📦 CRUD de **Productos (Products)** con permisos para vendedores y administradores, con limitaciones para los vendedores
-   🏢 CRUD de **Proveedores (Suppliers)**, permisos limitados para vendedores
-   👤 CRUD de **Clientes (Clients)**
-   🛒 Registro de **Compras (Purchases)**
-   💰 Registro de **Ventas (Sales)** y obtención de datos de ventas
-   🔓 Configuraciones de permisos por middleware y policies
-   🔓 Validaciones de datos con FormRequest
-   📊 **Reportes de Stock**
-   📅 **Reporte de ventas** filtradas por fechas
-   🧾 **Reporte de compras** filtrado por proveedores

**Dominio de la aplicación:** [Timeless Pages API](https://timelesspages-product-inventory-production.up.railway.app)

---

## 🔐 Autenticación

| Método | Endpoint           | Descripción       |
| ------ | ------------------ | ----------------- |
| POST   | `/api/v1/login`    | Iniciar sesión    |
| POST   | `/api/v1/logout`   | Cerrar sesión     |
| POST   | `/api/v1/register` | Registrar usuario |

---

## 👥 Gestión de Usuarios

| Método | Endpoint             | Descripción               | Role necesario |
| ------ | -------------------- | ------------------------- | -------------- |
| GET    | `/api/v1/users`      | Listar todos los usuarios | Admin          |
| GET    | `/apiv1//users/{id}` | Obtener usuario por ID    | Admin          |
| POST   | `/api/v1/users`      | Crear nuevo usuario       | Admin          |
| PUT    | `/api/v1/users/{id}` | Actualizar usuario        | Admin          |
| DELETE | `/api/v1/users/{id}` | Eliminar usuario          | Admin          |

---

## 📦 Gestión de Productos

| Método | Endpoint                | Descripción                | Role necesario |
| ------ | ----------------------- | -------------------------- | -------------- |
| GET    | `/api/v1/products`      | Listar todos los productos | Admin o Seller |
| GET    | `/api/v1/products/{id}` | Obtener producto por ID    | Admin o Seller |
| POST   | `/api/v1/products`      | Crear nuevo producto       | Admin          |
| PUT    | `/api/v1/products/{id}` | Actualizar producto        | Admin          |
| DELETE | `/api/v1/products/{id}` | Eliminar producto          | Admin          |

---

## 🏢 Gestión de Proveedores

| Método | Endpoint                 | Descripción                  | Role necesario |
| ------ | ------------------------ | ---------------------------- | -------------- |
| GET    | `/api/v1/suppliers`      | Listar todos los proveedores | Admin o Seller |
| GET    | `/api/v1/suppliers/{id}` | Obtener proveedor por ID     | Admin o Seller |
| POST   | `/api/v1/suppliers`      | Crear nuevo proveedor        | Admin          |
| PUT    | `/api/v1/suppliers/{id}` | Actualizar proveedor         | Admin          |
| DELETE | `/api/v1/suppliers/{id}` | Eliminar proveedor           | Admin          |

---

## 👤 Gestión de Clientes

| Método | Endpoint               | Descripción               | Role necesario |
| ------ | ---------------------- | ------------------------- | -------------- |
| GET    | `/api/v1/clients`      | Listar todos los clientes | Admin o Seller |
| GET    | `/api/v1/clients/{id}` | Obtener cliente por ID    | Admin o Seller |
| POST   | `/api/v1/clients`      | Crear nuevo cliente       | Admin o Seller |
| PUT    | `/api/v1/clients/{id}` | Actualizar cliente        | Admin          |
| DELETE | `/api/v1/clients/{id}` | Eliminar cliente          | Admin          |

---

## 🛒 Gestión de Compras

| Método | Endpoint            | Descripción            | Role necesario |
| ------ | ------------------- | ---------------------- | -------------- |
| POST   | `/api/v1/purchases` | Registrar nueva compra | Admin          |

---

## 💰 Gestión de Ventas

| Método | Endpoint        | Descripción             | Role necesario |
| ------ | --------------- | ----------------------- | -------------- |
| GET    | `/api/v1/sales` | Listar todas las ventas | Admin o Seller |
| POST   | `/api/v1/sales` | Registrar nueva venta   | Admin o Seller |

---

## 📊 Reportes

| Método | Endpoint                    | Descripción                                 | Role necesario |
| ------ | --------------------------- | ------------------------------------------- | -------------- |
| GET    | `/api/v1/reports/stock`     | Reporte de stock actual                     | Admin          |
| POST   | `/api/v1/reports/sales`     | Reporte de ventas filtrado por fechas       | Admin          |
| POST   | `/api/v1/reports/purchases` | Reporte de compras filtrado por proveedores | Admin          |

---

## 🛠️ Requisitos para probar la aplicación

Actualmente la aplicación se encuentra en línea y puedes utilizarla sin ningún problema. Únicamente comparto contigo una lista de usuarios para que puedas experimentar con ella:

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

Usar credenciales sin las comillas
```

Si quieres utilizarlos localmente, asegúrate de tener los siguientes requisitos en tu computadora:

-   PHP 8.x
-   Composer
-   MySQL ejecutado por XAMPP u otra herramienta
-   Apache

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

```bash
composer install      # ⚙️ Instala dependencias de PHP
cp .env.example .env  # 📝 Crea tu archivo de configuración .env
php artisan serve      # 🚀 Inicia el servidor local
```

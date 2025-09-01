# 📚 Timeless Pages Inventory API

**Tech Stack:** Laravel, Laravel Sanctum, MySQL, Postman, Railway

**Postman Collection:** [Open in Postman](https://www.postman.com/workspace/My-Workspace~fabd6659-33f8-4926-8597-842371a54b83/collection/41282147-a5b0c647-8827-4610-977c-2b0788cd8718?action=share&creator=41282147) ✅

Application created to manage a bookstore’s inventory, operated by **Sellers** and **Administrators**, who are the users with access to the platform. 📖✨

## 🚀 Features

-   🔑 User authentication via **Bearer Token**
-   📝 User registration
-   🔓 Login and logout
-   👥 Full CRUD of **Users** with exclusive admin permissions
-   📦 CRUD of **Products** with permissions for sellers and admins (limited for sellers)
-   🏢 CRUD of **Suppliers**, with limited permissions for sellers
-   👤 CRUD of **Clients**
-   🛒 Registration of **Purchases**
-   💰 Registration of **Sales** and retrieval of sales data
-   🔓 Permission configuration with middleware and policies
-   🔓 Data validation with FormRequest
-   📊 **Stock Reports**
-   📅 **Sales Reports** filtered by date
-   🧾 **Purchase Reports** filtered by suppliers

**Application Domain:** [Timeless Pages API](https://timelesspages-product-inventory-production.up.railway.app)

---

## 🔐 Authentication

| Method | Endpoint           | Description   |
| ------ | ------------------ | ------------- |
| POST   | `/api/v1/login`    | Login         |
| POST   | `/api/v1/logout`   | Logout        |
| POST   | `/api/v1/register` | Register user |

---

## 👥 User Management

| Method | Endpoint             | Description     | Required Role |
| ------ | -------------------- | --------------- | ------------- |
| GET    | `/api/v1/users`      | List all users  | Admin         |
| GET    | `/apiv1//users/{id}` | Get user by ID  | Admin         |
| POST   | `/api/v1/users`      | Create new user | Admin         |
| PUT    | `/api/v1/users/{id}` | Update user     | Admin         |
| DELETE | `/api/v1/users/{id}` | Delete user     | Admin         |

---

## 📦 Product Management

| Method | Endpoint                | Description        | Required Role |
| ------ | ----------------------- | ------------------ | ------------- |
| GET    | `/api/v1/products`      | List all products  | Admin/Seller  |
| GET    | `/api/v1/products/{id}` | Get product by ID  | Admin/Seller  |
| POST   | `/api/v1/products`      | Create new product | Admin         |
| PUT    | `/api/v1/products/{id}` | Update product     | Admin         |
| DELETE | `/api/v1/products/{id}` | Delete product     | Admin         |

---

## 🏢 Supplier Management

| Method | Endpoint                 | Description         | Required Role |
| ------ | ------------------------ | ------------------- | ------------- |
| GET    | `/api/v1/suppliers`      | List all suppliers  | Admin/Seller  |
| GET    | `/api/v1/suppliers/{id}` | Get supplier by ID  | Admin/Seller  |
| POST   | `/api/v1/suppliers`      | Create new supplier | Admin         |
| PUT    | `/api/v1/suppliers/{id}` | Update supplier     | Admin         |
| DELETE | `/api/v1/suppliers/{id}` | Delete supplier     | Admin         |

---

## 👤 Client Management

| Method | Endpoint               | Description       | Required Role |
| ------ | ---------------------- | ----------------- | ------------- |
| GET    | `/api/v1/clients`      | List all clients  | Admin/Seller  |
| GET    | `/api/v1/clients/{id}` | Get client by ID  | Admin/Seller  |
| POST   | `/api/v1/clients`      | Create new client | Admin/Seller  |
| PUT    | `/api/v1/clients/{id}` | Update client     | Admin         |
| DELETE | `/api/v1/clients/{id}` | Delete client     | Admin         |

---

## 🛒 Purchase Management

| Method | Endpoint            | Description           | Required Role |
| ------ | ------------------- | --------------------- | ------------- |
| POST   | `/api/v1/purchases` | Register new purchase | Admin         |

---

## 💰 Sales Management

| Method | Endpoint        | Description       | Required Role |
| ------ | --------------- | ----------------- | ------------- |
| GET    | `/api/v1/sales` | List all sales    | Admin/Seller  |
| POST   | `/api/v1/sales` | Register new sale | Admin/Seller  |

---

## 📊 Reports

| Method | Endpoint                    | Description                           | Required Role |
| ------ | --------------------------- | ------------------------------------- | ------------- |
| GET    | `/api/v1/reports/stock`     | Current stock report                  | Admin         |
| POST   | `/api/v1/reports/sales`     | Sales report filtered by dates        | Admin         |
| POST   | `/api/v1/reports/purchases` | Purchase report filtered by suppliers | Admin         |

---

## 🛠️ Requirements to Test the Application

The application is currently online and fully usable. Here are test accounts you can use:

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

Use credentials without quotation marks

```

If you want to run it locally, make sure your computer has the following requirements:

-   PHP 8.x
-   Composer
-   MySQL ejecutado por XAMPP u otra herramienta
-   Apache

---

⚙️ Environment Setup

To connect the API to your own database, simply fill out the .env file with your local database credentials. Without this step, the API cannot connect to the database.

Example configuration:
DB_CONNECTION=mysql  
DB_HOST=127.0.0.1  
DB_PORT=3306  
DB_DATABASE=your_database_name  
DB_USERNAME=your_database_user  
DB_PASSWORD=your_database_password

---

🚀 Local Installation
⚠️ Make sure MySQL is running locally (e.g., with XAMPP) before starting.

Clone the repository
Open your terminal at the project root

Run the following commands:

```bash
composer install      # ⚙️  Install PHP dependencies
cp .env.example .env  # 📝 Create your .env configuration file
php artisan serve      # 🚀 Start the local server
```

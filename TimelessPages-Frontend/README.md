# TimelessPages 📚

TimelessPages is an inventory platform for a bookstore. In this frontend, you can interact with the backend of the same project.

## 🌐 Live Demo 🚀

[TimelessPages in action](https://timeless-pages-product-inventory-gk.vercel.app/)

## 🛠️ Tech Stack 💻

- ⚡ Vite
- ⚛️ React
- 📝 JavaScript
- 🎨 Tailwind CSS (used for initial tests)
- 🎨 SASS
- 🗂️ Zustand
- 🔀 React Router
- 📡 Axios

## ⚡ Features ✨

- **🆕 User Registration:** allows you to create an account with name, email, password, and password confirmation. From this component, you can also access the login.

  - Zustand saves the token in `localStorage` using `persist` to keep the session active.
  - All new users are **sellers by default**; only administrators can change the role.

- **🔑 Login:** allows entering credentials and authenticating the user.

  - Zustand stores the token and user information using `persist`.
  - Then, the user is redirected to the main page (Home).

- **🏠 Home:** includes a menu with the following options:

  - 🛒 Register Purchase
  - 💰 Register Sale
  - 📦 Register Product
  - 📊 Dashboard
  - 🚪 Logout

- **📝 Action Forms:**

  - 🛒 Register sales with multiple selection
  - 📦 Register purchases with multiple selection
  - 📚 Register new books

- **📊 Dashboard:**
  - 📈 Table with real-time stock report
  - 📅 Table with sales report filtered by date
  - 🗂️ SideMenu with multiple options for future functionalities

## 👥 Test Credentials 🔐

You can try the application with the following accounts:

- ✉️ email: useradmin1@gmail.com  
  🔑 password: 123456
- ✉️ email: useradmin2@gmail.com  
  🔑 password: 123456

> ⚠️ Note: Do not include quotation marks when using the credentials.

You can also create a new user, but remember you will be a **seller** and won’t have permissions to create purchases or register books.  
The main permission of a seller is **to create sales**.

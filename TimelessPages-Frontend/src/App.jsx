import "./App.css";
import Register from "./pages/Register";
import Login from "./pages/login";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import useAuthStore from "./store/auth";
import RegisterPurchase from "./pages/RegisterPurchase";
import RegisterSale from "./pages/RegisterSale";
import RegisterProduct from "./pages/RegisterProduct";
import Dashboard from "./pages/Dashboard";

function App() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  return (
    <Routes>
      //Redirect root to register page
      <Route
        path="/"
        element={
          isAuthenticated ? (
            <Navigate to="/home" replace />
          ) : (
            <Navigate to="/register" replace />
          )
        }
      />
      ////////////////////////////////////////////////// //Register
      <Route
        path="/register"
        element={
          isAuthenticated ? <Navigate to="/home" replace /> : <Register />
        }
      />
      //LOGIN
      <Route
        path="/login"
        element={isAuthenticated ? <Navigate to="/home" replace /> : <Login />}
      />
      //Register purchase
      <Route
        path="/register-purchase"
        element={
          isAuthenticated ? (
            <RegisterPurchase />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      //Register Sales
      <Route
        path="/register-sales"
        element={
          isAuthenticated ? <RegisterSale /> : <Navigate to="/login" replace />
        }
      />
      //RegisterProduct
      <Route
        path="/register-product"
        element={
          isAuthenticated ? (
            <RegisterProduct />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      //Dashboard
      <Route
        path="/dashboard"
        element={
          isAuthenticated ? <Dashboard /> : <Navigate to="/login" replace />
        }
      />
      //HOME
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
}

export default App;

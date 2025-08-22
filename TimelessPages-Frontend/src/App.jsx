import "./App.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import useAuthStore from "./store/auth";
import RegisterPurchase from "./pages/RegisterPurchase";

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
      //////////////////////////////////////////////////
      <Route
        path="/register"
        element={
          isAuthenticated ? <Navigate to="/home" replace /> : <Register />
        }
      />
      <Route
        path="/login"
        element={isAuthenticated ? <Navigate to="/home" replace /> : <Login />}
      />
      <Route path="/register-purchase" element={<RegisterPurchase />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
}

export default App;

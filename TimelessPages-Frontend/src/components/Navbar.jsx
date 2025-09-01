import useAuthStore from "../store/auth";
import navbar from "../styles/components/navbar.module.scss";
import { motion } from "motion/react";
import { logout } from "../api/services/auth";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const { user, isAuthenticated, logout: clearAuth } = useAuthStore();

  const navigate = useNavigate();

  if (!isAuthenticated) return null;

  const handleLogout = async () => {
    try {
      await logout(); // try to log out on backend //Add token when using normal axios without axiosInstance
    } catch (error) {
      // If token is invalid/expired → just clear locally
      if (error.response?.status === 401) {
        console.warn("Token expired or invalid. Clearing locally.");
      } else {
        console.error("Logout failed:", error);
        alert("Something went wrong. Logging you out locally.");
      }
    } finally {
      // Always clear client-side no matter what
      clearAuth();
      navigate("/login");
    }
  };

  return (
    <div>
      <div className={navbar.nav_container}>
        <h1 className={navbar.hidden}>Welcome {user?.name}</h1>
        <div className={navbar.nav_buttons}>
          {user.role === "admin" && (
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.1,
                x: { duration: 0.5, ease: "easeInOut" },
                opacity: { duration: 1.5, ease: "easeOut" },
              }}
              onClick={() => navigate("/dashboard")}
              className={navbar.dashboard}
            >
              <h2>Dashboard</h2>
            </motion.div>
          )}
          <motion.button
            initial={{ opacity: 0, x: 105 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.9,
              x: { duration: 0.5, ease: "easeInOut" },
              opacity: { duration: 1.5, ease: "easeOut" },
            }}
            onClick={handleLogout}
            className={navbar.logout}
          >
            <h2>Logout</h2>
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

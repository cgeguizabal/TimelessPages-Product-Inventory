import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/auth";
import home from "../styles/page/home.module.scss";
import BoxButton from "../components/BoxButton";
import { logout } from "../api/services/auth";
import { motion } from "motion/react";

function HomePage() {
  const { user, token, isAuthenticated, logout: clearAuth } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    //Checks if user is authenticated
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

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
    <>
      <div className={home.home_container}>
        <h1 className={home.hidden}>Welcome {user?.name}</h1>
        <div className={home.home_buttons}>
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
              className={home.dashboard}
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
            className={home.logout}
          >
            <h2>Logout</h2>
          </motion.button>
        </div>
      </div>

      <div className={home.home_container2}>
        <div className={home.home_image_container}>
          <img src="timelessPages2.png" alt="logo" />
        </div>
        {user.role === "admin" && (
          <BoxButton
            onClick={() => navigate("/register-purchase")}
            className={home.button_1}
            title={"Register Purchase"}
            image={"iconRegisterPurchase.png"}
          />
        )}

        <BoxButton
          onClick={() => navigate("/register-sales")}
          className={user.role === "seller" ? home.button_4 : home.button_2}
          title={"Register Sale"}
          image={"iconRegisterSale.png"}
        />
        {user.role === "admin" && (
          <BoxButton
            onClick={() => navigate("/register-product")}
            className={home.button_3}
            title={"Register Product"}
            image={"iconRegisterBook.png"}
          />
        )}
      </div>
    </>
  );
}

export default HomePage;

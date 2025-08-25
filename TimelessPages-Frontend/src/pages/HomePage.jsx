import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/auth";
import home from "../styles/page/home.module.scss";
import BoxButton from "../components/BoxButton";
import { logout } from "../api/services/auth";

function HomePage() {
  const { user, token, isAuthenticated, logout: clearAuth } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    //Checks if user is authenticated
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  const handleLogout = async () => {
    try {
      await logout(token);
      clearAuth();
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
      alert("Failed to log out. Please try again.");
    }
  };

  return (
    <>
      <div className={home.home_container}>
        <h1>Welcome {user?.name}</h1>
        <div className={home.home_buttons}>
          {user.role === "admin" && (
            <div
              onClick={() => navigate("/dashboard")}
              className={home.dashboard}
            >
              <h2>Dashboard</h2>
            </div>
          )}
          <button onClick={handleLogout} className={home.logout}>
            <h2>Logout</h2>
          </button>
        </div>
      </div>

      <div className={home.home_container2}>
        <div className={home.home_image_container}>
          <img src="timelessPages.png" alt="" />
        </div>
        {user.role === "admin" && (
          <BoxButton
            onClick={() => navigate("/register-purchase")}
            className={home.button_1}
            title={"Register Purchase"}
          />
        )}

        <BoxButton
          onClick={() => navigate("/register-sales")}
          className={user.role === "seller" ? home.button_4 : home.button_2}
          title={"Register Sale"}
        />
        {user.role === "admin" && (
          <BoxButton
            onClick={() => navigate("/register-product")}
            className={home.button_3}
            title={"Register Product"}
          />
        )}
      </div>
    </>
  );
}

export default HomePage;

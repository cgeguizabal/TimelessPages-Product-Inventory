import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/auth";
import home from "../styles/page/home.module.scss";
import BoxButton from "../components/BoxButton";

import Navbar from "../components/Navbar";

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

  return (
    <>
      <Navbar />
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

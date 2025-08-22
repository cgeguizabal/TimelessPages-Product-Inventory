import React from "react";
import styles from "../styles/components/sideMenu.module.scss";
import { useNavigate } from "react-router-dom";

function SideMenu({ selected, onSelect }) {
  const navigate = useNavigate();
  const menuItems = [
    "Stock",
    "Purchases",
    "Sales",
    "Suppliers",
    "Clients",
    "Users",
  ];

  return (
    <nav className={styles.sideMenu}>
      <div onClick={() => navigate("/home")} className={styles.logo_container}>
        <img src="timelessPages.png" alt="" />
      </div>
      {menuItems.map((item) => (
        <button
          key={item}
          className={`${styles.menuItem} ${
            selected === item ? styles.active : ""
          }`}
          onClick={() => onSelect(item)}
        >
          {item}
        </button>
      ))}
    </nav>
  );
}

export default SideMenu;

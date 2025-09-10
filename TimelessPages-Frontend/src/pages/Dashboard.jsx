import React, { useState, useEffect } from "react";
import SideMenu from "../components/SideMenu";
import StockTable from "../components/StockTable";
import { getStockReport } from "../api/services/stockService";
import useAuthStore from "../store/auth";
import styles from "../styles/page/dashboard.module.scss";
import SalesReport from "../components/SalesReport";
import SuppliersTable from "../components/SuppliersTable";

function Dashboard() {
  const [selectedMenu, setSelectedMenu] = useState("Stock");
  const [stockData, setStockData] = useState([]);
  const { token } = useAuthStore();

  useEffect(() => {
    if (selectedMenu === "Stock") {
      fetchStock();
    }
  }, [selectedMenu]);

  const fetchStock = async () => {
    try {
      const data = await getStockReport(token);
      setStockData(data);
    } catch (err) {
      console.error("Error fetching stock:", err);
    }
  };

  return (
    <div className={styles.dashboard}>
      <SideMenu selected={selectedMenu} onSelect={setSelectedMenu} />
      <div className={styles.content}>
        {selectedMenu === "Stock" && <StockTable stockData={stockData} />}
        {selectedMenu === "Sales" && <SalesReport />}
        {selectedMenu === "Suppliers" && <SuppliersTable />}
      </div>
    </div>
  );
}

export default Dashboard;

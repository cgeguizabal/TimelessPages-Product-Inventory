import React from "react";
import styles from "../styles/components/stockTable.module.scss";

function StockTable({ stockData }) {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {stockData.map((item, idx) => (
            <tr key={idx}>
              <td>{item.name}</td>
              <td>{item.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StockTable;

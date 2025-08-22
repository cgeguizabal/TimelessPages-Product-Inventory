import { useEffect, useState } from "react";
import salesStyles from "../styles/components/salesReport.module.scss";
import { fetchSalesReport } from "../api/services/salesService";
import useAuthStore from "../store/auth";

function SalesReport() {
  const { token } = useAuthStore();
  const [sales, setSales] = useState([]);
  const [fromDate, setFromDate] = useState("2025-01-01");
  const [toDate, setToDate] = useState("2025-12-31");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const loadSales = async () => {
    try {
      setLoading(true);
      setError("");

      const body = {
        from: `${fromDate} 00:00:00`,
        to: `${toDate} 23:59:59`,
      };

      const response = await fetchSalesReport(token, body);
      setSales(response.data || []);
    } catch (err) {
      console.error("Error fetching sales report:", err);
      setError("Failed to load sales data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSales();
  }, []);

  return (
    <div className={salesStyles.wrapper}>
      <h2 className={salesStyles.title}>Sales Report</h2>

      <div className={salesStyles.filters}>
        <div>
          <label>From: </label>
          <input
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
          />
        </div>
        <div>
          <label>To: </label>
          <input
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
          />
        </div>
        <button onClick={loadSales}>Filter</button>
      </div>

      {loading ? (
        <p>Loading sales...</p>
      ) : error ? (
        <p className={salesStyles.error}>{error}</p>
      ) : (
        <table className={salesStyles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Client ID</th>
              <th>User ID</th>
              <th>Date</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {sales.length > 0 ? (
              sales.map((sale) => (
                <tr key={sale.id}>
                  <td>{sale.id}</td>
                  <td>{sale.client_id}</td>
                  <td>{sale.user_id}</td>
                  <td>{sale.date}</td>
                  <td>{new Date(sale.created_at).toLocaleString()}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className={salesStyles.noData}>
                  No sales found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default SalesReport;

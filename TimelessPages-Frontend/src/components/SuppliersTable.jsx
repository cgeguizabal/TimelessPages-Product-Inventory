import { useEffect } from "react";
import suppliersTableStyles from "../styles/components/suppliersTable.module.scss";
import { getSuppliers } from "../api/services/suppliersService";

import { useState } from "react";

const SuppliersTable = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchSuppliers = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await getSuppliers();
      setSuppliers(response || []);
    } catch (error) {
      console.error("Error fetching suppliers:", error);
      setError("Failed to load suppliers data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSuppliers();
  }, []);

  return (
    <div className={suppliersTableStyles.suppliersTable}>
      <h2 className={suppliersTableStyles.title}>Suppliers List</h2>
      {loading ? (
        <p>Loading Suppliers</p>
      ) : error ? (
        <p className={suppliersTableStyles.error}>{error}</p>
      ) : (
        <table className={suppliersTableStyles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {suppliers.length > 0 ? (
              suppliers.map((suppliers) => (
                <tr key={suppliers.id}>
                  <td>{suppliers.name}</td>
                  <td>{suppliers.email}</td>
                  <td>{suppliers.phone}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className={suppliersTableStyles.noData}>
                  No Suppliers found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SuppliersTable;

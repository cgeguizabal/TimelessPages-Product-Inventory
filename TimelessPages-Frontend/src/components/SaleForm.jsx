import { useEffect, useState } from "react";
import { getClients } from "../api/services/clientService";
import { getProducts } from "../api/services/productsService";
import { createSale } from "../api/services/salesService";
import useAuthStore from "../store/auth";
import salesStyles from "../styles/components/salesForm.module.scss";
import { useNavigate } from "react-router-dom";

import { motion } from "motion/react";

function SalesForm() {
  const navigate = useNavigate();
  const { token, user } = useAuthStore();

  // State for clients
  const [clients, setClients] = useState([]);
  const [clientId, setClientId] = useState("");

  // State for products
  const [products, setProducts] = useState([]);
  const [items, setItems] = useState([{ id: "", quantity: 1 }]);

  // State for errors
  const [error, setError] = useState({});

  // Fetch clients and products
  useEffect(() => {
    const fetchData = async () => {
      try {
        const clientsData = await getClients(token);
        setClients(clientsData);

        const productsData = await getProducts(token);
        setProducts(productsData);
      } catch (err) {
        console.error("Error fetching clients/products:", err);
      }
    };
    if (token) fetchData();
  }, [token]);

  // Handle product item change
  const handleItemChange = (index, field, value) => {
    const updated = [...items];
    updated[index][field] = value;
    setItems(updated);
  };

  const addItem = () => setItems([...items, { id: "", quantity: 1 }]);
  const removeItem = (index) => setItems(items.filter((_, i) => i !== index));

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError({});

    // Validate client
    if (!clientId) {
      setError({ client: "Select an existing client" });
      return;
    }

    // Validate products
    for (let i = 0; i < items.length; i++) {
      if (!items[i].id || items[i].quantity < 1) {
        setError({ items: "All products and quantities must be valid" });
        return;
      }
    }

    // Prepare sale data
    const data = {
      client_id: parseInt(clientId),
      user_id: user?.id,
      products: items.map((p) => ({
        id: parseInt(p.id),
        quantity: parseInt(p.quantity),
      })),
    };

    try {
      await createSale(data); //Add token when using normal axios without axiosInstance
      alert("Sale created successfully!");
      // Reset form
      setClientId("");
      setItems([{ id: "", quantity: 1 }]);
      navigate("/home");
    } catch (err) {
      console.error(err);
      alert("Failed to create sale");
    }
  };

  return (
    // <div className={salesStyles.page_wrapper}>
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.1,
        x: { duration: 0.5, ease: "easeInOut" },
        opacity: { duration: 1.5, ease: "easeOut" },
      }}
      className={salesStyles.form_container}
    >
      <h2 className={salesStyles.title}>Register Sale</h2>

      {error.client && (
        <p className={salesStyles.error_general}>{error.client}</p>
      )}
      {error.items && (
        <p className={salesStyles.error_general}>{error.items}</p>
      )}

      <form onSubmit={handleSubmit} className={salesStyles.form}>
        {/* Client selection */}
        <div>
          <select
            value={clientId}
            onChange={(e) => setClientId(e.target.value)}
            className={salesStyles.input}
          >
            <option value="">Select existing client</option>
            {clients.length > 0 &&
              clients.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
          </select>
        </div>

        {/* Products */}
        {items.map((item, index) => (
          <div key={index} className={salesStyles.product_item}>
            <select
              value={item.id}
              onChange={(e) => handleItemChange(index, "id", e.target.value)}
              className={salesStyles.input}
            >
              <option value="">Select product</option>
              {products.length > 0 &&
                products.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name} (${p.unit_price})
                  </option>
                ))}
            </select>

            <input
              type="number"
              value={item.quantity}
              onChange={(e) =>
                handleItemChange(index, "quantity", e.target.value)
              }
              min="1"
              className={salesStyles.input}
            />

            <button
              type="button"
              onClick={() => removeItem(index)}
              className={salesStyles.remove_btn}
            >
              ❌
            </button>
          </div>
        ))}

        <button type="button" onClick={addItem} className={salesStyles.add_btn}>
          ➕ Add product
        </button>

        <button type="submit" className={salesStyles.button}>
          Create Sale
        </button>
      </form>
    </motion.div>
    // </div>
  );
}

export default SalesForm;

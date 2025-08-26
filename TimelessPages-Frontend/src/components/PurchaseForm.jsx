import { useEffect, useState } from "react";
import { getSuppliers } from "../api/services/suppliersService";
import { getProducts } from "../api/services/productsService";
import { createPurchase } from "../api/services/purchaseService";
import useAuthStore from "../store/auth";
import purchaseStyles from "../styles/components/purchaseForm.module.scss";
import { useNavigate } from "react-router-dom";

function PurchaseForm() {
  const navigate = useNavigate();

  const { token, user } = useAuthStore();
  // State for suppliers
  const [suppliers, setSuppliers] = useState([]);

  // State for products
  const [products, setProducts] = useState([]);

  // State for form data
  const [supplierId, setSupplierId] = useState("");

  // State for product items
  const [items, setItems] = useState([{ id: "", quantity: 1 }]);

  // State for error messages
  const [error, setError] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        //Get Suppliers
        const suppliersData = await getSuppliers(); //Add token when using normal axios without axiosInstance
        setSuppliers(suppliersData);

        //Get Products
        const productsData = await getProducts(); //Add token when using normal axios without axiosInstance
        setProducts(productsData);
      } catch (err) {
        console.error("Error fetching suppliers/products:", err);
      }
    };
    if (token) fetchData();
  }, [token]);

  // Handle item change
  const handleItemChange = (index, field, value) => {
    // Clone items array to avoid mutating state directly
    const updated = [...items];
    updated[index][field] = value;
    setItems(updated);
  };

  // Add/Remove item
  const addItem = () => setItems([...items, { id: "", quantity: 1 }]);
  const removeItem = (index) => setItems(items.filter((_, i) => i !== index));

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError({});

    // Validate supplier
    if (!supplierId) {
      setError({ supplier: "Supplier is required" });
      return;
    }

    // Validate products
    for (let i = 0; i < items.length; i++) {
      if (!items[i].id || items[i].quantity < 1) {
        setError({ items: "All products and quantities must be valid" });
        return;
      }
    }

    // Prepare data to send
    const data = {
      supplier_id: parseInt(supplierId),
      user_id: user?.id,
      products: items.map((p) => ({
        id: parseInt(p.id),
        quantity: parseInt(p.quantity),
      })),
    };

    try {
      // Create purchase
      await createPurchase(data); //Add token when using normal axios without axiosInstance
      alert("Purchase created successfully!");

      // Reset Form
      setSupplierId("");
      setItems([{ id: "", quantity: 1 }]);

      navigate("/home"); // Redirect to home page
    } catch (err) {
      console.error(err);
      alert("Failed to create purchase");
    }
  };

  return (
    <div className={purchaseStyles.page_wrapper}>
      <div className={purchaseStyles.form_container}>
        <h2 className={purchaseStyles.title}>Register Purchase</h2>

        {error.supplier && (
          <p className={purchaseStyles.error_general}>{error.supplier}</p>
        )}
        {error.items && (
          <p className={purchaseStyles.error_general}>{error.items}</p>
        )}

        <form onSubmit={handleSubmit} className={purchaseStyles.form}>
          {/* Supplier */}
          <div>
            <select
              value={supplierId}
              onChange={(e) => setSupplierId(e.target.value)}
              className={purchaseStyles.input}
            >
              <option value="">Select supplier</option>
              {suppliers.length > 0 ? (
                suppliers.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name}
                  </option>
                ))
              ) : (
                <option disabled>No suppliers found</option>
              )}
            </select>
          </div>

          {/* Products */}
          {items.map((item, index) => (
            <div key={index} className={purchaseStyles.product_item}>
              <select
                value={item.id}
                onChange={(e) => handleItemChange(index, "id", e.target.value)}
                className={purchaseStyles.input}
              >
                <option value="">Select product</option>
                {products.length > 0 ? (
                  products.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name} (${p.unit_price})
                    </option>
                  ))
                ) : (
                  <option disabled>No products found</option>
                )}
              </select>

              <input
                type="number"
                value={item.quantity}
                onChange={(e) =>
                  handleItemChange(index, "quantity", e.target.value)
                }
                min="1"
                className={purchaseStyles.input}
              />

              <button
                type="button"
                onClick={() => removeItem(index)}
                className={purchaseStyles.remove_btn}
              >
                ❌
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={addItem}
            className={purchaseStyles.add_btn}
          >
            ➕ Add Book
          </button>

          <button type="submit" className={purchaseStyles.button}>
            Create Purchase
          </button>
        </form>
      </div>
    </div>
  );
}

export default PurchaseForm;

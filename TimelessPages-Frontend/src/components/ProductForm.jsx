import { useState } from "react";
import { createProduct } from "../api/services/productsService";
import useAuthStore from "../store/auth";
import productStyles from "../styles/components/productForm.module.scss";
import { useNavigate } from "react-router-dom";

function ProductForm() {
  const navigate = useNavigate();
  const { token } = useAuthStore();

  // Form state
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [stock, setStock] = useState("");
  const [error, setError] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError({});

    // Validate inputs
    if (!name || !description || !unitPrice || !stock) {
      setError({ general: "All fields are required" });
      return;
    }

    // Parse numbers safely

    // Unable to fix bug, it seems JavaScript is not sending decimals correctly
    const parsedUnitPrice = Math.round(parseFloat(unitPrice) * 100) / 100;
    console.log(typeof parsedUnitPrice);

    const parsedStock = parseInt(stock);

    if (isNaN(parsedUnitPrice) || isNaN(parsedStock)) {
      setError({ general: "Unit Price and Stock must be valid numbers" });
      return;
    }

    // Prepare data
    const data = {
      name: name.trim(),
      description: description.trim(),
      unit_price: parsedUnitPrice,
      stock: parsedStock,
    };

    console.log("Submitting product:", data);

    try {
      // Force JSON stringification to match Postman exactly
      const response = await createProduct(data); //Add token when using normal axios without axiosInstance
      console.log("Server response:", response);

      alert("Book created successfully!");

      // Reset form
      setName("");
      setDescription("");
      setUnitPrice("");
      setStock("");

      navigate("/home");
    } catch (err) {
      console.error("Failed to create product:", err);
      alert("Failed to create book. Check console for details.");
    }
  };

  return (
    <div className={productStyles.page_wrapper}>
      <div className={productStyles.form_container}>
        <h2 className={productStyles.title}>Register Book</h2>

        {error.general && (
          <p className={productStyles.error_general}>{error.general}</p>
        )}

        <form onSubmit={handleSubmit} className={productStyles.form}>
          <input
            type="text"
            placeholder="Book Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={productStyles.input}
          />
          <textarea
            placeholder="Book Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={productStyles.input}
          />
          <input
            type="number"
            placeholder="Unit Price"
            value={unitPrice}
            onChange={(e) => setUnitPrice(e.target.value)}
            min="0"
            step="0.01"
            className={productStyles.input}
          />
          <input
            type="number"
            placeholder="Stock Quantity"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            min="0"
            className={productStyles.input}
          />

          <button type="submit" className={productStyles.button}>
            Create Book
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProductForm;

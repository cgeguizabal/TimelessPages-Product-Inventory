import axios from "axios";

const BASE_URL =
  "https://timelesspages-product-inventory-production.up.railway.app/api";

export const getSuppliers = async (token) => {
  try {
    const response = await axios.get(`${BASE_URL}/suppliers`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error getting Suppliers:",
      error.response?.data || error.message
    );
    throw error.message?.data || error.message;
  }
};

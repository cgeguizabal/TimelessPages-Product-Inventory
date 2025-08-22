import axios from "axios";

const BASE_URL =
  "https://timelesspages-product-inventory-production.up.railway.app/api";

export const createPurchase = async (token, data) => {
  try {
    const response = await axios.post(`${BASE_URL}/purchases`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error creating purchase:",
      error.response?.data || error.message
    );
    error.response?.data || error.message;
  }
};

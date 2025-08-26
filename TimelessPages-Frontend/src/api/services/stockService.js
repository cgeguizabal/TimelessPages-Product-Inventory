import axios from "axios";

const BASE_URL =
  "https://timelesspages-product-inventory-production.up.railway.app/api";

export const getStockReport = async (token) => {
  try {
    const response = await axios.get(`${BASE_URL}/reports/stock`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.data; // I cannot use axios.instance here because I need to return the array data not the object so I return data.data which is where the array is
  } catch (error) {
    console.error(
      "Error fetching stock report:",
      error.response?.data || error.message
    );
    throw error.response?.data || error.message;
  }
};

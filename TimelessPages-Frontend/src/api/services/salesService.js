import axios from "axios";

const BASE_URL =
  "https://timelesspages-product-inventory-production.up.railway.app/api";

export const createSale = async (token, data) => {
  try {
    const response = await axios.post(`${BASE_URL}/sales`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error(
      "Error creating sale:",
      error.response?.data || error.message
    );
    throw error.response?.data || error.message;
  }
};

export async function fetchSalesReport(token, data) {
  try {
    const response = await axios.post(`${BASE_URL}/reports/sales`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error getting report:",
      error.response?.data || error.message
    );
    throw error.response?.data || error.message;
  }
}

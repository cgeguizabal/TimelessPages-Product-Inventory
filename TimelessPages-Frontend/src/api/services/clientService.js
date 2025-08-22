import axios from "axios";

const BASE_URL =
  "https://timelesspages-product-inventory-production.up.railway.app/api";

export const getClients = async (token) => {
  try {
    const response = await axios.get(`${BASE_URL}/clients`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error(
      "Error fetching client:",
      error.response?.data || error.message
    );
    throw error.response?.data || error.message;
  }
};

export const createClient = async (token) => {
  try {
    const response = await axios.post(`${BASE_URL}/clients`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error(
      "Error Creating Client:",
      error.response?.data || error.message
    );
    throw error.response?.data || error.message;
  }
};

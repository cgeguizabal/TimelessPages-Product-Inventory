// import axios from "axios";
import { apiGet, apiPost } from "./axiosInstance";

const BASE_URL =
  "https://timelesspages-product-inventory-production.up.railway.app/api";

export const createProduct = async (token, data) => {
  return apiPost("/products", data);
  /* //Use in the case there's individual logic from axiosIntances
  try {
    const response = await axios.post(`${BASE_URL}/products`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error(
      "Error creating product:",
      error.response?.data || error.message
    );
    throw error.response?.data || error.message;
  }*/
};

export const getProducts = async () => {
  return apiGet("/products");
  /* //Use in the case there's individual logic from axiosIntances
  try {
    const response = await axios.get(`${BASE_URL}/products`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error getting products:",
      error.response?.data || error.message
    );
    throw error.response?.data || error.message;
  }*/
};

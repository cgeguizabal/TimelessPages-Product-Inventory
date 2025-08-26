// import axios from "axios";
import { apiGet } from "./axiosInstance";

const BASE_URL =
  "https://timelesspages-product-inventory-production.up.railway.app/api";

export const getSuppliers = () => {
  //Add token and async when using normal axios without axiosInstance
  return apiGet("/suppliers");
  /* //Use in the case there's individual logic from axiosIntances
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
  }*/
};

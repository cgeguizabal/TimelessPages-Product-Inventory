import axios from "axios";
import { apiPost } from "./axiosInstance";

const BASE_URL =
  "https://timelesspages-product-inventory-production.up.railway.app/api";

export const createPurchase = (data) => {
  //Add token and async when using normal axios without axiosInstance
  return apiPost("/purchases", data);
  /*  //Use in the case there's individual logic from axiosIntances
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
  } */
};

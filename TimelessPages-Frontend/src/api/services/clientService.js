// import axios from "axios";
import { apiGet, apiPost } from "./axiosInstance";

const BASE_URL =
  "https://timelesspages-product-inventory-production.up.railway.app/api";

export const getClients = () => {
  //Add token and async when using normal axios without axiosInstance
  return apiGet("/clients");
  /* //Use in the case there's individual logic from axiosIntances
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
  }*/
};

export const createClient = () => {
  //Add token and async when using normal axios without axiosInstance
  return apiPost("clients");
  /* // Use in the case there's individual logic from axiosIntances
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
  }*/
};

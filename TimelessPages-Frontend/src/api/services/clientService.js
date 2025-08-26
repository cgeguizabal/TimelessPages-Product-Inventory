// import axios from "axios";
import { apiGet, apiPost } from "./axiosInstance";

const BASE_URL =
  "https://timelesspages-product-inventory-production.up.railway.app/api";

export const getClients = async (token) => {
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

export const createClient = async (token) => {
  return apiPost("clients");
  /* // se in the case there's individual logic from axiosIntances
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

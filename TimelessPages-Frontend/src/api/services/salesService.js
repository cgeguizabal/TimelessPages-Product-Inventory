import axios from "axios";
import { apiPost } from "./axiosInstance";

const BASE_URL =
  "https://timelesspages-product-inventory-production.up.railway.app/api";

export const createSale = (data) => {
  //Add token and async when using normal axios without axiosInstance

  return apiPost("/sales", data);
  /* //Use in the case there's individual logic from axiosIntances
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
  }*/
};

export async function fetchSalesReport(data) {
  //Add token and async when using normal axios without axiosInstance
  return apiPost("/reports/sales", data);
  /* //Use in the case there's individual logic from axiosIntances
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
  }*/
}

// import axios from "axios";
import { apiPost } from "./axiosInstance";

const BASE_URL =
  "https://timelesspages-product-inventory-production.up.railway.app/api";

export async function registerUser(data) {
  return apiPost("/register", data);
  /* // Use in the case there's individual logic from axiosIntances
  try {
    const response = await axios.post(`${BASE_URL}/register`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error(
      "Error registering user:",
      error.response?.data || error.message
    );
    throw error.response?.data || error.message;
  } */
}

export async function login(data) {
  return apiPost("/login", data);
  /*  // Use in the case there's individual logic from axiosIntances
  try {
    const response = await axios.post(`${BASE_URL}/login`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error(
      "Error loging in user:",
      error.response?.data || error.message
    );
    throw error.response?.data || error.message;
  }*/
}

export async function logout() {
  return apiPost("/logout");
  /*  // Use in the case there's individual logic from axiosIntances
  try {
    const response = await axios.post(
      `${BASE_URL}/logout`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(
      "Error loging out user:",
      error.response?.data || error.message
    );
    throw error.response?.data || error.message;
  } */
}

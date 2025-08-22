import axios from "axios";

const BASE_URL =
  "https://timelesspages-product-inventory-production.up.railway.app/api";

export async function registerUser(data) {
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
    throw error.response?.data || error;
  }
}

export async function login(data) {
  try {
    const response = await axios.post(`${BASE_URL}/login`, data, {
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
    throw error.response?.data || error;
  }
}

export async function logout(token) {
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
      "Error registering user:",
      error.response?.data || error.message
    );
    throw error.response?.data || error;
  }
}

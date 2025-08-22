import axios from "axios";

const BASE_URL =
  "https://timelesspages-product-inventory-production.up.railway.app/api";

export const getProducts = async (token) => {
  const response = await axios.get(`${BASE_URL}/products`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

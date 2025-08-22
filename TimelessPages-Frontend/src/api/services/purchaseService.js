import axios from "axios";

const BASE_URL =
  "https://timelesspages-product-inventory-production.up.railway.app/api";

export const createPurchase = async (token, data) => {
  const response = await axios.post(`${BASE_URL}/purchases`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

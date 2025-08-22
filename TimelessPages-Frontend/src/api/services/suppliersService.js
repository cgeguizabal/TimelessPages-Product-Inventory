import axios from "axios";

const BASE_URL =
  "https://timelesspages-product-inventory-production.up.railway.app/api";

export const getSuppliers = async (token) => {
  const response = await axios.get(`${BASE_URL}/suppliers`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

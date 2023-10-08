import axios from "axios";

export const getProducts = () => {
  return axios.get("https://wendor-dada.onrender.com/products");
};

export const addProducts = (payload) => {
  return axios.post("https://wendor-dada.onrender.com/create", payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const updateProducts = (id, payload) => {
  return axios.patch(
    `https://wendor-dada.onrender.com/products/${id}`,
    payload,
  );
};

export const deleteProducts = async (id) => {
  return await axios.delete(`https://wendor-dada.onrender.com/products/${id}`);
};

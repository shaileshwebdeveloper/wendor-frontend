import axios from "axios";

export const getProducts = () => {
  return axios.get("http://localhost:3001/products");
};

export const addProducts = (payload) => {
  return axios.post("http://localhost:3001/create", payload,{
    headers: {
      'Content-Type': 'application/json',
  }
})
}

export const updateProducts = (id, payload) => {
  return axios.patch(
    `http://localhost:3001/products/${id}`,
    payload,
  );
};

export const deleteProducts = async (id) => {
  return await axios.delete(`http://localhost:3001/products/${id}`);
};

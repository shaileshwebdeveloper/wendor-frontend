import axios from "axios";

export const addUser = (payload) => {
  return axios.post("https://wendor-dada.onrender.com/signup", payload);
};

export const sendOtp = (payload) => {
  return axios.post("https://wendor-dada.onrender.com/send-otp", payload)
};

export const verifyOtp = (payload) => {
  return axios.post("https://wendor-dada.onrender.com/verify-otp", payload);
};

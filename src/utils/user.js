import axios from "axios";

export const addUser = (payload) => {
  return axios.post("https://wendor-dada.onrender.com/signup", payload);
};

export const sendOtp = (payload) => {
  return axios.post("https://wendor-dada.onrender.com/send-otp", payload,{
    headers: {
      Authorization: "SxyzrG8O1PKoAHD0zV1AmXORZyGldOVrBcPnBF7nqePdr8WfTGqSouvWqWgQ",
    }
});
};

export const verifyOtp = (payload) => {
  return axios.post("https://wendor-dada.onrender.com/verify-otp", payload);
};

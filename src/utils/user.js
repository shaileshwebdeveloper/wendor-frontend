import axios from "axios";

export const addUser = (payload) => {
    return axios.post("http://localhost:3001/signup", payload);
  };


export const sendOtp = (payload) => {
    return axios.post("http://localhost:3001/send-otp", payload);
  };


  export const verifyOtp = (payload) => {
    return axios.post("http://localhost:3001/verify-otp", payload);
  };
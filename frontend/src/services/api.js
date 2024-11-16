import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
});

export const testBackend = async () => {
  const response = await API.get("/");
  return response.data;
};

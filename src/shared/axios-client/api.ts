import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000,
});
api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // Normalize error response
    if (error.response) {
      return Promise.reject({
        status: error.response.status,
        message: error.response.data?.message || "An error occurred",
        data: error.response.data,
      });
    } else if (error.request) {
      return Promise.reject({
        status: null,
        message: "No response received from the server",
        data: null,
      });
    } else {
      return Promise.reject({
        status: null,
        message: error.message,
        data: null,
      });
    }
  }
);
export default api;

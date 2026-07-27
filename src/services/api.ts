import axios, {
  type AxiosError,
  type AxiosInstance,
  type AxiosRequestConfig,
} from "axios";

const apiConfig: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:4000",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: false,
};

const apiInstance: AxiosInstance = axios.create(apiConfig);

const refreshUserToken = async () => {
  const baseURL = import.meta.env.VITE_API_BASE_URL || "http://localhost:4000";
  const response = await axios.post(`${baseURL}/auth/refresh`);
  return response.data.token;
};
apiInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

apiInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error: AxiosError) => {
    const originalRequest = error.config as AxiosRequestConfig & {
      _retry?: boolean;
    };

    if (error.response?.status === 401 && originalRequest) {
      // Return error instead of get refresh token in login page
      if (originalRequest.url?.includes("/auth/login")) {
        return Promise.reject(error);
      }

      // Getting new token
      if (!originalRequest._retry) {
        originalRequest._retry = true;
        console.warn(
          "token is invalid , getting new token",
        );

        try {
          const newToken = await refreshUserToken();
          localStorage.setItem("token", newToken);

          // Append new token to previous request
          if (originalRequest.headers) {
            originalRequest.headers["Authorization"] = `Bearer ${newToken}`;
          }
          return apiInstance.request(originalRequest);
        } catch {
          // If catch error redirect to login page
          window.location.href = "/login";
        }
      }
    }

    if (error.response?.status && error.response.status >= 500) {
      console.error("Server Error. try again later");
    }

    if (error.message === "Network Error") {
      console.error("Check your internet connection");
    }

    return Promise.reject(error);
  },
);

export default apiInstance;

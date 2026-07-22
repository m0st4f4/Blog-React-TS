import axios, { type AxiosError, type AxiosInstance, type AxiosRequestConfig } from "axios";







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
    if (error.response?.status === 401) {
      console.warn("توکن منقضی شده یا کاربر دسترسی ندارد. فرآیند رفرش توکن...");

      try {
        const newToken = await refreshUserToken();
        localStorage.setItem("token", newToken);
        if (error.config) {
          error.config.headers["Authorization"] = `Bearer ${newToken}`;
          return apiInstance.request(error.config);
        }
      } catch {
        window.location.href = "/login";
      }
    }

    if (error.response?.status && error.response.status >= 500) {
      console.error("خطای سرور! لطفاً بعداً تلاش کنید.");
    }

    if (error.message === "Network Error") {
      console.error("اتصال اینترنت خود را بررسی کنید.");
    }

    return Promise.reject(error);
  },
);

export default apiInstance;

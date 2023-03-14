import axios from "axios";
import qs from "qs";
import { Redirect } from "react-router-dom";

export const CYBERSOFT_TOKEN = 
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJOb2RlanMgMjUiLCJIZXRIYW5TdHJpbmciOiIxNS8wNS8yMDIzIiwiSGV0SGFuVGltZSI6IjE2ODQxMDg4MDAwMDAiLCJuYmYiOjE2NjY3MTcyMDAsImV4cCI6MTY4NDI1NjQwMH0.vdVVhPEIB7ZV9oEaVDyxq430wfBgJgeYqiM5JTcdwqo"

const axiosClient = axios.create({
  baseURL: "https://movienew.cybersoft.edu.vn/api",
  timeout: 20000,
  headers: {
    TokenCybersoft: CYBERSOFT_TOKEN,
  },
  paramsSerializer: (param) => qs.stringify(param, { skipNulls: true }),
});

axiosClient.interceptors.request.use(
  (config) => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    console.log(userInfo)
    if (userInfo) {
      const { accessToken } = userInfo.content;
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (response) => {
    // Xử lý kết quả trả về từ server
    return response;
  },
  // Xử lý nếu kết quả trả về bị lỗi
  (error) => {
    if (error.status === 401) {
      // Xử lý log out: clear Storage, đẩy người dùng vào trang login
      localStorage.clear();
      <Redirect to="/" />;
    }
    return Promise.reject(error);
  }
);
export default axiosClient;

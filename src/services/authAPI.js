import axiosClient from "./axiosClient";

const authAPI = {
  login: (value) => {
    return axiosClient.post("/QuanLyNguoiDung/DangNhap", value);
  },

  register: (value) => {
    return axiosClient.post("/QuanLyNguoiDung/DangKy", value);
  },
};

export default authAPI;

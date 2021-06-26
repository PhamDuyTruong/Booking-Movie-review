import axiosClient from "./axiosClient";

const userAPI = {
  userInfo: (value) => {
    return axiosClient.post("/QuanLyNguoiDung/ThongTinTaiKhoan", value);
  },
};

export default userAPI;

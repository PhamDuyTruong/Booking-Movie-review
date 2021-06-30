import axiosClient from "./axiosClient";

const userAPI = {
  userInfo: (value) => {
    return axiosClient.post("/QuanLyNguoiDung/ThongTinTaiKhoan", value);
  },
  updateUserInfo: (value) => {
    return axiosClient.put("/QuanLyNguoiDung/CapNhatThongTinNguoiDung", value);
  },
};

export default userAPI;

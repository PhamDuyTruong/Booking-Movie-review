import axiosClient from "./axiosClient";

const userAPI = {
  userInfo: () => {
    return axiosClient.post("/QuanLyNguoiDung/ThongTinTaiKhoan");
  },
  updateUserInfo: (value) => {
    return axiosClient.put("/QuanLyNguoiDung/CapNhatThongTinNguoiDung", value);
  },
};

export default userAPI;

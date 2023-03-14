import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../constants/loginConstant";
import authAPI from "../services/authAPI";
import { Link, Redirect } from "react-router-dom";
import Swal from "sweetalert2";

export function loginAction(value) {
  return async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
      const { data } = await authAPI.login(value);
      // Lưu thông tin user xuống localStorage để giữ trạng thai đăng nhập khi user tắt trang web
      localStorage.setItem("userInfo", JSON.stringify(data));
      dispatch({ type: LOGIN_SUCCESS, payload: data });
      Swal.fire(
        "Login successfully !",
        "Wish you have a happy experience at TIX !",
        "success"
      ).then((result) => {
        if (result.isConfirmed) {
          console.log("Redirect");
          window.location = "/";
        }
      });
    } catch (error) {
      dispatch({
        type: LOGIN_FAILURE,
        payload: { error: error.response.data },
      });
      Swal.fire("Login failed !", "Please try to login again !", "error");
    }
  };
}

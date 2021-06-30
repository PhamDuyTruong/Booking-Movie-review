import {
  UPDATE_INFO_USER_REQUEST,
  UPDATE_INFO_USER_SUCCESS,
  UPDATE_INFO_USER_FAILURE,
} from "../constants/updateInfoUserConstant";
import userAPI from "../services/userAPI";
import Swal from "sweetalert2";

export function updateInfoUser(value) {
  return async (dispatch) => {
    dispatch({ type: UPDATE_INFO_USER_REQUEST });
    try {
      const { data } = await userAPI.updateUserInfo(value);
      dispatch({ type: UPDATE_INFO_USER_SUCCESS, payload: { data } });
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Cập nhật thông tin thành công !",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_INFO_USER_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
}

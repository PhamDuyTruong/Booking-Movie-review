import {
  INFO_USER_REQUEST,
  INFO_USER_SUCCESS,
  INFO_USER_FAILURE,
} from "../constants/infoUserConstant";
import userAPI from "../services/userAPI";

export function getInfoUser(value) {
  return async (dispatch) => {
    dispatch({ type: INFO_USER_REQUEST });
    try {
      const { data } = await userAPI.userInfo(value);
      dispatch({ type: INFO_USER_SUCCESS, payload: { data } });
    } catch (error) {
      dispatch({
        type: INFO_USER_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
}

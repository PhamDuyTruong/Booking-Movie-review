import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../constants/loginConstant";
import authAPI from "../services/authAPI";
import Swal from 'sweetalert2'

export function loginAction(value) {
  return async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
      const { data } = await authAPI.login(value);
      dispatch({ type: LOGIN_SUCCESS, payload: { data } });
      Swal.fire(
        'Login successfully !',
        'Wish you have a happy experience at TIX !',
        'success'
      )
    } catch (error) {
      dispatch({
        type: LOGIN_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
}

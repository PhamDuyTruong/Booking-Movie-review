import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
} from "../constants/signupConstant";
import authAPI from "../services/authAPI";
import Swal from "sweetalert2";
import { Redirect } from "react-router-dom";

export function signupAction(value) {
  return async (dispatch) => {
    dispatch({ type: SIGNUP_REQUEST });
    try {
      const { data } = await authAPI.register(value);
      dispatch({ type: SIGNUP_SUCCESS, payload: { data } });
      Swal.fire(
        "SignUp successfully !",
        "Please come back to login !",
        "success"
      ).then((result) => {
        if (result.isConfirmed) {
          console.log("Redirect");
          // Fix Redirect here !
          window.location = "/login";
        }
      });
    } catch (error) {
      dispatch({
        type: SIGNUP_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
}

import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
} from "../constants/signupConstant";

const initialState = {
  dataSignUp: null,
  Loading: false,
  error: null,
};

function signupReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNUP_REQUEST: {
      return { ...state, Loading: true, error: null };
    }
    case SIGNUP_SUCCESS: {
      return { ...state, Loading: false, dataSignUp: action.payload.data };
    }
    case SIGNUP_FAILURE: {
      return { ...state, Loading: false, error: action.payload.error };
    }
    default:
      return state;
  }
}

export default signupReducer;

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../constants/loginConstant";

const initialState = {
  dataLogin: null,
  Loading: false,
  error: null,
};

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return { ...state, Loading: true, error: null };
    }
    case LOGIN_SUCCESS: {
      return { ...state, Loading: false, dataLogin: action.payload.data };
    }
    case LOGIN_FAILURE: {
      return { ...state, Loading: false, error: action.payload.error };
    }
    default:
      return state;
  }
}

export default loginReducer;

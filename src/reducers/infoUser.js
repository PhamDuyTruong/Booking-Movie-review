import {
  INFO_USER_REQUEST,
  INFO_USER_SUCCESS,
  INFO_USER_FAILURE,
} from "../constants/infoUserConstant";

const initialState = {
  infoUser: null,
  Loading: false,
  error: null,
};

function infoUser(state = initialState, action) {
  switch (action.type) {
    case INFO_USER_REQUEST: {
      return { ...state, Loading: true, error: null };
    }
    case INFO_USER_SUCCESS: {
      return { ...state, Loading: false, infoUser: action.payload.data };
    }
    case INFO_USER_FAILURE: {
      return { ...state, Loading: false, error: action.payload.error };
    }
    default:
      return state;
  }
}

export default infoUser;

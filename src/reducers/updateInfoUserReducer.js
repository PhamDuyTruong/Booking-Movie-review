import {
  UPDATE_INFO_USER_REQUEST,
  UPDATE_INFO_USER_SUCCESS,
  UPDATE_INFO_USER_FAILURE,
} from "../constants/updateInfoUserConstant";

const initialState = {
  updateInfoUser: null,
  Loading: false,
  error: null,
};

function updateInfoUser(state = initialState, action) {
  switch (action.type) {
    case UPDATE_INFO_USER_REQUEST: {
      return { ...state, Loading: true, error: null };
    }
    case UPDATE_INFO_USER_SUCCESS: {
      return { ...state, Loading: false, updateInfoUser: action.payload.data };
    }
    case UPDATE_INFO_USER_FAILURE: {
      return { ...state, Loading: false, error: action.payload.error };
    }
    default:
      return state;
  }
}

export default updateInfoUser;

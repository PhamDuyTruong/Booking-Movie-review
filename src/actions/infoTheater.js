import {GET_INFOTHEATER_FAILURE, GET_INFOTHEATER_REQUEST, GET_INFOTHEATER_SUCCESS} from '../constants/infoTheater'
import theaterAPI from '../services/theaterAPI'

export function getInfoTheater() {
    return async (dispatch) => {
        dispatch({ type: GET_INFOTHEATER_REQUEST });
        try {
          const { data } = await theaterAPI.getInfoTheater();
          dispatch({ type: GET_INFOTHEATER_SUCCESS, payload: { data } });
        } catch (error) {
          dispatch({
            type: GET_INFOTHEATER_FAILURE,
            payload: { error: error.response.data },
          });
        }
      };
}
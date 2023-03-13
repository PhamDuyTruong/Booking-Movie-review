import {GET_SCHEDULE_SUCCESS, GET_SCHEDULE_REQUEST, GET_SCHEDULE_FAILURE} from '../constants/showtimeConstant';
import theaterAPI from '../services/theaterAPI'

export const getSheduleMovie = (movieId) =>{
    return async (dispatch) => {
        dispatch({ type: GET_SCHEDULE_REQUEST });
        try {
          const { data } = await theaterAPI.getScheduleById(movieId);
          dispatch({ type: GET_SCHEDULE_SUCCESS, payload: data.content  });
        } catch (error) {
          dispatch({
            type: GET_SCHEDULE_FAILURE,
            payload: { error: error.response.data },
          });
        }
      };
}
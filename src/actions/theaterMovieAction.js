import {GET_THEATERMOVIE_FAILURE, GET_THEATERMOVIE_REQUEST, GET_THEATERMOVIE_SUCCESS} from '../constants/theaterMovieConstant'
import theaterAPI from '../services/theaterAPI'

export function getDataTheater() {
    return async (dispatch) => {
        dispatch({ type: GET_THEATERMOVIE_REQUEST });
        try {
          const { data } = await theaterAPI.getDataTheater();
          dispatch({ type: GET_THEATERMOVIE_SUCCESS, payload: data.content  });
        } catch (error) {
          dispatch({
            type: GET_THEATERMOVIE_FAILURE,
          });
        }
      };
}
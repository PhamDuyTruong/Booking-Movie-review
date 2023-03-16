import {GET_MOVIEAPI_FAILURE, GET_MOVIEAPI_REQUEST, GET_MOVIEAPI_SUCCESS} from '../constants/movieAPI'
import movieAPI from '../services/movieAPI'
  
  export function getMovies(){
    return async (dispatch) => {
      dispatch({ type: GET_MOVIEAPI_REQUEST });
      try {
        const { data } = await movieAPI.getMovies();
        dispatch({ type: GET_MOVIEAPI_SUCCESS, payload: data.content });
      } catch (error) {
        dispatch({
          type: GET_MOVIEAPI_FAILURE,
          // payload: { error: error.response.data },
        });
      }
    };
  }
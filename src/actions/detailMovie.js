import {GET_DETAILMOVIE_FAILURE, GET_DETAILMOVIE_SUCCESS, GET_DETAILMOVIE_REQUEST} from '../constants/detailMovie';
import movieAPI from '../services/movieAPI'

export function getDetailMovies(movieId){
    return async (dispatch) => {
        dispatch({ type: GET_DETAILMOVIE_REQUEST });
        try {
          const { data } = await movieAPI.getDetailMovies(movieId);
          dispatch({ type: GET_DETAILMOVIE_SUCCESS, payload: data.content});
        } catch (error) {
          dispatch({
            type: GET_DETAILMOVIE_FAILURE,
            payload: { error: error.response.data },
          });
        }
      };
}
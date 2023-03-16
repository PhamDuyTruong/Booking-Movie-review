import {
    GET_MOVIE_SUCCESS,
    GET_MOVIE_FAILURE,
    GET_MOVIE_REQUEST,
  } from "../constants/movieConstants";
  import movieAPI from '../services/movieAPI'
  
  export function getDataMovies(){
    return async (dispatch) => {
      dispatch({ type: GET_MOVIE_REQUEST });
      try {
        const { data } = await movieAPI.getDataMovies();
        dispatch({ type: GET_MOVIE_SUCCESS, payload: data.content });
      } catch (error) {
        dispatch({
          type: GET_MOVIE_FAILURE,
          // payload: { error: error.response.data },
        });
      }
    };
  }
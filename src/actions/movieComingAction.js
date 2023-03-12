import {
    GET_MOVIECOMING_SUCCESS,
    GET_MOVIECOMING_FAILURE,
    GET_MOVIECOMING_REQUEST,
  } from "../constants/movieComingConstant";
  import movieAPI from '../services/movieAPI'
  
  export function getDataComingMovies(){
    return async (dispatch) => {
      dispatch({ type: GET_MOVIECOMING_REQUEST });
      try {
        const { data } = await movieAPI.getDataComingMovies();
        dispatch({ type: GET_MOVIECOMING_SUCCESS, payload: data.content });
      } catch (error) {
        dispatch({
          type: GET_MOVIECOMING_FAILURE,
          payload: { error: error.response.data },
        });
      }
    };
  }
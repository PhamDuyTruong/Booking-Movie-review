import {GET_INFOSYSTHEATERMOVIE_FAILURE, GET_INFOSYSTHEATERMOVIE_SUCCESS, GET_INFOSYSTHEATERMOVIE_REQUEST} from '../constants/infoSystemTheaterConstants'
import theaterAPI from '../services/theaterAPI'
export function getInfoSystemTheater(theaterId){
    return async (dispatch) => {
        dispatch({ type: GET_INFOSYSTHEATERMOVIE_REQUEST });
        try {
          const { data } = await theaterAPI.getInfoSystemTheater(theaterId);
          dispatch({ type: GET_INFOSYSTHEATERMOVIE_SUCCESS, payload:  data.content });
        } catch (error) {
          dispatch({
            type: GET_INFOSYSTHEATERMOVIE_FAILURE,
            payload: { error: error.response.data },
          });
        }
      };
}
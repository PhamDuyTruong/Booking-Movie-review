import {GET_TICKETMOVIE_FAILURE, GET_TICKETMOVIE_REQUEST, GET_TICKETMOVIE_SUCCESS} from '../constants/TicketConstant'
import ticketAPI from '../services/ticketsAPI'

export function getInfoTicket(maLichChieu){
    return async (dispatch) => {
        dispatch({ type: GET_TICKETMOVIE_REQUEST });
        try {
          const { data } = await ticketAPI.getInfoTicket(maLichChieu);
          
          dispatch({ type: GET_TICKETMOVIE_SUCCESS, payload: data.content });
        } catch (error) {
          dispatch({
            type: GET_TICKETMOVIE_FAILURE,
            payload: { error: error.response.data },
          });
        }
      };
}
import {GET_TICKETMOVIE_FAILURE, GET_TICKETMOVIE_SUCCESS, GET_TICKETMOVIE_REQUEST} from '../constants/TicketConstant'

const initialState ={
    ticketMovie:[],
    Loading: false,
    error: null
}

function ticketMovie(state= initialState, action){
    switch(action.type){
        case GET_TICKETMOVIE_REQUEST:{
            return {...state, Loading: true, error:null}
        }
        case GET_TICKETMOVIE_SUCCESS: {
            return {...state, Loading: false, ticketMovie: action.payload}
        }
        case GET_TICKETMOVIE_FAILURE:{
            return {...state, Loading: false, error: action.payload.error}
        }
        default:
            return state;
    }
}

export default ticketMovie;

import {GET_THEATERMOVIE_FAILURE, GET_THEATERMOVIE_REQUEST, GET_THEATERMOVIE_SUCCESS} from '../constants/theaterMovieConstant'
const initialState = {
    theater: [],
    isLoading: false,
    error: null
}

function theaterMovie(state= initialState, action){
    switch(action.type){
        case GET_THEATERMOVIE_REQUEST:{
            return {...state, isLoading: true, error:null}
        }
        case GET_THEATERMOVIE_SUCCESS: {
            return {...state, isLoading: false, theater: action.payload}
        }
        case GET_THEATERMOVIE_FAILURE:{
            return {...state, isLoading: false, error: action.payload.error}
        }
        default:
            return state;
    }
}

export default theaterMovie;
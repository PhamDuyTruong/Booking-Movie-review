import {GET_MOVIE_SUCCESS, GET_MOVIE_FAILURE, GET_MOVIE_REQUEST} from '../constants/movieConstants'

const initialState = {
    movies: [],
    isLoading: false,
    error: null
}

function movieReducer(state= initialState, action){
    switch(action.type){
        case GET_MOVIE_REQUEST:{
            return {...state, isLoading: true, error:null}
        }
        case GET_MOVIE_SUCCESS: {
            return {...state, isLoading: false, movies: action.payload}
        }
        case GET_MOVIE_FAILURE:{
            return {...state, isLoading: false, error: null}
        }
        default:
            return state;
    }
}

export default movieReducer;
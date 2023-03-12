import {GET_MOVIEAPI_SUCCESS, GET_MOVIEAPI_FAILURE, GET_MOVIEAPI_REQUEST} from '../constants/movieAPI'

const initialState = {
    moviesAPI: [],
    isLoadingMovies:false,
    error:null
}

function movieAPIReducer(state= initialState, action){
    switch(action.type){
        case GET_MOVIEAPI_REQUEST:{
            return {...state, isLoadingMovies:true, error: null}
        }
        case GET_MOVIEAPI_SUCCESS: {
            return {...state, isLoadingMovies:false, moviesAPI: action.payload}
        }
        case GET_MOVIEAPI_FAILURE:{
            return {...state, isLoadingMovies: false, error: action.payload.error}
        }
        default:
            return state;
    }
}

export default movieAPIReducer;
import {GET_DETAILMOVIE_SUCCESS, GET_DETAILMOVIE_REQUEST, GET_DETAILMOVIE_FAILURE} from '../constants/detailMovie'

const initialState ={
    detailMovie: [],
    Loading: false,
    error: null
}

function detailMovie(state= initialState, action){
    switch(action.type){
        case GET_DETAILMOVIE_REQUEST:{
            return {...state, Loading: true, error:null}
        }
        case GET_DETAILMOVIE_SUCCESS: {
            return {...state, Loading: false, detailMovie: action.payload}
        }
        case GET_DETAILMOVIE_FAILURE:{
            return {...state, Loading: false, error: action.payload.error}
        }
        default:
            return state;
    }
}

export default detailMovie;
import {GET_MOVIECOMING_SUCCESS, GET_MOVIECOMING_REQUEST, GET_MOVIECOMING_FAILURE} from '../constants/movieComingConstant'

const initialState ={
    moviesComing: [],
    Loading: false,
    errorComing: null
}

function movieComingReducer(state= initialState, action){
    switch(action.type){
        case GET_MOVIECOMING_REQUEST:{
            return {...state, Loading: true, errorComing:null}
        }
        case GET_MOVIECOMING_SUCCESS: {
            return {...state, Loading: false, moviesComing: action.payload}
        }
        case GET_MOVIECOMING_FAILURE:{
            return {...state, Loading: false, errorComing: action.payload.error}
        }
        default:
            return state;
    }
}

export default movieComingReducer;
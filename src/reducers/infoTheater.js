import {GET_INFOTHEATER_FAILURE, GET_INFOTHEATER_SUCCESS, GET_INFOTHEATER_REQUEST} from '../constants/infoTheater'

const initialState = {
    infoTheater:[],
    Loading: false,
    error: null
}

function infoTheater(state= initialState, action){
    switch(action.type){
        case GET_INFOTHEATER_REQUEST:{
            return {...state, Loading: true, error:null}
        }
        case GET_INFOTHEATER_SUCCESS: {
            return {...state, Loading: false, infoTheater: action.payload.data}
        }
        case GET_INFOTHEATER_FAILURE:{
            return {...state, Loading: false, error: action.payload.error}
        }
        default:
            return state;
    }
}

export default infoTheater;
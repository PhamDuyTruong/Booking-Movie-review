import {GET_INFOSYSTHEATERMOVIE_FAILURE, GET_INFOSYSTHEATERMOVIE_SUCCESS, GET_INFOSYSTHEATERMOVIE_REQUEST} from '../constants/infoSystemTheaterConstants'

const intialState = {
    sysTheater:[],
    Loading: false,
    error: null
}

function sysTheaterMovie(state = intialState, action){
    switch(action.type){
        case GET_INFOSYSTHEATERMOVIE_REQUEST:{
            return {...state, Loading: true, error:null}
        }
        case GET_INFOSYSTHEATERMOVIE_SUCCESS:{
            return{...state, Loading: false, sysTheater:action.payload.data }
        }
        case GET_INFOSYSTHEATERMOVIE_FAILURE:{
            return{...state, Loading:true, error: action.payload.error}
        }
        default:
            return state
    }
}

export default sysTheaterMovie;
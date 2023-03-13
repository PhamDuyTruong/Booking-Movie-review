import {GET_SCHEDULE_SUCCESS, GET_SCHEDULE_FAILURE, GET_SCHEDULE_REQUEST} from '../constants/showtimeConstant'

const initialState ={
    scheduleItem : [],
    isLoading: false,
    error: null
}

function showtimeReducer(state = initialState, action){
    switch(action.type){
        case GET_SCHEDULE_REQUEST:{
            return {...state, isLoading: true, error:null}
        }
        case GET_SCHEDULE_SUCCESS: {
            return {...state, isLoading: false, scheduleItem: action.payload}
        }
        case GET_SCHEDULE_FAILURE:{
            return {...state, isLoading: false, error: action.payload.error}
        }
        default:
            return state;
    }
}

export default showtimeReducer;
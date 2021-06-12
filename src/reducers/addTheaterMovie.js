import {ADD_THEATERMOVIE} from '../constants/addTheaterMovie'

const initialState ={
    theaterMethod:[]
   
}

function addTheaterReducer(state = initialState, action){
    switch(action.type){
        case ADD_THEATERMOVIE:
           return {...state, theaterMethod: action.payload.item}
        default:
            return state;
    }
}

export default addTheaterReducer;
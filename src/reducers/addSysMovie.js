import {ADD_SYSMOVIE} from '../constants/addSysMovieConstant'

const initialState ={
    SystemMovie:[]
   
}

function addSysMovieReducer(state = initialState, action){
    switch(action.type){
        case ADD_SYSMOVIE:
           return {...state, SystemMovie: action.payload.item}
        default:
            return state;
    }
}

export default addSysMovieReducer;
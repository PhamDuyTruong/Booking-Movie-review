import {HANDLE_DETAILBUTTON} from '../constants/handleDetailButtonConstants'

const initialState ={
    name: null,
    address: null
}

function handleDetailReducer(state = initialState, action){
    switch(action.type){
        case HANDLE_DETAILBUTTON:
           return {...state, name: action.payload.ten, address:action.payload.diaChi}
        default:
            return state;
    }
}

export default handleDetailReducer;
import {ADD_SHOWTIMEMOVIE} from '../constants/showtimeConstant'

const initialState ={
    showtimeItem : []
}

function showtimeReducer(state = initialState, action){
    switch(action.type){
        case ADD_SHOWTIMEMOVIE:
            
            const showtimeItem = action.payload.item.filter(item => item.thongTinRap.maHeThongRap === action.payload.id)
           return {...state, showtimeItem: showtimeItem}
        default:
            return state;
    }
}

export default showtimeReducer;
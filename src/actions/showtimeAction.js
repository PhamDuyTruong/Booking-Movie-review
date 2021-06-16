import {ADD_SHOWTIMEMOVIE} from '../constants/showtimeConstant'

export const addShowtimeMovie = (item,id) =>{
    return {
        type: ADD_SHOWTIMEMOVIE,
        payload:{
            item,
            id
        }
    }
}
import {ADD_SYSMOVIE} from '../constants/addSysMovieConstant'

export const addSysMovie = (item, id) =>{
    return {
        type: ADD_SYSMOVIE,
        payload:{
            
            item,
            id
        }
    }
}
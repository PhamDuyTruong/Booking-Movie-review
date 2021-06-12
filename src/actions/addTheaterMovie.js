import {ADD_THEATERMOVIE} from '../constants/addTheaterMovie'

export const addTheaterMovie = (item, maCumRap) =>{
    return {
        type: ADD_THEATERMOVIE,
        payload:{
            
            item,
            maCumRap
        }
    }
}
import {DAT_GHE} from '../constants/datGheConstants'

export const datGhe = (ghe) =>{
    return {
        type: DAT_GHE,
        payload:{
            ghe
        }
    }
}
import {HANDLE_DETAILBUTTON} from '../constants/handleDetailButtonConstants'

export const handleButton = (ten, diaChi) =>{
    return {
        type: HANDLE_DETAILBUTTON,
        payload:{
            
            ten,
            diaChi
        }
    }
}
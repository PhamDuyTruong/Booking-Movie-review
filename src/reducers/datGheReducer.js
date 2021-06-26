import {DAT_GHE} from '../constants/datGheConstants'

const initialState ={
    danhSachGheDat: []
}

function addGheDatReducer(state = initialState, action){
    switch(action.type){
        case DAT_GHE:
            let danhSachGheDatUpdate = [...state.danhSachGheDat];
            let index = danhSachGheDatUpdate.findIndex((gheDangDat) => gheDangDat.tenGhe === action.payload.ghe.tenGhe);
            if(index != -1){
                danhSachGheDatUpdate.splice(index, 1);
            }
            else{
                danhSachGheDatUpdate.push(action.payload.ghe);
            }
            state.danhSachGheDat = danhSachGheDatUpdate;
           return {...state}
        default:
            return state;
    }
}

export default addGheDatReducer;
import axiosClient from './axiosClient'

const theaterAPI ={
    getDataTheater:() =>{
        return axiosClient.get("/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP10")
    },
    getInfoTheater: () =>{
        return axiosClient.get("/QuanLyRap/LayThongTinHeThongRap")
    }

}

export default theaterAPI;
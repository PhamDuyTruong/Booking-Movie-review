import axiosClient from './axiosClient'

const theaterAPI ={
    getDataTheater:() =>{
        return axiosClient.get("/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP10")
    }
}

export default theaterAPI;
import axiosClient from './axiosClient'

const theaterAPI ={
    getDataTheater:() =>{
        return axiosClient.get("/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01")
    },
    getInfoTheater: () =>{
        return axiosClient.get("/QuanLyRap/LayThongTinHeThongRap")
    },
    getInfoSystemTheater:(theaterId) =>{
        const params={
            maHeThongRap: theaterId,
            maNhom: "GP01"
        }
        return axiosClient.get("/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap="+ params.maHeThongRap +"&maNhom=GP01")
    }
}

export default theaterAPI; 
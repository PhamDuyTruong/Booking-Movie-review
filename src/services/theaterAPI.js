import axiosClient from './axiosClient'

const theaterAPI ={
    getDataTheater:() =>{
        return axiosClient.get("/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP03")
    },
    getInfoTheater: () =>{
        return axiosClient.get("/QuanLyRap/LayThongTinHeThongRap")
    },
    getInfoSystemTheater:(theaterId) =>{
        const params={
            maHeThongRap: theaterId,
            maNhom: "GP03"
        }
        return axiosClient.get("/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap="+ params.maHeThongRap +"&maNhom=GP03")
    },
    getScheduleById: (movieId) => {
        return axiosClient.get(`/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieId}`)
    }
}

export default theaterAPI; 
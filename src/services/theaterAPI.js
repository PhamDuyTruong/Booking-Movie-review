import axiosClient from './axiosClient'

const theaterAPI ={
    getDataTheater:() =>{
        return axiosClient.get("/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP10")
    },
    getInfoTheater: () =>{
        return axiosClient.get("/QuanLyRap/LayThongTinHeThongRap")
    },
    getInfoSystemTheater:(theaterId) =>{
        const params={
            maHeThongRap:theaterId
        }
        return axiosClient.get("/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap="+params.maHeThongRap)
    }
}

export default theaterAPI;
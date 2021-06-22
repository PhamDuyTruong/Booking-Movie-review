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
            maHeThongRap: theaterId,
            maNhom: "GP10"
        }
        return axiosClient.get("/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap="+ params.maHeThongRap +"&maNhom=GP10")
    }
}

export default theaterAPI; 
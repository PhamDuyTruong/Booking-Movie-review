
import axiosClient from './axiosClient'

const movieAPI ={
    getDataMovies: ()=>{

        return axiosClient.get("/QuanLyPhim/LayDanhSachPhimTheoNgay?maNhom=GP10&soTrang=1&soPhanTuTrenTrang=15&tuNgay=01%2F01%2F2018&denNgay=30%2F05%2F2021")
    },

    getDataComingMovies:()=>{
        return axiosClient.get("/QuanLyPhim/LayDanhSachPhimTheoNgay?maNhom=GP10&soTrang=1&soPhanTuTrenTrang=20&tuNgay=06%2F08%2F2020&denNgay=31%2F05%2F2030")
    },

    getDetailMovies: (movieId) =>{
        const params= {
            maPhim:movieId
            
        }
        return axiosClient.get("/QuanLyPhim/LayThongTinPhim?MaPhim="+params.maPhim)
    }

}

export default movieAPI
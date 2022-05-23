
import axiosClient from './axiosClient'

const movieAPI ={
    getMovies:() =>{
       return axiosClient.get("/QuanLyPhim/LayDanhSachPhim?maNhom=GP01") 
    },

    getDataMovies: ()=>{

        return axiosClient.get("/QuanLyPhim/LayDanhSachPhimTheoNgay?maNhom=GP01&soTrang=1&soPhanTuTrenTrang=15&tuNgay=01%2F01%2F2022&denNgay=18%2F05%2F2022")
    },

    getDataComingMovies:()=>{
        return axiosClient.get("/QuanLyPhim/LayDanhSachPhimTheoNgay?maNhom=GP01&soTrang=1&soPhanTuTrenTrang=20&tuNgay=20%2F05%2F2022&denNgay=31%2F05%2F2030")
    },

    getDetailMovies: (movieId) =>{
        const params= {
            maPhim:movieId
            
        }
        return axiosClient.get("/QuanLyPhim/LayThongTinPhim?MaPhim="+params.maPhim)
    }

}

export default movieAPI
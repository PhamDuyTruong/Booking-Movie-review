import axios from 'axios'
import axiosClient from './axiosClient';
import { CYBERSOFT_TOKEN } from "./axiosClient";

const movieAPI ={
    getMovies:() =>{
       return axios.get("https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP03", {
          headers: {
            TokenCybersoft: CYBERSOFT_TOKEN
          }
       }) 
    },

    getDataMovies: ()=>{

        return axiosClient.get("/QuanLyPhim/LayDanhSachPhimTheoNgay?maNhom=GP03&soTrang=1&soPhanTuTrenTrang=20&tuNgay=20%2F02%2F2022&denNgay=15%2F03%2F2023")
    },

    getDataComingMovies:()=>{
        return axiosClient.get("/QuanLyPhim/LayDanhSachPhimTheoNgay?maNhom=GP03&soTrang=1&soPhanTuTrenTrang=20&tuNgay=25%2F03%2F2023&denNgay=31%2F05%2F2030")
    },

    getDetailMovies: (movieId) =>{
        const params= {
            maPhim:movieId
            
        }
        return axiosClient.get("/QuanLyPhim/LayThongTinPhim?MaPhim="+params.maPhim)
    }

}

export default movieAPI
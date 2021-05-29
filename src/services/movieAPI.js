
import axiosClient from './axiosClient'

const movieAPI ={
    getDataMovies: ()=>{
        return axiosClient.get("/QuanLyPhim/LayDanhSachPhim?maNhom=GP10")
    }
}

export default movieAPI
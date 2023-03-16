import axiosClient from './axiosClient';
import axios from 'axios'

const ticketAPI ={
    getInfoTicket:(maLichChieu) =>{
        const params ={
            maLichChieu
        };
        return axiosClient.get("/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu="+params.maLichChieu)
    },
    buyTicket: (boughtTicket) => {
        return axios.post("https://movienew.cybersoft.edu.vn/api/QuanLyDatVe/DatVe", boughtTicket, {
            headers: {
                "Content-Type": "application/json"
            }
        })
    }
};

export default ticketAPI
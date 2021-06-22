import axiosClient from './axiosClient'

const ticketAPI ={
    getInfoTicket:(maLichChieu) =>{
        const params ={
            maLichChieu
        },
        return axiosClient.get("/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu="+params.maLichChieu)
    }
};

export default ticketAPI
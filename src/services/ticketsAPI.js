import axiosClient from './axiosClient'

const ticketAPI ={
    getInfoTicket:(maLichChieu) =>{
        const params ={
            maLichChieu
        };
        return axiosClient.get("/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu="+params.maLichChieu)
    },
    buyTicket: (boughtTicket) => {
        return axiosClient.post("/QuanLyDatVe/DatVe", boughtTicket)
    }
};

export default ticketAPI
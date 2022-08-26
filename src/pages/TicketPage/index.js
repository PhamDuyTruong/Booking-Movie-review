import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { datGhe } from "../../actions/datGheAction";
import { getInfoTicket } from "../../actions/TicketAction";
import PageLoading from "../pageLoading";

export default function TicketPage(props) {
  const [combo, setcombo] = useState(0);
  const [selectedOption, setSelectedOption] = useState("option1")
  const {maLichChieu} = useParams();
  const {ticketMovie, Loading, error} = useSelector((state) => state.ticket);
  const {danhSachGheDat} = useSelector((state) => state.ghe);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInfoTicket(maLichChieu))
    
  }, [])
  
  if (Loading) {
    return (
      <div className="container" style={{height:"850px", width:"100%", paddingTop:"200px"}}>
        <div className="row">
          <div className="col-4"></div>
          <div className="col-6">
              <PageLoading></PageLoading>;
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    ) 
  }
  if (error) {
    <div>{error}</div>;
  }
  const handleDatGhe =(ghe) =>{
    dispatch(datGhe(ghe))
  }
  // Get localStorage
  const infoUser = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;
    const infoPayment = localStorage.getItem("PaymentInfo")
    ? JSON.parse(localStorage.getItem("PaymentInfo"))
    : null;

    if(!infoUser){
      localStorage.clear();
    }

  const renderHangGhe = () =>{

    return ticketMovie.danhSachGhe.map((hangGhe, index) =>{
     
      let cssGheDat = " ";
      let cssGheDaDat = "";
      let disabled = false;
      if(hangGhe.loaiGhe === "Vip"){
        cssGheDat = "gheVip"
      }
      if(hangGhe.loaiGhe === "Thuong"){
        cssGheDat = "gheThuong"
      }
      let cssGheDangDat = " ";
      // Tìm ghế phù hợp với mã ghế
      let indexGheDangDat = danhSachGheDat.findIndex(gheDangDat => gheDangDat.maGhe === hangGhe.maGhe);
      // Nếu tìm thấy thì set lại cssGheDangDat
      if(indexGheDangDat !== -1){
        cssGheDangDat = "gheDangDat";
      }
     if(hangGhe.daDat === true){
       cssGheDaDat = "gheDaDat";
       disabled = true
     }
     let newDanhSachPhim = [];
     danhSachGheDat.map(item =>{
       // Nếu có tài khoản thì thông tin vé và thông tin phim sẽ được lưu vào localStorage
       if(infoUser){
       item.taiKhoanNguoiDat = infoUser.taiKhoan;
      }
       newDanhSachPhim.push({maGhe: item.maGhe, tenGhe: item.tenGhe, giaVe: item.giaVe, maRap: item.maRap, taiKhoan: item.taiKhoanNguoiDat})
       localStorage.setItem("ticketInfo", JSON.stringify(newDanhSachPhim))
     })
    
    localStorage.removeItem("PaymentInfo")
    
      return (
        <div key={index} className="text-light text-left ml-5 col-md-2 col-lg-1 col-xs-3 col-2">
            <button onClick={()=>handleDatGhe(hangGhe)} className={`btn ${cssGheDat} ${cssGheDangDat} ${cssGheDaDat} `} disabled ={disabled} style={{width:"50px", border:"2px solid orange", marginBottom:"5px", padding:"2px"}}>
                {hangGhe.tenGhe}
            </button>
        </div>
      )
    })
  }
  // Điều khiển việc chọn hình thức thanh toán
  const handleOptionChange = (event) =>{
    setSelectedOption(event.target.value)
  }
  const handleSubmit = () =>{
    if(infoUser && selectedOption){
        window.location= "/payment"
    }
  }

  return (
    <div
      className="container-fluid ticket-background"
      style={{
        position: "relative",
        width: "100%",
        height: "1000px",
        backgroundImage: "url('../img/rapPhim.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      {ticketMovie.length ===0 ?(<div>
      </div>)
      :(
      <div className="py-5 ticket-detail" >
        <div className="row">
          <div className="col-md-7 col-lg-8 col-12">
            <div className="d-flex">
              <img src="../img/Cumrap.jpg" alt="Hình ảnh" style={{width: "50px", height:"50px", borderRadius:"50%"}}></img>
             
                <div className="d-block">
                  <h3 className="px-2" style={{color:"#fff", fontSize:"20px", fontWeight:"bold"}}>{ticketMovie.thongTinPhim.tenCumRap}</h3>
                  <p className="px-2" style={{color:"#fff", fontWeight:"bold"}}>{ticketMovie.thongTinPhim.ngayChieu.substring(0,5)} - {ticketMovie.thongTinPhim.gioChieu} - {ticketMovie.thongTinPhim.tenRap}</p>
                </div>
                <div className="px-5 d-flex combo-price">
                  <img className="image-ticket" src="../img/popcorn.jpg" alt="Combo" style={{width:"60px", height:"60px", borderRadius:"50%"}}></img>
                  <span className="px-2" style={{color:"#fff", fontSize:"35px"}}>+</span>
                  <img className="image-ticket" src="../img/coca.jpg" alt="Combo" style={{width:"60px", height:"60px", borderRadius:"50%"}}></img>
                  <span className="px-2 ticket-price" style={{color:"#FF3300", fontSize:"35px"}}>= 50K</span>
                </div>
            </div>
            <h2 style={{textAlign:"center", color:"#fff", fontWeight:"600"}}>Màn hình</h2>
            <div className="screen-ticket"></div>
            <div className="ghe-container py-5 px-2">
              <div className="row">
                {renderHangGhe()}
              </div>
            </div>
            <div className="phanLoai-container">
              <div className="row">
                <div className="col-md-3 col-xs-6 d-flex">
                    <button className="btn gheThuong" style={{width:"50px", height:"50px", border:"2px solid orange", marginBottom:"5px", padding:"2px"}} ></button>
                    <p className="px-1" style={{color:"#fff"}}>: Ghế thường</p>
                </div>
                <div className="col-md-3 col-xs-6 d-flex">
                    <button className="btn gheVip" style={{width:"50px", height:"50px", border:"2px solid orange", marginBottom:"5px", padding:"2px"}} ></button>
                    <p className="px-1" style={{color:"#fff"}}>: Ghế Vip</p>
                </div>
                <div className="col-md-3 col-xs-6 d-flex">
                    <button className="btn gheDangDat" style={{width:"50px", height:"50px", border:"2px solid orange", marginBottom:"5px", padding:"2px"}} ></button>
                    <p className="px-1" style={{color:"#fff"}}>: Ghế đang đặt</p>
                </div>
                <div className="col-md-3 col-xs-6 d-flex">
                    <button className="btn gheDaDat" style={{width:"50px", height:"50px", border:"2px solid orange", marginBottom:"5px", padding:"2px"}} ></button>
                    <p className="px-1" style={{color:"#fff"}}>: Ghế đã đặt</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-md-5  col-lg-4 col-12">
            <div className="ticket-content py-5 px-3 mx-2" style={{background:"#fff", height:"900px", width:"95%"}}>
              <h3 style={{fontSize:"25px", fontWeight:"600"}}>{ticketMovie.thongTinPhim.tenPhim}</h3>
              <p style={{fontWeight:"400"}}>{ticketMovie.thongTinPhim.tenCumRap}</p>
              <p style={{fontWeight:"400"}}>{ticketMovie.thongTinPhim.ngayChieu} - {ticketMovie.thongTinPhim.gioChieu} - {ticketMovie.thongTinPhim.tenRap}</p>
              <div className="py-3">
                <tr>
                  <td style={{color:"#aa0000", fontWeight:"bold", paddingRight:"60px"}}>Ghế:</td>
                  <td style={{color:"#33ff00"}}>{danhSachGheDat.reduce((tongTien, gheDangDat)=>{
                          return tongTien += gheDangDat.giaVe
                         
                  }, 0).toLocaleString()} VND</td>
                </tr>
                <tr >
                  <td>
                    <img src="../img/popcorn.jpg" style={{width:"25px", height:"25px"}}></img>
                    <span className="px-0">
                      <button className="combo-button" onClick={() => setcombo(combo + 50000)} style={{border:"none", background:"none"}}>
                          Combo:
                      </button>
                      </span>
                  </td>
                  <td style={{color:"#33ff00"}}>{combo.toLocaleString()} VND
                  <span className="px-1">
                    <button className="minusCombo" style={{border:"none", background:"none"}} onClick={() =>setcombo(0)}>
                        <i class="fa fa-times"></i>
                    </button>
                  </span>
                  </td>
                </tr>
                <tr>
                  <td>Tổng tiền: </td>
                  <td style={{color:"#33ff00"}}>
                  {(danhSachGheDat.reduce((tongTien, gheDangDat)=>{
                          return tongTien += gheDangDat.giaVe
                         
                  }, 0) + combo).toLocaleString()} VND
                 
                  </td>
                </tr>
              </div>

              <div className="py-4" style={{borderTop:"1px solid #dcdcdc"}}>
                  <p style={{color:"#dcdcdc"}}>Email</p>
                  {/* Lấy email từ userInfo */}
                  {infoUser === null ?   <p style={{color:"#aa0000"}}>Bạn cần phải đăng nhập !!!</p>: 
                  <p>
                    {infoUser.email}
                  </p>}
                  
              </div>
              <div className="py-4" style={{borderTop:"1px solid #dcdcdc"}}>
                  <p style={{color:"#dcdcdc"}}>Số điện thoại</p>
                  {/* Lấy số điện thoại từ userInfo */}
                  {infoUser === null ?   <p style={{color:"#aa0000"}}>Bạn cần phải đăng nhập !!!</p>: 
                  <p>
                    {infoUser.soDT}
                  </p>}
                
              </div>
              <div className="py-2" style={{borderTop:"1px solid #dcdcdc"}}>
                  <p style={{color:"#000", fontWeight:"600"}}>Hình thức thanh toán</p>
                  <div className="d-flex">
                    <input
                        type="radio"
                        id="cb2"
                        name="thanhToan"
                        value = "option1"
                        checked={selectedOption ==="option1"}
                        onChange = {handleOptionChange}
                        style={{width:"45px"}} />
                    <label htmlFor="cb2">
                        <img src="../img/zalopay.jpg" alt="logo" style={{height:"35px", width:"35px", borderRadius:"50%"}}></img>
                        <span>Thanh toán qua ZaloPay</span>
                    </label>
                  </div>
                  <div className="d-flex py-3">
                  <input
                        type="radio"
                        id="cb3"
                        value= "option2"
                        name="thanhToan"
                        checked={selectedOption === "option2"}
                        onChange ={handleOptionChange}
                        style={{width:"45px"}} />
                    <label htmlFor="cb3">
                        <img src="../img/visa.png" alt="logo" style={{height:"35px", width:"35px", borderRadius:"50%"}}></img>
                        <span>Visa Master, JCB</span>
                    </label>
                  </div>
                  <div className="d-flex py-3">
                  <input
                        type="radio"
                        id="cb4"
                        value="option3"
                        checked = {selectedOption=== "option3"}
                        onChange ={handleOptionChange}
                        name="thanhToan"
                        style={{width:"45px"}} />
                    <label htmlFor="cb4">
                        <img src="../img/atm.jpg" alt="logo" style={{height:"35px", width:"35px", borderRadius:"50%"}}></img>
                        <span>Thẻ ATM nội địa</span>
                    </label>
                  </div>
              </div>
              <div className="py-1 d-block" style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                  <button className="btn btn-secondary" onClick ={handleSubmit}>Thanh toán</button>
                  {(!infoUser || !selectedOption) ? <div className="alert-danger mt-2">Làm ơn hãy điền đầy đủ</div>: ""}
              </div>
              <div className="footer-ticket py-2">
                  <img src="../img/chamthan.png" alt="Hinh" style={{width:"30px", height:"30px", borderRadius:"50%"}}></img>
                  <span>Vé đã mua không thể đổi hoặc hoàn trả. Mã vé sẽ được gửi qua email đã nhập </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
    } 
      </div>
  )
}

import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Alert from "@material-ui/lab/Alert";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import Swal from "sweetalert2";
import { getInfoUser } from "../../actions/infoUserAction";
import { updateInfoUser } from "../../actions/updateInfoUserAction";
import "../../Styles/userInfo.scss";

// Regex phone number
const regexVNPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;

// Tạo schame validation
const schema = yup.object().shape({
  account: yup.string().required("Tài khoản không được bỏ trống !"),
  fullName: yup.string().required("Tên không được bỏ trống !"),
  email: yup
    .string()
    .required("Email không được bỏ trống !")
    .email("Email sai định dạng !"),
  phone: yup
    .string()
    .required("Số điện thoại không được bỏ trống !")
    .matches(regexVNPhoneNumber, "Số điện thoại sai định dạng !"),
  password: yup.string().required("Mật khẩu không được bỏ trống !"),
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValueChange] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValueChange(newValue);
  };
  const history = useHistory();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const dispatch = useDispatch();
  const { infoUser } = useSelector((state) => state.infoUser);
  const { error } = useSelector((state) => state.updateInfoUser);

  // Get localstorage
  const infoUserInLocalStorage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;
    const infoPayment = localStorage.getItem("PaymentInfo")
    ? JSON.parse(localStorage.getItem("PaymentInfo"))
    : null;
    const infoTicket = localStorage.getItem("ticketInfo")
    ? JSON.parse(localStorage.getItem("ticketInfo"))
    : null;



  // When user go to the url "/userInfo" call API to get Info User and book tickets right now !
  useEffect(() => {
    const ObjToGetInfoUser = {
      taiKhoan: infoUserInLocalStorage.taiKhoan,
    };
    dispatch(getInfoUser());
  }, []);
  console.log(infoUser)

  // Set value here and show Info User right away !
  useEffect(() => {
    if (infoUser) {
      setValue("email", infoUser.content.email);
      setValue("account", infoUser.content.taiKhoan);
      setValue("fullName", infoUser.content.hoTen);
      setValue("password", infoUser.content.matKhau);
      setValue("phone", infoUser.content.soDT);
    }
  }, [infoUser]);

  // Handle Update Info User
  const handleUpdateInfoUser = (value) => {
    console.log("value", value);
    const ObjToUpdateInfoUser = {
      taiKhoan: value.account,
      matKhau: value.password,
      email: value.email,
      soDt: value.phone,
      maNhom: "GP03",
      maLoaiNguoiDung: "KhachHang",
      hoTen: value.fullName,
    };
    dispatch(updateInfoUser(ObjToUpdateInfoUser));
  };

  console.log(infoUser.content?.thongTinDatVe)

  // handle book ticket user
  const handleBookTicketUser = () => {
    if (infoUser) {
        return (
          <>
          <h2 style={{fontSize:"25px"}}>Bạn đã đặt vé !!!</h2>
          <h2  style={{fontWeight:"bold"}}>Thông tin vé đã đặt</h2>
          {infoUser.content?.thongTinDatVe?.map((item, index) =>{
            return (
                <div key={index}>
                    <div className="d-flex">
                        <p  style={{fontWeight: "600", color: "#E21818", fontSize: "20px"}}>{index + 1}.</p>
                        <p className="px-3" style={{fontWeight: "600", color: "#E21818", fontSize: "20px"}}>Tên phim: {item.tenPhim}</p>
                        <p className="px-3" style={{fontWeight: "600", color: "#E21818", fontSize: "20px"}}>Ngày đặt: {item.ngayDat.substring(11,16)}</p>
                        <p style={{fontWeight: "600", color: "#E21818", fontSize: "20px"}}>Giá vé: {item.giaVe}</p>
                    </div>
                    <div>
                       <h4 style={{fontWeight:"bold"}}>Chi tiết vé</h4>
                       {item.danhSachGhe.map((item, index) => (
                          <div style={{border: "1px solid #ddd"}} key={index}>
                          <p style={{fontWeight: "bold"}}>Vé {index + 1}</p>
                          <p>Ghế: {item.tenGhe}</p>
                          <p>Rạp: {item.tenRap}</p>
                          <p>Hệ thống rạp: {item.tenHeThongRap}</p>
                          
                          </div>
                       ))}
                    </div>
                    <hr />
                </div>
            )
          })}
          </>
          
        );
      }
  };

  // Handle Logout here
  const handleLogOut = () => {
    return Swal.fire({
      title: "Are you sure?",
      text: "Are you sure to sign out of this account?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("userInfo");
        history.replace("/login");
      }
    });
  };

  return (
    <div className="userInfo">
      <div className="container">
        <div className={classes.root}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
          >
            <Tab label="Thông tin cá nhân" {...a11yProps(0)} />
            <Tab label="Lịch sử đặt vé" {...a11yProps(1)} />
            <Tab
              label="Đăng xuất"
              {...a11yProps(2)}
              className="text-danger"
              onClick={handleLogOut}
            />
          </Tabs>

          <TabPanel value={value} index={0}>
            <div className="container">
              <form onSubmit={handleSubmit(handleUpdateInfoUser)}>
                <div className="row">
                  <div className="form-group col-6">
                    <label htmlFor="exampleInputEmail1">Email</label>
                    <input
                      type="email"
                      className="form-control mb-3"
                      aria-describedby="emailHelp"
                      placeholder="Nhập email"
                      {...register("email")}
                    />
                    {errors.email && (
                      <Alert variant="filled" severity="error" className="mb-3">
                        {errors.email.message}
                      </Alert>
                    )}
                  </div>
                  <div className="form-group col-6">
                    <label htmlFor="exampleInputPassword1">Tài khoản</label>
                    <input
                      type="text"
                      className="form-control mb-3"
                      placeholder="Nhập Tài khoản"
                      {...register("account")}
                    />
                    {errors.account && (
                      <Alert variant="filled" severity="error" className="mb-3">
                        {errors.account.message}
                      </Alert>
                    )}
                  </div>
                  <div className="form-group col-6">
                    <label htmlFor="exampleInputEmail1">Họ tên</label>
                    <input
                      type="text"
                      className="form-control mb-3"
                      aria-describedby="emailHelp"
                      placeholder="Nhập họ tên"
                      {...register("fullName")}
                    />
                    {errors.fullName && (
                      <Alert variant="filled" severity="error" className="mb-3">
                        {errors.fullName.message}
                      </Alert>
                    )}
                  </div>
                  <div className="form-group col-6">
                    <label htmlFor="exampleInputPassword1">Mật khẩu</label>
                    <input
                      type="password"
                      className="form-control mb-3"
                      placeholder="Password"
                      {...register("password")}
                    />

                    {errors.password && (
                      <Alert variant="filled" severity="error" className="mb-3">
                        {errors.password.message}
                      </Alert>
                    )}
                  </div>
                  <div className="form-group col-6">
                    <label htmlFor="exampleInputEmail1">Số điện thoại</label>
                    <input
                      type="text"
                      className="form-control mb-3"
                      aria-describedby="emailHelp"
                      placeholder="Nhập số điện thoại"
                      {...register("phone")}
                    />
                    {errors.phone && (
                      <Alert variant="filled" severity="error" className="mb-3">
                        {errors.phone.message}
                      </Alert>
                    )}
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <button className="btn btn-primary mx-auto" type="submit">
                    Cập nhật
                  </button>
                </div>
                {error ? (
                  <div className="d-flex align-items-center mt-3">
                    <Alert
                      variant="filled"
                      severity="error"
                      className="mx-auto"
                    >
                      {error}
                    </Alert>
                  </div>
                ) : null}
              </form>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            {handleBookTicketUser()}
          </TabPanel>
          <TabPanel value={value} index={2}></TabPanel>
        </div>
      </div>
    </div>
  );
}

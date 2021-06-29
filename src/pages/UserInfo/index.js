import React, { useState, useEffect } from "react";
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
  account: yup.string().required("Account can not be blank !"),
  fullName: yup.string().required("Name can not be blank !"),
  email: yup
    .string()
    .required("Email can not be blank !")
    .email("Email has wrong format !"),
  phone: yup
    .string()
    .required("Phone can not be blank !")
    .matches(regexVNPhoneNumber, "Phone has wrong format !"),
  password: yup.string().required("Password can not be blank !"),
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

  // Variable for form
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

  // When user go to the url "/userInfo" call API to get Info User and book tickets right now !
  useEffect(() => {
    const ObjToGetInfoUser = {
      taiKhoan: infoUserInLocalStorage.taiKhoan,
    };
    dispatch(getInfoUser(ObjToGetInfoUser));
  }, []);

  // Set value here and show Info User right away !
  useEffect(() => {
    if (infoUser) {
      setValue("email", infoUser.email);
      setValue("account", infoUser.taiKhoan);
      setValue("fullName", infoUser.hoTen);
      setValue("password", infoUser.matKhau);
      setValue("phone", infoUser.soDT);
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
      maNhom: "GP10",
      maLoaiNguoiDung: "KhachHang",
      hoTen: value.fullName,
    };
    dispatch(updateInfoUser(ObjToUpdateInfoUser));
  };

  // handle book ticket user
  const handleBookTicketUser = () => {
    if (infoUser) {
      if (infoUser.thongTinDatVe.length === 0) {
        return "Bạn chưa đặt vé nào cả !";
      } else {
        return "Bạn đã đặt vé !";
      }
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
                      placeholder="Enter email"
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
                      placeholder="Password"
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
                      placeholder="Enter email"
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
                      placeholder="Enter email"
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

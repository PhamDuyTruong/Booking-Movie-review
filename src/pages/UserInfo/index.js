import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Swal from "sweetalert2";
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
  retypePassword: yup
    .string()
    .required("Phone can not be blank !")
    .oneOf([yup.ref("password"), null], "Password does not match"),
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
  const [value, setValue] = React.useState(0);

  // Get localstorage to link admin
  const infoUserInLocalStorage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;
  console.log("infoUserInLocalStorage", infoUserInLocalStorage.maLoaiNguoiDung);

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
        window.location = "/login";
      }
    });
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
              className="logout"
              onClick={handleLogOut}
            />
            {infoUserInLocalStorage.maLoaiNguoiDung === "QuanTri" ? (
              <Tab label="Quản lý" {...a11yProps(3)} />
            ) : null}
          </Tabs>
          <TabPanel value={value} index={0}>
            <div className="container">
              <form>
                <div className="row">
                  <div className="form-group col-4">
                    <label htmlFor="exampleInputEmail1">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                  </div>
                  <div className="form-group col-4">
                    <label htmlFor="exampleInputPassword1">Tài khoản</label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group col-4">
                    <label htmlFor="exampleInputEmail1">Họ tên</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                  </div>
                  <div className="form-group col-4">
                    <label htmlFor="exampleInputPassword1">Mật khẩu</label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group col-4">
                    <label htmlFor="exampleInputEmail1">Số điện thoại</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                  </div>
                  <div className="form-group col-4">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            Lịch sử đặt vé
          </TabPanel>
          <TabPanel value={value} index={2}></TabPanel>
          {infoUserInLocalStorage.maLoaiNguoiDung === "QuanTri" ? (
            <TabPanel value={value} index={3}>
              Quản lý
            </TabPanel>
          ) : null}
        </div>
      </div>
    </div>
  );
}

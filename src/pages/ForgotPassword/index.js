import React from "react";
import {Link} from 'react-router-dom'

export default function ForgotPasswword() {
  return (
    <div classname="container-fluid">
      <div
        classname="login-forgot"
        style={{
          width: "100%",
          height: "850px",
          backgroundImage: "url(../img/spiderman.jpg)",
          overflow: "hidden",
          backgroundRepeat:"no-repeat",
          backgroundSize:"cover",
          backgroundPosition:"center center"
        }}
      >
        <div className="row">
          <div className="col-md-6">
            <div
              className="cardForgot"
              style={{ width: "600px", height: "700px" }}
            >
              <form className="box">
                <h1 className="forgetpasswordText">Forgot Password</h1>
                <p className="text-muted">
                  Just enter email address you've used to resgiter and we'll
                  send you a reset link
                </p>
                <p className="text-muted">Email</p>
                <input
                  type="text"
                  name="email"
                  id="id"
                  placeholder="Email"
                  id="emailForgot"
                />
                <Link to ="/login">
                    <input type="submit" name defaultValue="Login" href="/login"/>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

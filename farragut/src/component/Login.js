import React from "react";
import background from "../image/background.png";
import Arist_logo from "../image/Arist_logo.png";

function Login() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div className="custom-pad">
              <div className="Background__Image">
                <div>
                  <img
                    src={Arist_logo}
                    alt="no-logo found"
                    className="logo-style"
                  />
                </div>
              </div>
            </div>
            {/* <img
              src={background}
              alt="no-image found"
              className=" backImage img__Style .img-fluid"
            /> */}
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div className="form-wrapper">
              <form className="form-inline bg-white custom-pad-form  form-style">
                <h1>Hello, Sign In</h1>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter a email"
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter a Password"
                  />
                </div>
                <button className="px-5 p-2 mt-4 btn btn-danger">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

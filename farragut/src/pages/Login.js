import React from "react";
import LogoComponent from "../component/LogoComponent";
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <div className="overflow-hidden">
      <div className="row">
        <div className=" col-xs-12 col-sm-6 col-md-6 col-lg-6">
          <div className="custom-pad">
            <div className="Background__Image">
              <div>
                <LogoComponent flag={false} logoflag />
              </div>
            </div>
          </div>
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
              <button className="px-5  mt-4 buttoncss1">
                <NavLink
                  to="/admin"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Login
                </NavLink>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

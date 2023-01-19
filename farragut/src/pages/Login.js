import React from "react";
import LogoComponent from "../component/LogoComponent";
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 col-lg-7">
          <div className="">
            <div className="Background__Image">
              <div>
                <LogoComponent flag={false} logoflag />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-5">
          <div className="form-wrapper">
            <form className="form-inline bg-white custom-pad-form  form-style">
              <h1 className="mt-0">Hello, Sign In</h1>
              <div className="form-group mb-3">
                <label>Email</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter a email"
                />
              </div>
              <div className="form-group mb-3">
                <label>Password</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter a Password"
                />
              </div>
              <button className="px-5 py-2 buttoncss1">
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

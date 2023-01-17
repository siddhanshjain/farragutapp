import React from 'react';
import Arist_logo from "../image/Arist_logo.png";
import Logo2 from "../image/Logo2.png";
import { NavLink } from "react-router-dom";
import "../assets/css/landingpage.css";
import LogoComponent from "./LogoComponent";

const LandingPageNew = ({ flag, logoflag }) => {
  return (
    <>
    <div className="main-wrapper landing-page">
        <div className="container-fluid header-wrapper py-3">
            <div className="row">
                <div className="col-6">
                    <LogoComponent flag={true} logoflag />
                </div>
                <div className="col-6 justify-content-end d-flex align-items-center">
                    <button className="buttoncss">
                        <NavLink
                            to="/login"
                            style={{ textDecoration: "none", color: "white" }}
                        >
                            Login
                        </NavLink>
                    </button>
                </div>
            </div>
        </div>
        <div className="container-fluid landingpage-content justify-content-center align-items-center d-flex">
            <div className="row">
                <div className="col-md-12">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div class="transbox1">
                                <h1>Welcome to Arist</h1>
                                <p>
                                Dummy About us text? More like dummy thicc text, amirite? Dummy
                                text? More like dummy thicc text, amirite?Dummy text? More like
                                dummy thicc text, amirite?Dummy text? More like dummy thicc text,
                                amirite?
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid footer-val1 py-3">
            <div className="row">
                <div className="col-md-12">
                    <div className="">©2023. All Rights Reserved. Privacy Policy</div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default LandingPageNew
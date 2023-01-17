import { Button } from "bootstrap";
import React from "react";
import Arist_logo from "../image/Arist_logo.png";
import Footer from "./Footer";
import LandingSection from "./LandingSection";
import LogoComponent from "./LogoComponent";

const LandingPage = () => {
  return (
    <>
      <div className="images">
        <div className="resLink">
          <LogoComponent flag={true} logoflag />
          <LandingSection />
          <Footer />
        </div>
      </div>

      {/* <img src={Landingpage} alt="no-logo found" className="logo-style" /> */}
    </>
  );
};

export default LandingPage;

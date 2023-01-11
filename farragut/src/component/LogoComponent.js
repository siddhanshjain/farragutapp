import React from "react";
import Arist_logo from "../image/Arist_logo.png";
import Logo2 from "../image/Logo2.png";

const LogoComponent = () => {
  return (
    <div className="commoncomponent p-1">
      {" "}
      <div className="d-inline">
        <img
          src={Logo2}
          alt="no-logo found"
          style={{ width: "50px", height: "20px" }}
        />
        <br />

        <img src={Arist_logo} alt="no-logo found" className="logo-style" />
        <p2 style={{ color: "white" }}>Analytics</p2>
      </div>
    </div>
  );
};

export default LogoComponent;

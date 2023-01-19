import React from "react";
import aristLogo from "../assets/img/arist-logo-white.png";

const LogoComponent = ({ flag, logoflag }) => {
  return (
    <div className={flag ? "commoncomponent1" : ""}>
      {" "}
      <div className="" style={{ paddingTop: "10px" }}>
        {logoflag && (
          <img src={aristLogo} alt="no-logo found" style={{ height: "70px" }} />
        )}
        {/* <br />
        <div className="d-flex">
          <img src={Arist_logo} alt="no-logo found" className="logo-style1" />
          <p2 style={{ color: "white" }}>Analytics</p2>
        </div> */}
      </div>
    </div>
  );
};

export default LogoComponent;

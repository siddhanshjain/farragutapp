import React from "react";

const Header = ({ header }) => {
  return (
    <div className="container-fluid header-val1  py-3">
      <div className="row">
        <div className="col-md-12">
          <div>{header}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;

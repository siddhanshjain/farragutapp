import React from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const LandingSection = () => {
  return (
    <>
      <div className="sideWrapper p-2">
        <button className="buttoncss">
          <NavLink
            to="/login"
            style={{ textDecoration: "none", color: "white" }}
          >
            Login
          </NavLink>
        </button>
      </div>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div class="transbox">
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
    </>
  );
};

export default LandingSection;

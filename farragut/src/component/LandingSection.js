import React from "react";
import ButtonElement from "./ButtonElement";

const LandingSection = () => {
  return (
    <>
      <div className="sideWrapper p-2">
        <ButtonElement name={"Login"} className={"buttoncss"}></ButtonElement>
      </div>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="landingpagewrapper">
            <h1>Welcome to Arist</h1>
            <br />
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

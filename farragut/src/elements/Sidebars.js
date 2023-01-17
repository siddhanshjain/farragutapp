import React, { Component } from "react";
import { useLocation, NavLink } from "react-router-dom";

import { Nav } from "react-bootstrap";
import LogoComponent from "../component/LogoComponent";

function Sidebar({ dashboardRoutes }) {
  const location = useLocation();
  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  return (
    <div className="sidebar" data-color={"black"}>
      <div className="sidebar-background" />
      <div className="sidebar-wrapper">
        <div className="logo d-flex align-items-center justify-content-start">
          <a className="simple-text logo-mini mx-1">
            <div className="logo-img">
              {/* <img src={require("assets/img/reactlogo.jpg")} alt="..." /> */}
              <LogoComponent />
            </div>
          </a>
          <a className="simple-text">Analytics</a>
        </div>
        <Nav>
          {dashboardRoutes.map((prop, key) => {
            if (!prop.redirect)
              return (
                <li
                  className={
                    prop.upgrade
                      ? "active active-pro"
                      : activeRoute(prop.layout + prop.path)
                  }
                  key={key}
                >
                  <NavLink
                    to={prop.layout + prop.path}
                    className="nav-link"
                    activeClassName="active"
                  >
                    <div className="d-inline-block dividercls" />
                    <div className="d-sm-inline-block">
                      <i className={prop.icon} />
                      <p>{prop.name}</p>
                    </div>
                  </NavLink>
                </li>
              );
            return null;
          })}
        </Nav>
      </div>
    </div>
  );
}

export default Sidebar;

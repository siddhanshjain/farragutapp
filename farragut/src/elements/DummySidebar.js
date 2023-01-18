import React from "react";
import { useLocation, NavLink } from "react-router-dom";

import { Nav } from "react-bootstrap";
import AristLogo from "../assets/img/arist-analytics-logo.jpg";
import { authProtectedRoutes } from "./routes";

function DummySidebar() {
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
              <img src={AristLogo} alt="..." />
            </div>
          </a>
          <a className="simple-text">Analytics</a>
        </div>
        <Nav>
          {authProtectedRoutes.map((prop, key) => {
            return (
              <li
                className={
                  prop.upgrade ? "active active-pro" : activeRoute(prop.path)
                }
                key={key}
              >
                <NavLink
                  to={prop.path}
                  className="nav-link"
                  activeClassName="active"
                >
                  <div className="d-inline-block dividercls" />
                  <div className="d-sm-inline-block">
                    {" "}
                    <img src={prop.icon} /> <p>{prop.name}</p>
                  </div>
                </NavLink>
              </li>
            );
          })}
        </Nav>
      </div>
    </div>
  );
}

export default DummySidebar;

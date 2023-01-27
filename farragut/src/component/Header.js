import React, { useEffect, useState } from "react";
import { useProSidebar } from "react-pro-sidebar";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "../assets/css/header.css";

const Header = ({ header }) => {
  const { collapseSidebar, toggleSidebar, broken } = useProSidebar();

  return (
    <div className="container-fluid header-val1 my-3">
      <div className="row d-flex align-items-center">
        <div className="col-6 header-menu-title mr-5">
          {!broken &&
            /* <button onClick={() => collapseSidebar()} className="btn p-0 btn-toggle">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
          </svg>
        </button> */ ""}

          <main>
            <div>
              {broken && (
                <button
                  className="btn p-0 btn-toggle"
                  onClick={() => toggleSidebar()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-list"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                    />
                  </svg>
                </button>
              )}
            </div>
          </main>
          <div>
            <h2>{header}</h2>
          </div>
        </div>
        <div className="col-6 d-flex justify-content-end">
          <NavDropdown
            id="nav-user-profile-drodown"
            title="Mahfuzul Nabil"
            className="user-profile-drodown-header"
            align="end"
          >
            <NavDropdown.Item>
              <Link to="/profile">one</Link>
            </NavDropdown.Item>
            {/* <NavDropdown.Item href="/userprofile">User Profile</NavDropdown.Item> */}
            <NavDropdown.Divider />
            <NavDropdown.Item href="/resetpassword">two</NavDropdown.Item>
          </NavDropdown>
        </div>
      </div>
    </div>
  );
};

export default Header;

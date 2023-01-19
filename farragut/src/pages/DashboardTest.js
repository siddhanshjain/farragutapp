import React from 'react'
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import iconone from "../assets/img/icons/7icon.svg";
import icontwo from "../assets/img/icons/6icon.svg";
import iconthree from "../assets/img/icons/5icon.svg";
import iconfour from "../assets/img/icons/4icon.svg";
import iconfive from "../assets/img/icons/3icon.svg";
import iconsix from "../assets/img/icons/2icon.svg";
import iconseven from "../assets/img/icons/1icon.svg";
import { Link, NavLink, Outlet } from "react-router-dom";
import AristLogo from "../assets/img/arist-analytics-logo.jpg";
import { Navbar } from "react-bootstrap";

const DashboardTest = () => {
    const { collapseSidebar, toggleSidebar, broken } = useProSidebar();
  return (
    <>
      <div style={{ display: 'flex', height: '100%', minHeight: '400px' }}>
      <Sidebar customBreakPoint="800px">
        <Navbar.Brand as={Link} to="/dashboard">
          <img src={AristLogo} alt="logo" className="img-fluid mb-2 mainLogo" />
        </Navbar.Brand>
        <Menu>
          <MenuItem
            icon={<img src={iconone} />}
            active={window.location.pathname == "/dashboard"}
          >
            <Link to="/dashboard" style={{ textDecoration: "none" }}>
              {" "}
              Dashboard
            </Link>
          </MenuItem>
          <MenuItem
            icon={<img src={icontwo} />}
            active={window.location.pathname == "/users"}
          >
            <Link to="/users" style={{ textDecoration: "none" }}>
              {" "}
              Users
            </Link>
          </MenuItem>
          <MenuItem icon={<img src={iconthree} />}> Reports</MenuItem>
          <MenuItem icon={<img src={iconfour} />}> Application</MenuItem>
          <MenuItem icon={<img src={iconfive} />}> Feature Set</MenuItem>
          <MenuItem icon={<img src={iconsix} />}> Data Sync</MenuItem>
          <MenuItem icon={<img src={iconseven} />}> Logout</MenuItem>
        </Menu>
      </Sidebar>
      <main style={{ padding: 10 }}>
        <div>
          {broken && (
            <button className="sb-button" onClick={() => toggleSidebar()}>
              Toggle
            </button>
          )}
        </div>
      </main>
    </div>
    </>
  )
}

export default DashboardTest

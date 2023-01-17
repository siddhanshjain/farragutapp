import React from "react";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { authProtectedRoutes, publicRoutes } from "./elements/routes";
import Sidebar from "./elements/Sidebars";

function App() {
  const user = false;
  return (
    <BrowserRouter>
      {!user && (
        <>
          <Routes>
            {publicRoutes.map((route, index) => {
              return (
                route.path && (
                  <Route
                    key={index}
                    path={route.path}
                    // exact={route.exact}
                    element={<route.element />}
                  />
                )
              );
            })}
          </Routes>
        </>
      )}

      {user && (
        <>
          <Sidebar authProtectedRoutes={authProtectedRoutes} />
          <Navigate from="/" to="/dashboard" />
          <Routes>
            {authProtectedRoutes.map((route, index) => {
              return (
                route.path && (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    element={<route.element />}
                  />
                )
              );
            })}
          </Routes>
        </>
      )}
    </BrowserRouter>
  );
}

export default App;

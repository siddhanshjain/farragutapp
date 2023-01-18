import React from "react";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { authProtectedRoutes, publicRoutes } from "./elements/routes";
import Sidebars from "./elements/Sidebars";
import Header from "./component/Header";
// import DummySidebar from "./elements/DummySidebar";

function App() {
  const user = true;
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
          <div className="d-flex">
            <Sidebars />

            <Header header={"Dashboard"} />

            <Routes>
              {authProtectedRoutes.map((route, index) => {
                return (
                  route.path && (
                    <Route
                      key={index}
                      path={route.path}
                      element={<route.element />}
                    />
                  )
                );
              })}
            </Routes>
          </div>
        </>
      )}
    </BrowserRouter>
  );
}

export default App;

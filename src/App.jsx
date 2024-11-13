import NavbarComp from "./components/NavbarComp";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NavbarProfile from "./components/NavbarProfile";

function App() {
  const user = useSelector((state) => state.login);

  return (
    <>
      {user.token ? <NavbarProfile /> : <NavbarComp />}
      <Outlet />
      <Footer />
    </>
  );
}

export default App;

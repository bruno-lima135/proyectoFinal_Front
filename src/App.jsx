import NavbarComp from "./components/NavbarComp";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
<<<<<<< Updated upstream
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NavbarProfile from "./components/NavbarProfile";
=======
>>>>>>> Stashed changes

function App() {
  return (
    <>
      <NavbarComp />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;

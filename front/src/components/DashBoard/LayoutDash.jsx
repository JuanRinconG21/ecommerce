import React, { useState } from "react";

import BarraLateral from "./BarraLateral";
import NavBar from "./NavBar";
import { Outlet, Navigate } from "react-router-dom";
const LayoutDash = () => {
  return (
    <div id="wrapper">
      <BarraLateral></BarraLateral>
      <div id="content-wrapper" class="d-flex flex-column">
        <NavBar></NavBar>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default LayoutDash;

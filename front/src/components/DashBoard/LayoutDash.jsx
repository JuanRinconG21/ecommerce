import React, { useState } from "react";

import BarraLateral from "./BarraLateral";
import NavBar from "./NavBar";
import { Outlet, Navigate } from "react-router-dom";
import UseAuth from "../../helpers/UseAuth";
const LayoutDash = () => {
  const { Autenticado } = UseAuth();
  return (
    <div id="wrapper">
      <BarraLateral></BarraLateral>
      <div id="content-wrapper" class="d-flex flex-column">
        <NavBar></NavBar>
        {Autenticado.idEmpleado ? (
          <Outlet></Outlet>
        ) : (
          <Navigate to={"/"}></Navigate>
        )}
      </div>
    </div>
  );
};

export default LayoutDash;

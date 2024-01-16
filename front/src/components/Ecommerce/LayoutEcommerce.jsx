import React, { useState, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import UseAuth from "../../helpers/UseAuthEcommerce";
import NavBar from "./NavBar";

const LayoutEcommerce = () => {
  const { Autenticado } = UseAuth();
  return (
    <>
      <NavBar></NavBar>
      {Autenticado.idUsuario ? (
        <Outlet></Outlet>
      ) : (
        <Navigate to={"/"}></Navigate>
      )}
    </>
  );
};

export default LayoutEcommerce;

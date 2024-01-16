import React, { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import UseAuth from "../../helpers/UseAuthEcommerce";
const LayoutPublico = () => {
  const { Autenticado } = UseAuth();
  return (
    <>
      <div className="container-fluid">
        {!Autenticado.idUsuario ? (
          <Outlet></Outlet>
        ) : (
          <Navigate to={"/Ecommerce"}></Navigate>
        )}
      </div>
    </>
  );
};

export default LayoutPublico;

import React, { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import UseAuth from "../../helpers/UseAuth";
const LayoutEmpleado = () => {
  const { Autenticado } = UseAuth();
  return (
    <>
      <div className="container-fluid">
        {!Autenticado.idEmpleado ? (
          <Outlet></Outlet>
        ) : (
          <Navigate to={"/DashBoard"}></Navigate>
        )}
      </div>
    </>
  );
};

export default LayoutEmpleado;

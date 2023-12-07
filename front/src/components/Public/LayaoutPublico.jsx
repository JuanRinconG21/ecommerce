import React, { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
const LayoutPublico = () => {
  return (
    <>
      <div className="container-fluid">
        <Outlet> </Outlet>
      </div>
    </>
  );
};

export default LayoutPublico;

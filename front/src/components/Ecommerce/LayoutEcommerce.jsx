import React, { useState, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import NavBar from "./NavBar";

const LayoutEcommerce = () => {
  return (
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </>
  );
};

export default LayoutEcommerce;

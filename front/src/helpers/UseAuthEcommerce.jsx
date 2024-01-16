import React from "react";
import { useContext } from "react";
import AuthContext from "../context/AuthProviderEcommerce";

const UseAuthEcommerce = () => {
  return useContext(AuthContext);
};

export default UseAuthEcommerce;

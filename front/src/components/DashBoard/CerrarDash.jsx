import UseAuth from "../../helpers/UseAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CerrarDash = () => {
  const { setAutenticado } = UseAuth();
  const Navigate = useNavigate();
  useEffect(() => {
    localStorage.clear();
    setAutenticado({});
    Navigate("/LoginDash");
  });

  return (
    <>
      <h1>Cerrando sesion .....</h1>
    </>
  );
};

export default CerrarDash;

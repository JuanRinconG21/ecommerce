import UseAuthEcommerce from "../../helpers/UseAuthEcommerce";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Cerrar = () => {
  const { setAutenticado } = UseAuthEcommerce();
  const Navigate = useNavigate();
  useEffect(() => {
    localStorage.clear();
    setAutenticado({});
    Navigate("/");
  });

  return (
    <>
      <h1>Cerrando sesion .....</h1>
    </>
  );
};

export default Cerrar;

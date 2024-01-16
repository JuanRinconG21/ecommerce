import React, { useState } from "react";
import HelperForm from "../../helpers/HelperForm";
import Swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal2);
const AgregarMetodo = () => {
  const { form, cambiar } = HelperForm({});
  const token = localStorage.getItem("token");

  const Agregar = async (e) => {
    const inpitdes = document.querySelector("#Descripcion");
    e.preventDefault();
    let formulario = form;
    const request = await fetch("http://localhost:2100/metodos/Agregar", {
      method: "POST",
      body: JSON.stringify(formulario),
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    });
    const data = await request.json();
    if (data.id == 200) {
      let mensaje = data.mensaje;
      MySwal.fire({
        title: <strong> {"Felicidades"}</strong>,
        html: <i>{mensaje}</i>,
        icon: "success",
      });
      inpitdes.value = "";
    } else {
      let mensaje = data.mensaje;
      MySwal.fire({
        title: <strong> {"Error"}</strong>,
        html: <i>{mensaje}</i>,
        icon: "error",
      });
      inpitdes.value = "";
    }
  };
  return (
    <div className="container-fluid">
      <div className=" align-items-center">
        <h1 className="h3 mb-0 text-gray-800" style={{ textAlign: "center" }}>
          <b>Agregar Metodo de Pago</b>
        </h1>
      </div>

      <div className="row" style={{ marginTop: "3%" }}>
        <div className="col-2"></div>
        <div className="col-8">
          <form onSubmit={Agregar}>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Nombre del Metodo
              </label>
              <input
                type="text"
                class="form-control"
                id="Descripcion"
                name="Descripcion"
                aria-describedby="emailHelp"
                onChange={cambiar}
              />
            </div>
            <h1 className="text-center">
              <button type="submit" class="btn btn-primary">
                Agregar
              </button>
            </h1>
          </form>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
};

export default AgregarMetodo;

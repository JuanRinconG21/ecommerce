import React, { useState } from "react";
import HelperForm from "../../helpers/HelperForm";
import Swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal2);
const AgregarEmpleado = () => {
  const { form, cambiar } = HelperForm({});
  const token = localStorage.getItem("token");

  const Agregar = async (e) => {
    
    const inpitdes = document.querySelector("#idEmpleado");
    const inpitdes2 = document.querySelector("#Nombres");
    const inpitdes3 = document.querySelector("#Apellidos");
    const inpitdes4 = document.querySelector("#Telefono");
    const inpitdes5 = document.querySelector("#Direccion");
    const inpitdes6 = document.querySelector("#Correo");
    const inpitdes7 = document.querySelector("#Pass");
    e.preventDefault();
    let formulario = form;
    const request = await fetch("http://localhost:2100/empleado/Agregar", {
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
      inpitdes2.value = "";
      inpitdes3.value = "";
      inpitdes4.value = "";
      inpitdes5.value = "";
      inpitdes6.value = "";
      inpitdes7.value = "";
    } else {
      let mensaje = data.mensaje;
      MySwal.fire({
        title: <strong> {"Error"}</strong>,
        html: <i>{mensaje}</i>,
        icon: "error",
      });
      inpitdes.value = "";
      inpitdes2.value = "";
      inpitdes3.value = "";
      inpitdes4.value = "";
      inpitdes5.value = "";
      inpitdes6.value = "";
      inpitdes7.value = "";
    }
  };
  return (
    <div className="container-fluid">
      <div className=" align-items-center">
        <h1 className="h3 mb-0 text-gray-800" style={{ textAlign: "center" }}>
          <b>Agregar Empleado</b>
        </h1>
      </div>

      <div className="row" style={{ marginTop: "3%" }}>
        <div className="col-2"></div>
        <div className="col-8">
          <form onSubmit={Agregar}>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Identificacion del Empleado
              </label>
              <input
                type="number"
                className="form-control"
                id="idEmpleado"
                name="idEmpleado"
                aria-describedby="emailHelp"
                onChange={cambiar}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Nombres del Empleado
              </label>
              <input
                type="text"
                className="form-control"
                id="Nombres"
                name="Nombres"
                aria-describedby="emailHelp"
                onChange={cambiar}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Apellidos del Empleado
              </label>
              <input
                type="text"
                className="form-control"
                id="Apellidos"
                name="Apellidos"
                aria-describedby="emailHelp"
                onChange={cambiar}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Telefono del Empleado
              </label>
              <input
                type="number"
                className="form-control"
                id="Telefono"
                name="Telefono"
                aria-describedby="emailHelp"
                onChange={cambiar}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Direccion del Empleado
              </label>
              <input
                type="text"
                className="form-control"
                id="Direccion"
                name="Direccion"
                aria-describedby="emailHelp"
                onChange={cambiar}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Correo del Empleado
              </label>
              <input
                type="email"
                className="form-control"
                id="Correo"
                name="Correo"
                aria-describedby="emailHelp"
                onChange={cambiar}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Contraseña del Empleado
              </label>
              <input
                type="text"
                className="form-control"
                id="Pass"
                name="Pass"
                aria-describedby="emailHelp"
                onChange={cambiar}
              />
            </div>
            <h1 className="text-center mt-4">
              <button type="submit" className="btn btn-primary">
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

export default AgregarEmpleado;

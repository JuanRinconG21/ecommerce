import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import HelperForm from "../../helpers/HelperForm";
import Swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal2);

const Registro = () => {
  const { form, cambiar } = HelperForm({});
  const Registrar = async (e) => {
    e.preventDefault();
    let formulario = form;
    const request = await fetch("http://localhost:2100/usuarios/Agregar", {
      method: "POST",
      body: JSON.stringify(formulario),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await request.json();
    console.log(data);
    if (data.id == 200) {
      let mensaje = data.mensaje;
      MySwal.fire({
        title: <strong> {"Felicidades"} </strong>,
        html: <i>{mensaje}</i>,
        icon: "success",
      });
      setTimeout(() => {
        window.location = "./";
      }, 500);
    } else {
      const inputId = document.querySelector("#idUsuario");
      const inputNombre = document.querySelector("#Nombres");
      const inputApellido = document.querySelector("#Apellidos");
      const inputTelefono = document.querySelector("#Telefono");
      const inputDireccion = document.querySelector("#Direccion");
      const inputEmail = document.querySelector("#Correo");
      const inputPass = document.querySelector("#Pass");
      const inputCity = document.querySelector("#Ciudad");
      inputId.value = "";
      inputNombre.value = "";
      inputApellido.value = "";
      inputTelefono.value = "";
      inputDireccion.value = "";
      inputEmail.value = "";
      inputPass.value = "";
      inputCity.value = "";
      let mensaje = data.mensaje;
      MySwal.fire({
        title: <strong> {"Error"}</strong>,
        html: <i>{mensaje}</i>,
        icon: "error",
      });
    }
  };
  return (
    <div className="container-fluid" style={{ marginTop: "5%" }}>
      <div className="container">
        <div className="card o-hidden border-0 shadow-lg my-5">
          <div className="card-body p-0">
            <div className="row">
              <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
              <div className="col-lg-7">
                <div className="p-5">
                  <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">
                      Crea una Cuenta! <br />
                      Para Iniciar a Comprar
                    </h1>
                  </div>
                  <form className="user" onSubmit={Registrar}>
                    <div className="form-group">
                      <input
                        type="number"
                        className="form-control form-control-user idUsuario"
                        id="idUsuario"
                        name="idUsuario"
                        placeholder="Identificacion"
                        onChange={cambiar}
                      />
                    </div>
                    <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <input
                          type="text"
                          className="form-control form-control-user Nombres"
                          id="Nombres"
                          name="Nombres"
                          placeholder="Nombre/s"
                          onChange={cambiar}
                        />
                      </div>
                      <div className="col-sm-6">
                        <input
                          type="text"
                          className="form-control form-control-user Apellidos"
                          id="Apellidos"
                          name="Apellidos"
                          placeholder="Apellido/s"
                          onChange={cambiar}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <input
                          type="number"
                          className="form-control form-control-user Telefono"
                          id="Telefono"
                          name="Telefono"
                          placeholder="Telefono"
                          onChange={cambiar}
                        />
                      </div>
                      <div className="col-sm-6">
                        <input
                          type="text"
                          className="form-control form-control-user Direccion"
                          id="Direccion"
                          name="Direccion"
                          placeholder="Direccion"
                          onChange={cambiar}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control form-control-user Correo"
                        name="Ciudad"
                        id="Ciudad"
                        placeholder="Ciudad"
                        onChange={cambiar}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control form-control-user Correo"
                        name="Correo"
                        id="Correo"
                        placeholder="Correo Electronico"
                        onChange={cambiar}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control form-control-user Pass"
                        id="Pass"
                        name="Pass"
                        placeholder="Contraseña"
                        onChange={cambiar}
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary btn-user btn-block"
                    >
                      Registrar
                    </button>
                  </form>
                  <hr />
                  <NavLink to="/">
                    <div className="text-center">
                      <button className="btn btn-primary btn-user btn-block">
                        ¿Ya tienes Cuenta? Logueate
                      </button>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registro;

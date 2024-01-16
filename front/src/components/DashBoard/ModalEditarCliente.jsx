import Modal from "react-bootstrap/Modal";
import React, { Component, useState } from "react";
import HelperForm from "../../helpers/HelperForm";
import Swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal2);
const ModalEditarCliente = ({
  show,
  handleClose,
  id,
  nombre,
  apellido,
  telefono,
  direccion,
  correo,
  setEditar,
  Listar,
}) => {
  const { form, cambiar } = HelperForm({});
  const token = localStorage.getItem("token");
  const Editar = async (e) => {
    const inpitdes2 = document.querySelector("#Nombres");
    const inpitdes3 = document.querySelector("#Apellidos");
    const inpitdes4 = document.querySelector("#Telefono");
    const inpitdes5 = document.querySelector("#Direccion");
    const inpitdes6 = document.querySelector("#Correo");
    const inpitdes7 = document.querySelector("#Pass");
    e.preventDefault();
    let formulario = form;
    const request = await fetch(`http://localhost:2100/usuarios/Editar/${id}`, {
      method: "PUT",
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
      setEditar(0);
      Listar();
    } else {
      let mensaje = data.mensaje;
      MySwal.fire({
        title: <strong> {"Error"}</strong>,
        html: <i>{mensaje}</i>,
        icon: "error",
      });
      inpitdes2.value = "";
      inpitdes3.value = "";
      inpitdes4.value = "";
      inpitdes5.value = "";
      inpitdes6.value = "";
      inpitdes7.value = "";
    }
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <form onSubmit={Editar}>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Nombres del Cliente
              </label>
              <input
                type="text"
                className="form-control"
                id="Nombres"
                name="Nombres"
                aria-describedby="emailHelp"
                onChange={cambiar}
                defaultValue={nombre}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Apellidos del Cliente
              </label>
              <input
                type="text"
                className="form-control"
                id="Apellidos"
                name="Apellidos"
                aria-describedby="emailHelp"
                onChange={cambiar}
                defaultValue={apellido}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Telefono del Cliente
              </label>
              <input
                type="number"
                className="form-control"
                id="Telefono"
                name="Telefono"
                aria-describedby="emailHelp"
                onChange={cambiar}
                defaultValue={telefono}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Direccion del Cliente
              </label>
              <input
                type="text"
                className="form-control"
                id="Direccion"
                name="Direccion"
                aria-describedby="emailHelp"
                onChange={cambiar}
                defaultValue={direccion}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Correo del Cliente
              </label>
              <input
                type="email"
                className="form-control"
                id="Correo"
                name="Correo"
                aria-describedby="emailHelp"
                onChange={cambiar}
                defaultValue={correo}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Contraseña del Cliente
              </label>
              <input
                type="text"
                className="form-control"
                id="Pass"
                name="Pass"
                aria-describedby="emailHelp"
                onChange={cambiar}
                required
              />
            </div>
            <h1 className="text-center mt-4">
              <button type="submit" className="btn btn-primary">
                Agregar
              </button>
            </h1>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalEditarCliente;

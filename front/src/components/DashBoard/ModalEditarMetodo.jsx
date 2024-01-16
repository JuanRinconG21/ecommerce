import Modal from "react-bootstrap/Modal";
import React, { Component, useState } from "react";
import HelperForm from "../../helpers/HelperForm";
import Swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal2);
const ModalEditarMetodo = ({
  show,
  handleClose,
  id,
  metodo,
  setEditar,
  ListarMetodo,
}) => {
  const { form, cambiar } = HelperForm({});
  const token = localStorage.getItem("token");
  const Editar = async (e) => {
    const inpitdes = document.querySelector("#Descripcion");
    e.preventDefault();
    let formulario = form;
    const request = await fetch(`http://localhost:2100/metodos/Editar/${id}`, {
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
      inpitdes.value = "";
      setEditar(0);
      ListarMetodo();
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
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <form onSubmit={Editar}>
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
                defaultValue={metodo}
              />
            </div>
            <h1 className="text-center">
              <button type="submit" class="btn btn-primary">
                Agregar
              </button>
            </h1>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalEditarMetodo;

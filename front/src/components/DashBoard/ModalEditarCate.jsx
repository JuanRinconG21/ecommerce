import Modal from "react-bootstrap/Modal";
import React, { Component, useState } from "react";
import HelperForm from "../../helpers/HelperForm";
import Swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal2);
const ModalEditarCate = ({ show, handleClose, id, categoria }) => {


    edita
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <form onSubmit={Agregar}>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Nombre de la Categoria
              </label>
              <input
                type="text"
                class="form-control"
                id="DescripcionCategoria"
                name="DescripcionCategoria"
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
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalEditarCate;

import Modal from "react-bootstrap/Modal";
import React, { Component, useState, useEffect } from "react";
import HelperForm from "../../helpers/HelperForm";
import Swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal2);
const ModalEditarProducto = ({
  show,
  handleClose,
  id,
  nombre,
  marca,
  precio,
  cantidad,
  descripcion,
  setEditar,
  ListarMetodo,
}) => {
  const [datos, Setdatos] = useState([]);
  const token = localStorage.getItem("token");
  const Listar = async (e) => {
    const request = await fetch("http://localhost:2100/categorias/listar", {
      method: "GET",
      headers: {
        Authorization: `${token}`,
      },
    });

    const data = await request.json();
    console.log(data);
    Setdatos(data.mensaje);
  };
  //USE EFECT NO CICLO INFINITO
  useEffect(() => {
    Listar();
  }, []);
  const Editar = async (e) => {
    e.preventDefault();
    let Nombre = document.querySelector("#Nombre");
    let Marca = document.querySelector("#Marca");
    let Precio = document.querySelector("#Precio");
    let Cantidad = document.querySelector("#Cantidad");
    let Descripcion = document.querySelector("#Descripcion");
    let idCategoria = document.querySelector("#idCategoria");
    let Imagen1 = document.querySelector("#Imagen1");
    if (
      Nombre.value.length > 0 &&
      Marca.value.length > 0 &&
      Precio.value.length > 0 &&
      Cantidad.value.length > 0 &&
      Descripcion.value.length > 0 &&
      idCategoria.value.length > 0 &&
      Imagen1.files[0] !== undefined
    ) {
      const formData = new FormData();
      formData.append("Nombre", Nombre.value);
      formData.append("Marca", Marca.value);
      formData.append("Precio", Precio.value);
      formData.append("Cantidad", Cantidad.value);
      formData.append("Descripcion", Descripcion.value);
      formData.append("idCategoria", idCategoria.value);
      formData.append("Imagen1", Imagen1.files[0]);
      fetch("http://localhost:2100/productos/Editar/" + id, {
        method: "PUT",
        body: formData,
        headers: {
          Authorization: `${token}`,
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((res) => {
          if (res.id == 200) {
            MySwal.fire({
              title: <strong> {"Felicitaciones"}</strong>,
              html: <i>{res.mensaje}</i>,
              icon: "success",
            });
            Nombre.value = "";
            Marca.value = "";
            Precio.value = "";
            Cantidad.value = "";
            Descripcion.value = "";
            setEditar(0);
            ListarMetodo();
          } else {
            MySwal.fire({
              title: <strong> {"Error"}</strong>,
              html: <i>{res.mensaje}</i>,
              icon: "error",
            });
          }
        });
    } else {
      MySwal.fire({
        title: <strong> {"Error"}</strong>,
        html: <i>{"No deje Campos Vacios"}</i>,
        icon: "error",
      });
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
                Nombre del Producto
              </label>
              <input
                type="text"
                className="form-control"
                id="Nombre"
                name="Nombre"
                aria-describedby="emailHelp"
                defaultValue={nombre}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Marca del Producto
              </label>
              <input
                type="text"
                className="form-control"
                id="Marca"
                name="Marca"
                aria-describedby="emailHelp"
                defaultValue={marca}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Precio del Producto
              </label>
              <input
                type="number"
                className="form-control"
                id="Precio"
                name="Precio"
                aria-describedby="emailHelp"
                defaultValue={precio}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Stock Actual
              </label>
              <input
                type="number"
                className="form-control"
                id="Cantidad"
                name="Cantidad"
                aria-describedby="emailHelp"
                defaultValue={cantidad}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Descripcion del Producto
              </label>
              <textarea
                className="form-control"
                id="Descripcion"
                name="Descripcion"
                style={{ height: "100px" }}
              >
                {descripcion}
              </textarea>
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Categoria del Producto
              </label>
              <select
                className="form-control"
                aria-label="Default select example"
                name="idCategoria"
                id="idCategoria"
              >
                {datos.map((dato) => {
                  return (
                    <option value={dato.idCategoria}>
                      {dato.DescripcionCategoria}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Imagen del Producto
              </label>
              <input
                type="file"
                className="form-control"
                id="Imagen1"
                name="Imagen1"
                style={{ paddingBottom: "4.3%" }}
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

export default ModalEditarProducto;

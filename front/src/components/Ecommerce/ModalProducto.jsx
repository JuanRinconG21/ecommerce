import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { NavLink } from "react-router-dom";

const ModalProducto = ({ show2, handleClose2, id, props }) => {
  const token = localStorage.getItem("token2");
  const [productos, setProductos] = useState([]);

  const listarProductos = async () => {
    const request = await fetch(
      `http://localhost:2100/productos/listarUno/${id}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: `${token}`,
        },
      }
    );
    const data = await request.json();

    setProductos(data.mensaje);
  };

  useEffect(() => {
    listarProductos();
  }, []);

  return (
    <>
      <Modal
        {...props}
        show={show2}
        onHide={handleClose2}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          {productos.map((producto) => {
            return (
              <div className="d-flex" key={producto.id}>
                <div className="flex-shrink-0">
                  <img src={producto.Imagen1} alt="..." width="300px" />
                </div>
                <div className="flex-grow-1 ms-3 d-flex flex-column justify-content-between">
                  <div>
                    <h3>{producto.Nombre}</h3>
                    <h4>{producto.Marca}</h4>
                    <p className="mt-3">{producto.Descripcion}</p>
                    <p>$ {producto.Precio}</p>
                    <p className="">Cantidad:</p>
                    <div
                      className="input-group mb-3 d-flex align-items-center quantity-container"
                      style={{ maxWidth: "120px" }}
                    >
                      <div className="input-group-prepend">
                        <button
                          className="btn btn-outline-black decrease"
                          type="button"
                        >
                          -
                        </button>
                      </div>
                      <input
                        type="text"
                        className="form-control text-center quantity-amount"
                        value="1"
                        placeholder=""
                        aria-label="Example text with button addon"
                        aria-describedby="button-addon1"
                      />
                      <div className="input-group-append">
                        <button
                          className="btn btn-outline-black increase"
                          type="button"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <NavLink to="Carrito" className="">
                    <button href="#" className="btn btn-dark w-100 mt-auto">
                      Agregar al carrito
                    </button>
                  </NavLink>
                </div>
              </div>
            );
          })}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalProducto;

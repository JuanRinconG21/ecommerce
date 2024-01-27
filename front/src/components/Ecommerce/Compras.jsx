import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { IoIosEye } from "react-icons/io";

const Compras = () => {
  const [show2, setShow2] = useState(false);
  const token = localStorage.getItem("token2");
  const [encabezados, setEncabezados] = useState([]);
  const [detalle, setDetalle] = useState([]);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const datosUser = localStorage.getItem("user2");
  const datosParseados = JSON.parse(datosUser);
  const formatearPrecio = (precio) => {
    return precio.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };
  const listarProductos = async () => {
    const request = await fetch(
      `http://localhost:2100/encabezado/listarEncabezadoUser/${datosParseados.idUsuario}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: `${token}`,
        },
      }
    );
    const data = await request.json();
    //console.log(data);
    setEncabezados([]);
    setEncabezados(data.mensaje);
    //console.log(encabezados);
  };
  const listarProductosDetalle = async (id) => {
    const request = await fetch(
      `http://localhost:2100/detalle/listarDetalleEnca/${id}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: `${token}`,
        },
      }
    );
    const data = await request.json();
    //console.log(data);
    setDetalle([]);
    setDetalle(data.mensaje);
    console.log("EL DETALLE", detalle);
  };
  useEffect(() => {
    listarProductos();
  }, []);
  return (
    <>
      <Modal
        show={show2}
        onHide={handleClose2}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>Productos</Modal.Header>
        <Modal.Body>
          <div className="site-blocks-table">
            <table className="table table-borderless table-bordered">
              <thead>
                <tr style={{ textAlign: "center" }}>
                  <th>ID Producto</th>
                  <th>Producto</th>
                  <th>Imagen</th>
                  <th>Cantidad</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {detalle.map((detalle2) => {
                  return (
                    <tr
                      style={{ textAlign: "center" }}
                      key={detalle2.idProducto}
                    >
                      <td className="align-middle">
                        <p className="mb-0">{detalle2.idProducto}</p>
                      </td>
                      <td className="align-middle">
                        <p className="mb-0">{detalle2.Nombre}</p>
                      </td>
                      <td className="align-middle">
                        <img
                          src={detalle2.Imagen1}
                          style={{
                            maxWidth: "40%",
                          }}
                        />
                      </td>
                      <td className="align-middle">
                        <p className="mb-0">{detalle2.Cantidad}</p>
                      </td>
                      <td className="align-middle">
                        <p className="mb-0">
                          ${formatearPrecio(detalle2.Totalprod)}
                        </p>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Modal.Body>
      </Modal>
      <section className="container py-5">
        <div className="row  pt-5 pb-3">
          <div className="col-lg-6">
            <h1 className="h1 text-start">Tus Compras</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="site-blocks-table">
              <table className="table table-borderless table-bordered">
                <thead style={{ textAlign: "center" }}>
                  <tr>
                    <th>ID Factura</th>
                    <th>Fecha de Compra</th>
                    <th>Total</th>
                    <th>Estado de Compra</th>
                    <th>Metodo de Pago</th>
                    <th>Productos</th>
                  </tr>
                </thead>
                <tbody style={{ textAlign: "center" }}>
                  {encabezados.map((encabezado) => {
                    return (
                      <tr key={encabezado.idEncabezado}>
                        <td className="align-middle">
                          <p className="mb-0">{encabezado.idEncabezado}</p>
                        </td>
                        <td className="align-middle">
                          <p className="mb-0">{encabezado.FechayHora}</p>
                        </td>
                        <td className="align-middle">
                          <p className="mb-0" style={{ fontSize: "1px" }}>
                            $ {formatearPrecio(encabezado.Total)}
                          </p>
                        </td>
                        <td className="align-middle">
                          <p className="mb-0">
                            {encabezado.idEstado === 0
                              ? "Pendiente"
                              : encabezado.idEstado === 1
                              ? "Enviado"
                              : "Cancelado"}
                          </p>
                        </td>
                        <td className="align-middle">
                          <p className="mb-0">{encabezado.MetodoPago}</p>
                        </td>
                        <td className="align-middle">
                          <button
                            className="btn btn-success"
                            onClick={() => {
                              listarProductosDetalle(encabezado.idEncabezado);
                              handleShow2();
                            }}
                          >
                            <IoIosEye />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-dark" id="tempaltemo_footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4 pt-5">
              <h2 className="h2 text-success border-bottom pb-3 border-light logo">
                GameSoft
              </h2>
              <ul className="list-unstyled text-light footer-link-list">
                <li>
                  <i className="fas fa-map-marker-alt fa-fw"></i>
                  Cartago, Valle del Cauca, Colombia
                </li>
                <li>
                  <i className="fa fa-phone fa-fw"></i>
                  <a className="text-decoration-none" href="tel:010-020-0340">
                    3234681033
                  </a>
                </li>
                <li>
                  <i className="fa fa-envelope fa-fw"></i>
                  <a
                    className="text-decoration-none"
                    href="mailto:info@company.com"
                  >
                    gamesoft@game.com
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-4 pt-5">
              <h2 className="h2 text-success border-bottom pb-3 border-light logo">
                Productos
              </h2>

              <ul className="list-unstyled text-light footer-link-list">
                <li>
                  <NavLink to="/Ecommerce/Productos">
                    <a className="text-decoration-none" href="#">
                      Consolas
                    </a>
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/Ecommerce/Productos">
                    <a className="text-decoration-none" href="#">
                      VideoJuegos
                    </a>
                  </NavLink>
                </li>
                <NavLink to="/Ecommerce/Productos">
                  <li>
                    <a className="text-decoration-none" href="#">
                      Accesorios
                    </a>
                  </li>
                </NavLink>
                <NavLink to="/Ecommerce/Productos">
                  <li>
                    <a className="text-decoration-none" href="#">
                      Licencias
                    </a>
                  </li>
                </NavLink>
                <li>
                  <NavLink to="/Ecommerce/Productos">
                    <a className="text-decoration-none" href="#">
                      Perifericos
                    </a>
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="col-md-4 pt-5">
              <h2 className="h2 text-success border-bottom pb-3 border-light logo">
                Estructura del Sitio
              </h2>
              <ul className="list-unstyled text-light footer-link-list">
                <li>
                  <NavLink to="/Ecommerce">
                    <a className="text-decoration-none" href="#">
                      Inicio
                    </a>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Ecommerce/Productos">
                    <a className="text-decoration-none" href="#">
                      Productos
                    </a>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Ecommerce/Productos">
                    <a className="text-decoration-none" href="#">
                      Sobre Nostros
                    </a>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          <div className="row text-light mb-4">
            <div className="col-12 mb-3">
              <div className="w-100 my-3 border-top border-light"></div>
            </div>
            <div className="col-auto me-auto">
              <ul className="list-inline text-left footer-icons">
                <li className="list-inline-item border border-light rounded-circle text-center">
                  <a
                    className="text-light text-decoration-none"
                    href="http://facebook.com/"
                  >
                    <i className="fab fa-facebook-f fa-lg fa-fw"></i>
                  </a>
                </li>
                <li className="list-inline-item border border-light rounded-circle text-center">
                  <a
                    className="text-light text-decoration-none"
                    href="https://www.instagram.com/"
                  >
                    <i className="fab fa-instagram fa-lg fa-fw"></i>
                  </a>
                </li>
                <li className="list-inline-item border border-light rounded-circle text-center">
                  <a
                    className="text-light text-decoration-none"
                    href="https://twitter.com/"
                  >
                    <i className="fab fa-twitter fa-lg fa-fw"></i>
                  </a>
                </li>
                <li className="list-inline-item border border-light rounded-circle text-center">
                  <a
                    className="text-light text-decoration-none"
                    href="https://www.linkedin.com/"
                  >
                    <i className="fab fa-linkedin fa-lg fa-fw"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-auto"></div>
          </div>
        </div>

        <div className="w-100 bg-black py-3">
          <div className="container">
            <div className="row pt-2">
              <div className="col-12">
                <p className="text-left text-light">
                  Copyright &copy; 2024 GameSoft | Designed by
                  <a rel="sponsored" href="https://templatemo.com">
                    Juan Granada & Jota Rincon
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Compras;

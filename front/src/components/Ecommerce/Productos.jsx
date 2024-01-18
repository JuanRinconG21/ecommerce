import React, { useState, useEffect } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { IoIosCloseCircle } from "react-icons/io";
import ModalProducto from "./ModalProducto";

const Productos = () => {
  const [categorias, setCategorias] = useState([]);
  const [productos, setProductos] = useState([]);
  const [modal, setModal] = useState(null);

  const token = localStorage.getItem("token2");

  const listarProductosCategoria = async ({ idCategoria }) => {
    const request = await fetch(
      `http://localhost:2100/productos/listarCategoria/${idCategoria}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: `${token}`,
        },
      }
    );
    const data = await request.json();
    console.log(data);
    setProductos(data.mensaje);
  };

  const listarProductos = async () => {
    const request = await fetch("http://localhost:2100/productos/listarNo", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `${token}`,
      },
    });
    const data = await request.json();
    //console.log(data);
    setProductos(data.mensaje);
  };

  const listarCategorias = async () => {
    const request = await fetch("http://localhost:2100/categorias/listar", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `${token}`,
      },
    });
    const data = await request.json();
    //console.log(data);
    setCategorias(data.mensaje);
  };

  useEffect(() => {
    listarCategorias();
  }, []);

  useEffect(() => {
    listarProductos();
  }, []);

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  return (
    <>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Carrito de compras</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="fixed-body">
          <div className="d-flex">
            <div className="p-2 flex-fill">
              <img
                width="100px"
                className=""
                src="https://websitedemos.net/egrow-plants-04/wp-content/uploads/sites/1114/2022/07/flower-008-a-400x550.jpg"
                alt=""
                style={{ borderRadius: "5px" }}
              />
            </div>
            <div className="p-2 flex-fill">
              <p>Camiseta</p>
              <p>$ 120.000</p>
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
            <div className="p-2 flex-fill align-self-center">
              <IoIosCloseCircle />
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      <div
        className="modal fade bg-white"
        id="templatemo_search"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="w-100 pt-1 mb-5 text-right">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form
            action=""
            method="get"
            className="modal-content modal-body border-0 p-0"
          >
            <div className="input-group mb-2">
              <input
                type="text"
                className="form-control"
                id="inputModalSearch"
                name="q"
                placeholder="Search ..."
              />
              <button
                type="submit"
                className="input-group-text bg-success text-light"
              >
                <i className="fa fa-fw fa-search text-white"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-3">
            <h1 className="h2 pb-2">Categorias</h1>
            <ul className="shop-top-menu pb-3">
              {categorias.map((categoria) => {
                return (
                  <>
                    <li>
                      <button className="h3 text-dark text-decoration-none mr-3">
                        {categoria.DescripcionCategoria}
                      </button>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>

          <div className="col-lg-9">
            <div className="row">
              <div className="col-md-6"></div>
              <div className="col-md-6 pb-4">
                <div className="d-flex">
                  <select className="form-control">
                    <option>Featured</option>
                    <option>A to Z</option>
                    <option>Item</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              {productos.map((producto) => {
                return (
                  <>
                    <div className="col-md-4">
                      <div className="card mb-4 product-wap rounded-0">
                        <div className="card rounded-0">
                          <img
                            className="card-img rounded-0 img-fluid"
                            src={producto.Imagen1}
                          />
                          <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                            <ul className="list-unstyled">
                              <li>
                                <a
                                  className="btn btn-success text-white mt-2"
                                  onClick={() => {
                                    setModal(producto.idProducto);
                                    handleShow2();
                                  }}
                                >
                                  {modal == producto.idProducto && (
                                    <ModalProducto
                                      show2={show2}
                                      handleClose2={handleClose2}
                                      id={producto.idProducto}
                                    ></ModalProducto>
                                  )}

                                  <i className="far fa-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  className="btn btn-success text-white mt-2"
                                  onClick={handleShow}
                                >
                                  <i className="fas fa-cart-plus"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="card-body">
                          <a className="h3 text-decoration-none d-flex justify-content-center">
                            {producto.Nombre}
                          </a>
                          <ul className="w-100 list-unstyled d-flex justify-content-center mb-0">
                            <li>{producto.Marca}</li>
                          </ul>
                          <ul className="list-unstyled d-flex justify-content-center mb-1">
                            <li>
                              <i className="text-warning fa fa-star"></i>
                              <i className="text-warning fa fa-star"></i>
                              <i className="text-warning fa fa-star"></i>
                              <i className="text-warning fa fa-star"></i>
                              <i className="text-muted fa fa-star"></i>
                            </li>
                          </ul>
                          <p className="text-center mb-0">
                            $ {producto.Precio}
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <div div="row">
              <ul className="pagination pagination-lg justify-content-end">
                <li className="page-item disabled">
                  <a
                    className="page-link active rounded-0 mr-3 shadow-sm border-top-0 border-left-0"
                    href="#"
                    tabindex="-1"
                  >
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a
                    className="page-link rounded-0 mr-3 shadow-sm border-top-0 border-left-0 text-dark"
                    href="#"
                  >
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a
                    className="page-link rounded-0 shadow-sm border-top-0 border-left-0 text-dark"
                    href="#"
                  >
                    3
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-dark" id="tempaltemo_footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4 pt-5">
              <h2 className="h2 text-success border-bottom pb-3 border-light logo">
                Zay Shop
              </h2>
              <ul className="list-unstyled text-light footer-link-list">
                <li>
                  <i className="fas fa-map-marker-alt fa-fw"></i>
                  123 Consectetur at ligula 10660
                </li>
                <li>
                  <i className="fa fa-phone fa-fw"></i>
                  <a className="text-decoration-none" href="tel:010-020-0340">
                    010-020-0340
                  </a>
                </li>
                <li>
                  <i className="fa fa-envelope fa-fw"></i>
                  <a
                    className="text-decoration-none"
                    href="mailto:info@company.com"
                  >
                    info@company.com
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-4 pt-5">
              <h2 className="h2 text-light border-bottom pb-3 border-light">
                Products
              </h2>
              <ul className="list-unstyled text-light footer-link-list">
                <li>
                  <a className="text-decoration-none" href="#">
                    Luxury
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none" href="#">
                    Sport Wear
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none" href="#">
                    Men's Shoes
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none" href="#">
                    Women's Shoes
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none" href="#">
                    Popular Dress
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none" href="#">
                    Gym Accessories
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none" href="#">
                    Sport Shoes
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-4 pt-5">
              <h2 className="h2 text-light border-bottom pb-3 border-light">
                Further Info
              </h2>
              <ul className="list-unstyled text-light footer-link-list">
                <li>
                  <a className="text-decoration-none" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none" href="#">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none" href="#">
                    Shop Locations
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none" href="#">
                    FAQs
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none" href="#">
                    Contact
                  </a>
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
                    target="_blank"
                    href="http://facebook.com/"
                  >
                    <i className="fab fa-facebook-f fa-lg fa-fw"></i>
                  </a>
                </li>
                <li className="list-inline-item border border-light rounded-circle text-center">
                  <a
                    className="text-light text-decoration-none"
                    target="_blank"
                    href="https://www.instagram.com/"
                  >
                    <i className="fab fa-instagram fa-lg fa-fw"></i>
                  </a>
                </li>
                <li className="list-inline-item border border-light rounded-circle text-center">
                  <a
                    className="text-light text-decoration-none"
                    target="_blank"
                    href="https://twitter.com/"
                  >
                    <i className="fab fa-twitter fa-lg fa-fw"></i>
                  </a>
                </li>
                <li className="list-inline-item border border-light rounded-circle text-center">
                  <a
                    className="text-light text-decoration-none"
                    target="_blank"
                    href="https://www.linkedin.com/"
                  >
                    <i className="fab fa-linkedin fa-lg fa-fw"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-auto">
              <label className="sr-only" for="subscribeEmail">
                Email address
              </label>
              <div className="input-group mb-2">
                <input
                  type="text"
                  className="form-control bg-dark border-light"
                  id="subscribeEmail"
                  placeholder="Email address"
                />
                <div className="input-group-text btn-success text-light">
                  Subscribe
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-100 bg-black py-3">
          <div className="container">
            <div className="row pt-2">
              <div className="col-12">
                <p className="text-left text-light">
                  Copyright &copy; 2021 Company Name | Designed by{" "}
                  <a
                    rel="sponsored"
                    href="https://templatemo.com"
                    target="_blank"
                  >
                    TemplateMo
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

export default Productos;

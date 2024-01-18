import React, { useState, useEffect } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";
import { IoIosCloseCircle } from "react-icons/io";

const NavBar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };
  return (
    <>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Carrito de compras</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="fixed-body">
          <div class="d-flex">
            <div class="p-2 flex-fill">
              <img
                width="100px"
                className=""
                src="https://websitedemos.net/egrow-plants-04/wp-content/uploads/sites/1114/2022/07/flower-008-a-400x550.jpg"
                alt=""
                style={{ borderRadius: "5px" }}
              />
            </div>
            <div class="p-2 flex-fill">
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
            <div class="p-2 flex-fill align-self-center">
              <IoIosCloseCircle />
            </div>
          </div>
          <div class="d-flex">
            <div class="p-2">Total:</div>
            <div class="ms-auto p-2">$ 120.000</div>
          </div>
          <NavLink to="/Ecommerce/Pasarela" className="">
            <button
              href="#"
              class="btn btn-success w-100 mt-4"
              closeButton
              onClick={handleClose}
            >
              Pagar ahora
            </button>
          </NavLink>
          <NavLink to="Carrito" className="">
            <button
              href="#"
              class="btn btn-dark w-100 mt-3"
              closeButton
              onClick={handleClose}
            >
              ver carrito
            </button>
          </NavLink>
        </Offcanvas.Body>
      </Offcanvas>
      <nav className="navbar navbar-expand-lg navbar-light shadow">
        <div className="container d-flex justify-content-between align-items-center">
          <NavLink to="/Ecommerce" className="nav-link">
            <a className="navbar-brand logo h1 align-self-center" id="logoT">
              GameSoft
            </a>
          </NavLink>

          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#templatemo_main_nav"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="align-self-center collapse navbar-collapse flex-fill d-lg-flex justify-content-lg-between"
            id="templatemo_main_nav"
          >
            <div className="flex-fill">
              <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                <li className="nav-item">
                  <NavLink to="/Ecommerce" className="nav-link">
                    <a className="nav-link">Inicio</a>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="Productos" className="nav-link">
                    <a className="nav-link">Productos</a>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="SobreNosotros" className="nav-link">
                    <a className="nav-link">Sobre Nosotros</a>
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="navbar align-self-center d-flex">
              <div className="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    id="inputMobileSearch"
                    placeholder="Search ..."
                  />
                  <div className="input-group-text">
                    <i className="fa fa-fw fa-search"></i>
                  </div>
                </div>
              </div>
              <a
                className="nav-icon d-none d-lg-inline"
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#templatemo_search"
              >
                <i className="fa fa-fw fa-search text-dark mr-2"></i>
              </a>
              <a
                className="nav-icon position-relative text-decoration-none"
                onClick={handleShow}
              >
                <i className="fa fa-fw fa-cart-arrow-down text-dark mr-1"></i>
                <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark"></span>
              </a>
              <a className="nav-icon position-relative text-decoration-none">
                <i className="fa fa-fw fa-user text-dark mr-3"></i>
                <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark"></span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;

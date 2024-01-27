import React, { useState, useEffect } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink, Navigate } from "react-router-dom";
import { IoIosCloseCircle } from "react-icons/io";
import Swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal2);
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const Navigate = useNavigate();

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };
  ///INICIO CARRITO
  ///INICIO CARRITO
  ///INICIO CARRITO
  ///INICIO CARRITO
  ///INICIO CARRITO
  const [productosCarrito, setProductosCarrito] = useState([]);
  const [total, setTotal] = useState(0);

  const cerrar = () => {
    MySwal.fire({
      title: "Quieres Cerrar Sesión?",
      text: "Estas seguro?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si",
    }).then((result) => {
      if (result.isConfirmed) {
        MySwal.fire({
          title: "Cerrando Sesión",
          text: "Vuelve pronto",
          icon: "success",
        });
        Navigate("Cerrar");
      }
    });
  };

  const verCarro = () => {
    const productosGuardados =
      JSON.parse(localStorage.getItem("productos")) || [];
    setProductosCarrito(productosGuardados);
    let total2 = productosGuardados.reduce(
      (total, producto) => total + producto.precio * producto.cantidad,
      0
    );
    setTotal(total2);
    //console.log(total2);
  };

  const formatearPrecio = (precio) => {
    return precio.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const handleEliminarDelLocalStorage = (productoId) => {
    // Obtener la lista de productos desde el localStorage
    const productosGuardados =
      JSON.parse(localStorage.getItem("productos")) || [];

    // Filtrar la lista para excluir el producto con el ID específico
    const nuevaLista = productosGuardados.filter(
      (producto) => producto.id !== productoId
    );
    //console.log(nuevaLista);
    // Actualizar el localStorage con la nueva lista
    localStorage.setItem("productos", JSON.stringify(nuevaLista));

    // Actualizar el estado del componente con la nueva lista
    setProductosCarrito([]);
    setProductosCarrito(nuevaLista);
    verCarro();
  };
  ///FIN CARRITO
  ///FIN CARRITO
  ///FIN CARRITO
  ///FIN CARRITO
  ///FIN CARRITO
  return (
    <>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Carrito de compras</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="fixed-body">
          {productosCarrito.length > 0 ? (
            productosCarrito.map((producto) => {
              return (
                <div className="d-flex" key={producto.id}>
                  <div className="p-2 flex-fill">
                    <img
                      width="100px"
                      className=""
                      src={producto.imagen}
                      alt=""
                      style={{ borderRadius: "5px" }}
                    />
                  </div>
                  <div className="p-2 pt-5 flex-fill">
                    <p>{producto.nombre}</p>
                    <p>$ {formatearPrecio(producto.precio)}</p>
                  </div>
                  <div className="p-2 flex-fill align-self-center">
                    <a
                      onClick={() => {
                        handleEliminarDelLocalStorage(producto.id);
                      }}
                    >
                      <IoIosCloseCircle />
                    </a>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="" style={{ textAlign: "center" }}>
              <div className="p-2">No Hay Productos En El Carrito</div>
            </div>
          )}
          <div className="d-flex">
            <div className="p-2">Total:</div>
            <div className="ms-auto p-2">$ {formatearPrecio(total)}</div>
          </div>
          {productosCarrito.length > 0 ? (
            <>
              <NavLink to="/Ecommerce/Pasarela" className="">
                <button
                  href="#"
                  className="btn btn-success w-100 mt-4"
                  onClick={handleClose}
                >
                  Pagar ahora
                </button>
              </NavLink>
              <NavLink to="Carrito" className="">
                <button
                  href="#"
                  className="btn btn-dark w-100 mt-3"
                  onClick={handleClose}
                >
                  Ver carrito
                </button>
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="Productos" className="">
                <button
                  href="#"
                  className="btn btn-success w-100 mt-4"
                  onClick={handleClose}
                >
                  Agregar Productos
                </button>
              </NavLink>
            </>
          )}
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
                <li className="nav-item">
                  <NavLink to="Compras" className="nav-link">
                    <a className="nav-link">Compras</a>
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
                onClick={() => {
                  verCarro();
                  handleShow();
                }}
              >
                <i className="fa fa-fw fa-cart-arrow-down text-dark mr-1"></i>
                <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark"></span>
              </a>
              <a
                onClick={() => {
                  cerrar();
                }}
                className="nav-icon position-relative text-decoration-none"
              >
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

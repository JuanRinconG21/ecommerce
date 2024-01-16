import React, { useState, useEffect } from "react";
import HelperForm from "../../helpers/HelperForm";

const PasarelaPago = () => {
  const { form, cambiar } = HelperForm({});
  return (
    <>
      <section className="container py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-7">
              <h1 className="h1 text-start">Datos de envio</h1>
              <form className="user mt-4">
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
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control form-control-user Pass"
                    id="Correo"
                    name="Correo"
                    placeholder="Correo Electronico"
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
                <button
                  type="submit"
                  className="btn btn-success btn-user btn-block mt-4"
                  style={{ fontSize: "120%" }}
                >
                  Pagar
                </button>
              </form>
            </div>
            <div className="col-1 d-flex">
              <div class="vertical-line"></div>
            </div>
            <div className="col-4">
              <h2 className="mb-4 text-start">Productos</h2>
              <div className="card">
                <div className="d-flex flex-row">
                  <div class="p-2 ">
                    <img
                      width="70px"
                      className=""
                      src="https://websitedemos.net/egrow-plants-04/wp-content/uploads/sites/1114/2022/07/flower-008-a-400x550.jpg"
                      alt=""
                      style={{ borderRadius: "5px" }}
                    />
                  </div>
                  <div class="p-2 ">
                    <p>Camiseta</p>
                    <p>X12</p>
                  </div>
                  <div class="ms-5 p-2 d-flex align-items-end flex-column mt-auto">
                    <p>$ 120.000</p>
                  </div>
                </div>
              </div>
              <div class="d-flex mt-5">
                <div class="p-2">Subtotal:</div>
                <div class="ms-auto p-2">$ 120.000</div>
              </div>
              <div class="d-flex mb-3 ">
                <div class="p-2">Total:</div>
                <div class="ms-auto p-2">$ 120.000</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-dark mt-5" id="tempaltemo_footer">
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
                    rel="nofollow"
                    className="text-light text-decoration-none"
                    target="_blank"
                    href="http://fb.com/templatemo"
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
                    href="https://templatemo.com/page/1"
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

export default PasarelaPago;

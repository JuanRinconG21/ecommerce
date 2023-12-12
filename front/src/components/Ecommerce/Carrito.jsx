import React, { useState, useEffect } from "react";
import { IoIosCloseCircle } from "react-icons/io";

const Carrito = () => {
  return (
    <>
      <section className="container py-5">
        <div className="row  pt-5 pb-3">
          <div className="col-lg-6">
            <h1 className="h1 text-start">Tu Carrito</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <div className="site-blocks-table">
              <table className="table table-borderless table-bordered">
                <thead>
                  <tr>
                    <th></th>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Total</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="align-middle">
                      <div className="d-flex align-items-center">
                        <img
                          width="100px"
                          className="mb-0"
                          src="https://websitedemos.net/egrow-plants-04/wp-content/uploads/sites/1114/2022/07/flower-008-a-400x550.jpg"
                          alt=""
                        />
                      </div>
                    </td>
                    <td className="align-middle">
                      <div className="d-flex align-items-center">
                        <p className="mb-0">Camiseta</p>
                      </div>
                    </td>
                    <td className="align-middle">
                      <div className="d-flex align-items-center">
                        <p className="mb-0">$90.000</p>
                      </div>
                    </td>
                    <td className="align-middle">
                      <div className="d-flex align-items-center">
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
                    </td>
                    <td className="align-middle">
                      <div className="d-flex align-items-center">
                        <p className="mb-0">$90.000</p>
                      </div>
                    </td>
                    <td className="align-middle">
                      <div className="d-flex align-items-center">
                        <IoIosCloseCircle />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-4">
            <div class="card">
              <div class="card-header">Total Carrito</div>
              <div class="card-body">
                <div className="d-flex">
                  <p class="card-text mt-3">Subtotal:</p>
                  <p class="card-text mt-3 ms-5">$90.000</p>
                </div>
                <hr />
                <div className="d-flex">
                  <p class="card-text mt-3">Total:</p>{" "}
                  <p class="card-text mt-3 ms-5">$90.000</p>
                </div>
                <hr />
                <button href="#" class="btn btn-success w-100 mt-5">
                  Ir a pagar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

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

export default Carrito;

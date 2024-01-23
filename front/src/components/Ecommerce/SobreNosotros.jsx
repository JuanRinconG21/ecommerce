import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import imagen1 from "../../assets/img/PLAY.png";
import imagen2 from "../../assets/img/XBOX.png";
import imagen3 from "../../assets/img/NINTENDO LOGO.webp";
import imagen4 from "../../assets/img/STEAM.png";
const SobreNosotros = () => {
  return (
    <>
      <div
        class="modal fade bg-white"
        id="templatemo_search"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg" role="document">
          <div class="w-100 pt-1 mb-5 text-right">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form
            action=""
            method="get"
            class="modal-content modal-body border-0 p-0"
          >
            <div class="input-group mb-2">
              <input
                type="text"
                class="form-control"
                id="inputModalSearch"
                name="q"
                placeholder="Search ..."
              />
              <button
                type="submit"
                class="input-group-text bg-success text-light"
              >
                <i class="fa fa-fw fa-search text-white"></i>
              </button>
            </div>
          </form>
        </div>
      </div>

      <section class="bg-success py-5">
        <div class="container">
          <div class="row align-items-center py-5">
            <div class="col-md-8 text-white">
              <h1>Sobre Nosotros</h1>
              <p>
                Bienvenidos a GameSoft, el destino definitivo para los
                apasionados del mundo de los videojuegos. En nuestro rincón
                virtual, nos dedicamos a brindar una experiencia única para
                todos los fanáticos de los juegos, ofreciendo una amplia gama de
                productos inspirados en tus títulos favoritos.
              </p>
            </div>
            <div class="col-md-4"></div>
          </div>
        </div>
      </section>

      <section class="container py-5">
        <div class="row text-center pt-5 pb-3">
          <div class="col-lg-6 m-auto">
            <h1 class="h1">Nuestros Servicios</h1>
            <p>
              Somos una tienda gamer apasionada por ofrecer lo mejor en
              tecnología y entretenimiento. Descubre una selección cuidadosa de
              productos, desde consolas hasta accesorios exclusivos. Sumérgete
              en el mundo de los juegos con nosotros, donde la calidad y la
              experiencia se unen. ¡Bienvenido al paraíso gamer!
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-lg-3 pb-5">
            <div class="h-100 py-5 services-icon-wap shadow">
              <div class="h1 text-success text-center">
                <i class="fa fa-truck fa-lg"></i>
              </div>
              <h2 class="h5 mt-4 text-center">Servicio de Entrega</h2>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 pb-5">
            <div class="h-100 py-5 services-icon-wap shadow">
              <div class="h1 text-success text-center">
                <i class="fas fa-exchange-alt"></i>
              </div>
              <h2 class="h5 mt-4 text-center">Compra y Devoluciones</h2>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 pb-5">
            <div class="h-100 py-5 services-icon-wap shadow">
              <div class="h1 text-success text-center">
                <i class="fa fa-percent"></i>
              </div>
              <h2 class="h5 mt-4 text-center">Promociones</h2>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 pb-5">
            <div class="h-100 py-5 services-icon-wap shadow">
              <div class="h1 text-success text-center">
                <i class="fa fa-user"></i>
              </div>
              <h2 class="h5 mt-4 text-center">24 Horas de Servicio</h2>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-light py-5">
        <div class="container my-4">
          <div class="row text-center py-3">
            <div class="col-lg-6 m-auto">
              <h1 class="h1">Nuestras Marcas</h1>
              <p>
                Estas son las principales marcas que manejamos en nuestro
                catalogo de productos
              </p>
            </div>
            <div class="col-lg-9 m-auto tempaltemo-carousel">
              <div class="row d-flex flex-row">
                <div class="col-1 align-self-center">
                  <a
                    class="h1"
                    href="#templatemo-slide-brand"
                    role="button"
                    data-bs-slide="prev"
                  >
                    <i class="text-light fas fa-chevron-left"></i>
                  </a>
                </div>

                <div class="col">
                  <div
                    class="carousel slide carousel-multi-item pt-2 pt-md-0"
                    id="templatemo-slide-brand"
                    data-bs-ride="carousel"
                  >
                    <div
                      class="carousel-inner product-links-wap"
                      role="listbox"
                    >
                      <div class="carousel-item active">
                        <div class="row">
                          <div class="col-3 p-md-5">
                            <a href="#">
                              <img
                                class="img-fluid brand-img"
                                src={imagen1}
                                alt="Brand Logo"
                              />
                            </a>
                          </div>
                          <div class="col-3 p-md-5">
                            <a href="#">
                              <img
                                class="img-fluid brand-img"
                                src={imagen2}
                                alt="Brand Logo"
                              />
                            </a>
                          </div>
                          <div class="col-3 p-md-5">
                            <a href="#">
                              <img
                                class="img-fluid brand-img"
                                src={imagen3}
                                alt="Brand Logo"
                              />
                            </a>
                          </div>
                          <div class="col-3 p-md-5">
                            <a href="#">
                              <img
                                class="img-fluid brand-img"
                                src={imagen4}
                                alt="Brand Logo"
                              />
                            </a>
                          </div>
                        </div>
                      </div>

                      
                    </div>
                  </div>
                </div>

                <div class="col-1 align-self-center">
                  <a
                    class="h1"
                    href="#templatemo-slide-brand"
                    role="button"
                    data-bs-slide="next"
                  >
                    <i class="text-light fas fa-chevron-right"></i>
                  </a>
                </div>
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

export default SobreNosotros;

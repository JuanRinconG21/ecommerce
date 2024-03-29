import React, { useState, useEffect } from "react";
import imagen from "../../assets/img/perifericos.jpg";
import imagen2 from "../../assets/img/videojuego.jpg";
import imagen3 from "../../assets/img/consolas.jpg";
import { NavLink } from "react-router-dom";
const Inicio = () => {
  const token = localStorage.getItem("token2");
  const [productos, setProductos] = useState([]);
  const listarProductos = async () => {
    const request = await fetch(
      "http://localhost:2100/productos/listarMasVendido",
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
    setProductos([]);
    setProductos(data.mensaje);
  };
  useEffect(() => {
    listarProductos();
  }, []);
  const formatearPrecio = (precio) => {
    return precio.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };
  return (
    <>
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
                className="input-group-text text-light"
                id="btnColor"
              >
                <i className="fa fa-fw fa-search text-white"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div
        id="template-mo-zay-hero-carousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-bs-target="#template-mo-zay-hero-carousel"
            data-bs-slide-to="0"
            className="active"
          ></li>
          <li
            data-bs-target="#template-mo-zay-hero-carousel"
            data-bs-slide-to="1"
          ></li>
          <li
            data-bs-target="#template-mo-zay-hero-carousel"
            data-bs-slide-to="2"
          ></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <div className="row p-5">
                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                  <img
                    className="img-fluid"
                    src="./assets/img/banner_img_01.jpg"
                    alt=""
                  />
                </div>
                <div className="col-lg-6 mb-0 d-flex align-items-center">
                  <div className="text-align-left align-self-center">
                    <h1 className="h1 text-success">
                      <b>Game</b>Soft
                    </h1>
                    <h3 className="h2">El Ecommerce Perfecto Para Gamers</h3>
                    <p>
                      Experimenta la excelencia en compras gamer con nosotros.
                      Ofrecemos una cuidada selección de productos de alta
                      calidad y última generación. Disfruta de envíos rápidos,
                      atención al cliente excepcional y ofertas exclusivas. Tu
                      satisfacción es nuestra prioridad. Únete a la comunidad
                      gamer y vive la experiencia de compra definitiva con
                      nosotros.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="row p-5">
                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                  <img
                    className="img-fluid"
                    src="./assets/img/banner_img_02.jpg"
                    alt=""
                  />
                </div>
                <div className="col-lg-6 mb-0 d-flex align-items-center">
                  <div className="text-align-left">
                    <h1 className="h1 text-success">
                      ¡Oferta Exclusiva en Consolas de Última Generación!
                    </h1>
                    <h3 className="">Precios Irresistibles</h3>
                    <p>
                      Descubre descuentos irresistibles en consolas de última
                      generación. Renueva tu experiencia gamer con precios
                      imbatibles.
                      <strong className="text-success">
                        ¡No te pierdas esta oportunidad única!
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="row p-5">
                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                  <img
                    className="img-fluid"
                    src="./assets/img/banner_img_03.jpg"
                    alt=""
                  />
                </div>
                <div className="col-lg-6 mb-0 d-flex align-items-center">
                  <div className="text-align-left">
                    <h1 className="h1 text-success">
                      Accesorios Premium: Eleva tu Juego con Estilo y Calidad
                    </h1>
                    <p>
                      Descubre una selección exclusiva de accesorios de alta
                      gama que transformarán tu experiencia gamer. Sumérgete en
                      un sonido envolvente con nuestros auriculares premium,
                      diseñados para cada detalle. Personaliza tu experiencia de
                      juego con controles únicos y ergonómicos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev text-decoration-none w-auto ps-3"
          href="#template-mo-zay-hero-carousel"
          role="button"
          data-bs-slide="prev"
        >
          <i className="fas fa-chevron-left"></i>
        </a>
        <a
          className="carousel-control-next text-decoration-none w-auto pe-3"
          href="#template-mo-zay-hero-carousel"
          role="button"
          data-bs-slide="next"
        >
          <i className="fas fa-chevron-right"></i>
        </a>
      </div>
      <section className="container py-5">
        <div className="row text-center pt-3">
          <div className="col-lg-6 m-auto">
            <h1 className="h1">Categorias del Mes</h1>
            <p>
              Aqui puedes encontrar las categorias mas destacadas de este mes
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-4 p-5 mt-3">
            <a>
              <img src={imagen3} className="rounded-circle img-fluid border" />
            </a>
            <h5 className="text-center mt-3 mb-3">Consolas</h5>
            <p className="text-center">
              <a className="btn btn-success">Comprar</a>
            </p>
          </div>
          <div className="col-12 col-md-4 p-5 mt-3">
            <a>
              <img src={imagen2} className="rounded-circle img-fluid border" />
            </a>
            <h2 className="h5 text-center mt-3 mb-3">Videojuegos</h2>
            <p className="text-center">
              <a className="btn btn-success">Comprar</a>
            </p>
          </div>
          <div className="col-12 col-md-4 p-5 mt-3">
            <a>
              <img src={imagen} className="rounded-circle img-fluid border" />
            </a>
            <h2 className="h5 text-center mt-3 mb-3">Perifericos</h2>
            <p className="text-center">
              <a className="btn btn-success">Comprar</a>
            </p>
          </div>
        </div>
      </section>
      <section className="bg-light">
        <div className="container py-5">
          <div className="row text-center py-3">
            <div className="col-lg-6 m-auto">
              <h1 className="h1">Productos Destacados</h1>
              <p>
                Aqui puedes encontrar nuestros productos mas comprados
                actualmente
              </p>
            </div>
          </div>
          <div className="row">
            {productos.length > 0 ? (
              productos.map((product) => {
                return (
                  <div className="col-12 col-md-4 mb-4">
                    <div className="card h-100">
                      <a href="shop-single.html">
                        <img
                          src={product.Imagen1}
                          className="card-img-top"
                          alt="..."
                        />
                      </a>
                      <div className="card-body">
                        <ul className="list-unstyled d-flex justify-content-between">
                          <li>
                            <i className="text-warning fa fa-star"></i>
                            <i className="text-warning fa fa-star"></i>
                            <i className="text-warning fa fa-star"></i>
                            <i className="text-warning fa fa-star"></i>
                            <i className="text-warning fa fa-star"></i>
                          </li>
                          <li className="text-muted text-right">
                            ${formatearPrecio(product.Precio)}
                          </li>
                        </ul>
                        <a className="h2 text-decoration-none text-dark">
                          {product.Nombre}
                        </a>
                        <p className="card-text">{product.Descripcion}</p>
                        <p className="text-muted">
                          Cantidad Vendida ({product.totalVendido})
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <h1 className="text-center mt-5">
                No hay Productos Vendidos :'(
              </h1>
            )}
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

export default Inicio;

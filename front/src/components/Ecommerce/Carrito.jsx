import { useState, useEffect } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Carrito = () => {
  ///INICIO CARRITO
  ///INICIO CARRITO
  ///INICIO CARRITO
  ///INICIO CARRITO
  ///INICIO CARRITO
  const [productosCarrito, setProductosCarrito] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    verCarro();
  }, []);
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

  const handleActualizarCantidad = (id, nuevaCantidad) => {
    verCarro();
    const nuevoCarrito = productosCarrito
      .map((producto) => {
        if (producto.id === id) {
          const cantidadMaxima = producto.cantidadMaxima;
          // Asegurarse de que la nueva cantidad no supere la cantidad máxima
          const cantidadActualizada = Math.min(nuevaCantidad, cantidadMaxima);
          if (cantidadActualizada > 0 && producto.precio > 0) {
            return {
              ...producto,
              cantidad: cantidadActualizada,
              total: cantidadActualizada * producto.precio,
            };
          } else {
            return null;
          }
        }
        return producto;
      })
      .filter(Boolean);

    localStorage.setItem("productos", JSON.stringify(nuevoCarrito));
    setProductosCarrito(nuevoCarrito);
    verCarro();
  };
  ///FIN CARRITO
  ///FIN CARRITO
  ///FIN CARRITO
  ///FIN CARRITO
  ///FIN CARRITO
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
            <div className="site-blocks-table" style={{}}>
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
                  {productosCarrito.length > 0 ? (
                    productosCarrito.map((producto) => {
                      return (
                        <tr key={producto.id}>
                          <td className="align-middle">
                            <div className="d-flex align-items-center">
                              <img
                                width="100px"
                                className="mb-0"
                                src={producto.imagen}
                                alt=""
                              />
                            </div>
                          </td>
                          <td className="align-middle">
                            <div className="d-flex align-items-center">
                              <p className="mb-0">{producto.nombre}</p>
                            </div>
                          </td>
                          <td className="align-middle">
                            <div className="d-flex align-items-center">
                              <p className="mb-0">
                                ${formatearPrecio(producto.precio)}
                              </p>
                            </div>
                          </td>
                          <td className="align-middle">
                            <div className="d-flex align-items-center">
                              <div
                                className="input-group mb-3 d-flex align-items-center quantity-container"
                                style={{ maxWidth: "120px" }}
                              >
                                <input
                                  type="number"
                                  value={producto.cantidad}
                                  onChange={(e) =>
                                    handleActualizarCantidad(
                                      producto.id,
                                      e.target.value
                                    )
                                  }
                                  max={producto.cantidadMaxima}
                                  min={0}
                                  className="form-control text-center quantity-amount"
                                />
                              </div>
                            </div>
                          </td>
                          <td className="align-middle">
                            <div className="d-flex align-items-center">
                              <p className="mb-0">
                                ${formatearPrecio(producto.total)}
                              </p>
                            </div>
                          </td>
                          <td className="align-middle">
                            <div className="d-flex align-items-center">
                              <a
                                onClick={() => {
                                  handleEliminarDelLocalStorage(producto.id);
                                }}
                              >
                                <IoIosCloseCircle />
                              </a>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <h3 style={{ position: "absolute" }} className="ms-5">
                        No Hay Productos en el Carrito de Compras
                      </h3>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <div className="card-header">Total Carrito</div>
              <div className="card-body">
                <div className="d-flex">
                  <p className="card-text mt-3">Subtotal:</p>
                  <p className="card-text mt-3 ms-5 ">
                    ${formatearPrecio(total)}
                  </p>
                </div>
                <hr />
                <div className="d-flex">
                  <p className="card-text mt-3">Total:</p>
                  <p className="card-text mt-3 ms-5">
                    ${formatearPrecio(total)}
                  </p>
                </div>
                <hr />
                {productosCarrito.length > 0 ? (
                  <>
                    <NavLink to="/Ecommerce/Pasarela" className="">
                      <button href="#" className="btn btn-success w-100 mt-4">
                        Ir a pagar
                      </button>
                    </NavLink>
                    <NavLink to="/Ecommerce" className="">
                      <button href="#" className="btn btn-dark w-100 mt-3">
                        Seguir comprando
                      </button>
                    </NavLink>
                  </>
                ) : (
                  <>
                    <NavLink to="/Ecommerce" className="">
                      <button href="#" className="btn btn-dark w-100 mt-3">
                        Ir a comprar
                      </button>
                    </NavLink>
                  </>
                )}
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
                    Mens Shoes
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none" href="#">
                    Womens Shoes
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
                    href="http://fb.com/templatemo"
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
            <div className="col-auto">
              <label className="sr-only">Email address</label>
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
                  <a rel="sponsored" href="https://templatemo.com/page/1">
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

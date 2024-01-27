import { useState, useEffect } from "react";
//import HelperForm from "../../helpers/HelperForm";
import { NavLink } from "react-router-dom";
import { AuthProviderEcommerce } from "../../context/AuthProviderEcommerce";
import UseAuthEcommerce from "../../helpers/UseAuthEcommerce";
import Swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal2);
const PasarelaPago = () => {
  const { Autenticado } = UseAuthEcommerce();
  const token = localStorage.getItem("token2");
  //console.log("EL ID USUARIO: " + Autenticado.idUsuario);
  ///INICIO CARRITO
  ///INICIO CARRITO
  ///INICIO CARRITO
  ///INICIO CARRITO
  ///INICIO CARRITO
  const [productosCarrito, setProductosCarrito] = useState([]);
  const [total, setTotal] = useState(0);
  const [envio, setEnvio] = useState(0);
  const [totalFinal, setTotalFinal] = useState(0);
  const [metodos, setMetodos] = useState([]);
  const [error, setError] = useState(null);
  const [error2, setError2] = useState(null);
  useEffect(() => {
    verCarro();
    cargarMetodos();
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
    setEnvio(total2 * 0.1);
    setTotalFinal(total2 + total2 * 0.1);
    //console.log(total2);
  };

  const cargarMetodos = async () => {
    const request = await fetch("http://localhost:2100/metodos/listar", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `${token}`,
      },
    });
    const data = await request.json();
    setMetodos(data.mensaje);
  };

  const formatearPrecio = (precio) => {
    return precio.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };
  ///FIN CARRITO
  ///FIN CARRITO
  ///FIN CARRITO
  ///FIN CARRITO
  ///FIN CARRITO
  const obtenerFechaYHoraActual = () => {
    const fechaActual = new Date();

    // Restar 5 horas a la hora actual
    fechaActual.setHours(fechaActual.getHours() - 5);

    const año = fechaActual.getFullYear();
    const mes = String(fechaActual.getMonth() + 1).padStart(2, "0");
    const dia = String(fechaActual.getDate()).padStart(2, "0");

    const horas = String(fechaActual.getHours()).padStart(2, "0");
    const minutos = String(fechaActual.getMinutes()).padStart(2, "0");
    const segundos = String(fechaActual.getSeconds()).padStart(2, "0");

    const fechaFormateada = `${año}-${mes}-${dia}`;
    const horaFormateada = `${horas}:${minutos}:${segundos}`;

    return `${fechaFormateada} ${horaFormateada}`;
  };
  const verificarDispo = async (id, cantidad) => {
    try {
      const response = await fetch(
        `http://localhost:2100/productos/disponibilidad/${id}`,
        {
          method: "POST", // Método POST ya que se está enviando datos en el cuerpo
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
          body: JSON.stringify({ cantidad: cantidad }),
        }
      );

      const data = await response.json();
      return data.mensaje;
    } catch (error) {
      console.error("Error en la solicitud:", error);
      return false;
    }
  };

  const InsertarEncabezado = async (
    FechayHora,
    Total,
    idEstado,
    idUsuario,
    idMetodo
  ) => {
    try {
      const response = await fetch(
        `http://localhost:2100/encabezados/agregar`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
          body: JSON.stringify({
            FechayHora,
            Total,
            idEstado,
            idUsuario,
            idMetodo,
          }),
        }
      );

      const data = await response.json();
      if (data.id === 200) {
        return { status: 200 };
      } else {
        return { status: 400, errorMessage: data.errorMessage }; // Puedes incluir más detalles del error si es necesario
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      return { status: 400, errorMessage: "Error de conexión" };
    }
  };

  //Funcion para insertarYActualizarInoformacion
  const ActualizarInfoYEncabezado = async (e) => {
    e.preventDefault();
    verCarro();
    if (productosCarrito.length > 0) {
      //RECORRO EL CARRITO PARA VER LA DISPOMIBILIDAD
      // Iterar sobre los productos del carrito y realizar el fetch para cada uno
      for (const producto of productosCarrito) {
        const disponible = await verificarDispo(producto.id, producto.cantidad);

        if (!disponible) {
          setError(`El producto "${producto.nombre}" no está disponible.`);
          MySwal.fire({
            title: <strong> {"Error"}</strong>,
            html: (
              <i>{`El producto "${producto.nombre}" no está disponible.`}</i>
            ),
            icon: "error",
          });
          return; // Detener el proceso si un producto no está disponible
        }
      }
      // Si todos los productos están disponibles, continuar con la lógica de finalizar la compra
      setError(null);
      // ... (Lógica para finalizar la compra)
      if (error === null) {
        const idUsuario = document.querySelector("#idUsuario");
        const Correo = document.querySelector("#Correo");
        const Nombres = document.querySelector("#Nombres");
        const Apellidos = document.querySelector("#Apellidos");
        const Telefono = document.querySelector("#Telefono");
        const Direccion = document.querySelector("#Direccion");
        const Ciudad = document.querySelector("#Ciudad");
        const Pass = document.querySelector("#Pass");
        const metodoPago = document.querySelector("#metodoPago");
        if (
          idUsuario.value.length > 0 &&
          Correo.value.length > 0 &&
          Nombres.value.length > 0 &&
          Telefono.value.length > 0 &&
          Direccion.value.length > 0 &&
          Ciudad.value.length > 0 &&
          Pass.value.length > 0 &&
          Apellidos.value.length > 0
        ) {
          const request = await fetch(
            `http://localhost:2100/usuarios/Editar/${idUsuario.value}`,
            {
              method: "PUT",
              body: JSON.stringify({
                Nombres: Nombres.value,
                Apellidos: Apellidos.value,
                Telefono: Telefono.value,
                Direccion: Direccion.value,
                Correo: Correo.value,
                Pass: Pass.value,
                Ciudad: Ciudad.value,
              }),
              headers: {
                "Content-Type": "application/json",
                Authorization: `${token}`,
              },
            }
          );
          const data = await request.json();
          if (data.id == 200) {
            let fechayhora = obtenerFechaYHoraActual();
            let respuestaEnca = InsertarEncabezado(
              fechayhora,
              totalFinal,
              0,
              idUsuario.value,
              metodoPago.value
            );
            respuestaEnca = (await respuestaEnca).status;
            if (respuestaEnca === 200) {
              //ACA SE INSERTA EL DETALLE
              try {
                let i = 1;

                // Iterar sobre los detalles y enviar cada uno al servidor
                for (const producto of productosCarrito) {
                  //const { Cantidad, TotalProd, idProducto } = detalle;
                  let id = producto.id;
                  let cantidad = producto.cantidad;
                  let totalProd = producto.total;
                  const response = await fetch(
                    "http://localhost:2100/detalle/Agregar",
                    {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                        Authorization: `${token}`,
                      },
                      body: JSON.stringify({
                        Cantidad: cantidad,
                        Totalprod: totalProd,
                        idProducto: id,
                      }),
                    }
                  );
                  const data = await response.json();
                  //console.log(data);
                  if (data.id === 400) {
                    MySwal.fire({
                      title: <strong> {"Error"}</strong>,
                      html: <i>{"Error al Comprar, Contacte a Soporte"}</i>,
                      icon: "error",
                    });
                    break;
                  } else {
                    if (i == productosCarrito.length) {
                      const response = await fetch(
                        "http://localhost:2100/encabezados/enviar",
                        {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                            Authorization: `${token}`,
                          },
                          body: JSON.stringify({
                            id: idUsuario.value,
                            idMetodo: metodoPago.value,
                            totalPagar: totalFinal,
                          }),
                        }
                      );
                      const data = await response.json();
                      if (data.id === 200) {
                        MySwal.fire({
                          title: <strong> {"Felicitaciones"}</strong>,
                          html: (
                            <i>
                              {
                                "Compra Agregada Correctamente \nPronto Recibiras Informacion a Tu Correo Electronico"
                              }
                            </i>
                          ),
                          icon: "success",
                        });
                        localStorage.removeItem("productos");
                        setTimeout(() => {
                          window.location.reload();
                        }, 1500);
                      } else {
                        MySwal.fire({
                          title: <strong> {"Error"}</strong>,
                          html: <i>{`Ha ocurrido un Error ${data.mensaje}`}</i>,
                          icon: "error",
                        });
                      }
                    }
                    //let fechayhora = obtenerFechaYHoraActual();
                  }
                  i = i + 1;
                }
                // Puedes agregar lógica aquí si necesitas realizar alguna acción después de enviar todos los detalles
                // Limpiar el localStorage después de enviar los detalles
              } catch (error) {
                console.error("Error durante el proceso de envío:", error);
                // Puedes manejar el error aquí
              }
              //console.log("TODO BEN");
            } else {
              MySwal.fire({
                title: <strong> {"Error"}</strong>,
                html: <i>{"Error al Comprar"}</i>,
                icon: "error",
              });
            }
          } else {
            let mensaje = data.mensaje;
            MySwal.fire({
              title: <strong> {"Error"}</strong>,
              html: <i>{mensaje || data.error}</i>,
              icon: "error",
            });
          }
        } else {
          MySwal.fire({
            title: <strong> {"Error"}</strong>,
            html: <i>{"No deje Campos Vacios"}</i>,
            icon: "error",
          });
        }
      } else {
        MySwal.fire({
          title: <strong> {"Error"}</strong>,
          html: <i>{error}</i>,
          icon: "error",
        });
      }
    } else {
      MySwal.fire({
        title: <strong> {"Error"}</strong>,
        html: <i>{"Agregue Productos Al Carrito Antes de Comprar"}</i>,
        icon: "error",
      });
    }
  };

  //const { form, cambiar } = HelperForm({});
  return (
    <>
      <section className="container py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-7">
              <h1 className="h1 text-start">Datos de envio</h1>
              <h3 className="h3 text-start">
                Nota: Si quieres actualizar tu informacion de envio cambia tus
                datos aca.
              </h3>
              <form className="user mt-4">
                <div className="form-group">
                  <input
                    readOnly
                    type="number"
                    className="form-control form-control-user idUsuario"
                    id="idUsuario"
                    name="idUsuario"
                    placeholder="Identificacion"
                    defaultValue={Autenticado.idUsuario}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control form-control-user Pass"
                    id="Correo"
                    name="Correo"
                    placeholder="Correo Electronico"
                    defaultValue={Autenticado.Correo}
                    required
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
                      defaultValue={Autenticado.Nombres}
                      required
                    />
                  </div>
                  <div className="col-sm-6">
                    <input
                      type="text"
                      className="form-control form-control-user Apellidos"
                      id="Apellidos"
                      name="Apellidos"
                      placeholder="Apellido/s"
                      defaultValue={Autenticado.Apellidos}
                      required
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
                      defaultValue={Autenticado.Telefono}
                      required
                    />
                  </div>
                  <div className="col-sm-6">
                    <input
                      type="text"
                      className="form-control form-control-user Direccion"
                      id="Direccion"
                      name="Direccion"
                      placeholder="Direccion"
                      defaultValue={Autenticado.Direccion}
                      required
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
                    defaultValue={Autenticado.Ciudad}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-user Correo"
                    name="Pass"
                    id="Pass"
                    placeholder="Contraseña"
                    required
                  />
                </div>
                <div className="form-group">
                  <select
                    name="metodoPago"
                    id="metodoPago"
                    className="form-control"
                    style={{ borderRadius: "20px", fontSize: "120%" }}
                  >
                    {metodos.map((metodo) => {
                      return (
                        <option key={metodo.idMetodo} value={metodo.idMetodo}>
                          {metodo.Descripcion}
                        </option>
                      );
                    })}
                  </select>
                </div>
                {productosCarrito.length > 0 ? (
                  <button
                    type="button"
                    className="btn btn-success btn-user btn-block mt-4"
                    style={{ fontSize: "120%" }}
                    onClick={(e) => {
                      ActualizarInfoYEncabezado(e);
                    }}
                  >
                    Pagar
                  </button>
                ) : (
                  <NavLink to="Productos">
                    <button
                      type="submit"
                      className="btn btn-success btn-user btn-block mt-4"
                      style={{ fontSize: "120%" }}
                    >
                      Agregar Productos
                    </button>
                  </NavLink>
                )}
              </form>
            </div>
            <div className="col-1 d-flex">
              <div className="vertical-line"></div>
            </div>
            <div className="col-4">
              <h2 className="mb-4 text-start">Productos</h2>
              <div className="card">
                {productosCarrito.length > 0 ? (
                  productosCarrito.map((product) => {
                    return (
                      <div className="container-fluid" key={product.id}>
                        <div className="row">
                          <div className="col-6">
                            <img
                              width="80px"
                              className="mt-4"
                              src={product.imagen}
                              alt=""
                              style={{ borderRadius: "5px" }}
                            />
                          </div>
                          <div className="col-6">
                            <p>{product.nombre}</p>
                            <p>X{product.cantidad}</p>
                            <p>$ {formatearPrecio(product.precio)}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="d-flex flex-row text-center">
                    <div className="p-2 ">
                      <h1>No Hay Productos Disponibles</h1>
                      <p>:(</p>
                    </div>
                  </div>
                )}
              </div>
              <div className="d-flex mt-5">
                <div className="p-2">Subtotal:</div>
                <div className="ms-auto p-2">${formatearPrecio(total)}</div>
              </div>
              <div className="d-flex">
                <div className="p-2">Envio: </div>
                <div className="ms-auto p-2">${formatearPrecio(envio)}</div>
              </div>
              <div className="d-flex">
                <div className="p-2">
                  <strong style={{ fontSize: "70%" }}>
                    Nota: El Envio Es El 10% del Valor De Tu Compra
                    <br />
                  </strong>
                </div>
              </div>
              <hr />
              <div className="d-flex mb-3 ">
                <div className="p-2">Total:</div>
                <div className="ms-auto p-2">
                  $ {formatearPrecio(totalFinal)}
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

export default PasarelaPago;

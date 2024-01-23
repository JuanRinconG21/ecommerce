import { useState, useEffect } from "react";
import Swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal2);
import ModalEditarProducto from "./ModalEditarProducto";
const VerProductos = () => {
  const [datos, Setdatos] = useState([]);
  const [Editar, setEditar] = useState(null);
  const token = localStorage.getItem("token");
  const Listar = async () => {
    const request = await fetch("http://localhost:2100/productos/listarNo", {
      method: "GET",
      headers: {
        Authorization: `${token}`,
      },
    });
    const data = await request.json();
    console.log(data);
    Setdatos(data.mensaje);
  };
  //USE EFECT NO CICLO INFINITO
  useEffect(() => {
    Listar();
  }, []);
  //FUNCION PARA ELIMINAR
  const Eliminar = (id, nombre) => {
    MySwal.fire({
      title: `¿ Quieres Eliminar el Producto ${nombre} ?`,
      showDenyButton: true,
      confirmButtonText: "Si",
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        fetch(`http://localhost:2100/productos/eliminar/${id}`, {
          method: "DELETE", // Método de solicitud (puede ser GET, POST, etc.)
          headers: {
            Authorization: `${token}`, // Incluye el token JWT en el encabezado Authorization
          },
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            if (data.id == 200) {
              MySwal.fire({
                title: <strong>Eliminado</strong>,
                html: <i>{data.mensaje}</i>,
                icon: "success",
              });
              Listar();
            } else {
              MySwal.fire({
                title: <strong>ERROR</strong>,
                html: <i>{data.mensaje}</i>,
                icon: "error",
              });
            }
          });
      }
    });
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="container-fluid">
      <div className=" align-items-center mb-4">
        <h1 className="h3 mb-0 text-gray-800" style={{ textAlign: "center" }}>
          <b>PRODUCTOS</b>
        </h1>
      </div>
      <div className="row">
        {datos.map((dato) => {
          return (
            <div className="col-4" key={dato.idProducto}>
              <div className="card" style={{ width: "100%" }}>
                <img src={dato.Imagen1} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title text-center">
                    Producto #{dato.idProducto}{" "}
                  </h4>
                  <p className="card-text">
                    <ul className="list-group">
                      <li className="list-group-item">
                        Nombre: {dato.Nombre}{" "}
                      </li>
                      <li className="list-group-item">Marca: {dato.Marca} </li>
                      <li className="list-group-item">Precio: {dato.Precio}</li>
                      <li className="list-group-item">
                        Stock: {dato.Cantidad}
                      </li>
                      <li className="list-group-item">
                        Categoria: {dato.DescripcionCategoria}
                      </li>
                    </ul>
                  </p>
                  <center>
                    <button
                      onClick={() => {
                        Eliminar(dato.idProducto, dato.Nombre);
                      }}
                      className="btn btn-danger mr-2"
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                    <button
                      onClick={() => {
                        setEditar(dato.idProducto);
                        handleShow();
                      }}
                      className="btn btn-warning mr-2"
                    >
                      <i className="fas fa-edit"></i>
                    </button>
                  </center>
                </div>
              </div>
              {Editar == dato.idProducto && (
                <ModalEditarProducto
                  show={show}
                  handleClose={handleClose}
                  id={dato.idProducto}
                  nombre={dato.Nombre}
                  marca={dato.Marca}
                  precio={dato.Precio}
                  cantidad={dato.Cantidad}
                  descripcion={dato.Descripcion}
                  setEditar={setEditar}
                  ListarMetodo={Listar}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VerProductos;

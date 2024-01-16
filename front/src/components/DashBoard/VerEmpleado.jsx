import { useState, useEffect } from "react";
import Swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal2);
import ModalEditarEmpleado from "./ModalEditarEmpleado";
const VerEmpleado = () => {
  const [datos, Setdatos] = useState([]);
  const [Editar, setEditar] = useState(null);
  const token = localStorage.getItem("token");
  //FUNCION DEL FECTH
  const Listar = async () => {
    const request = await fetch("http://localhost:2100/empleado/listar", {
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
      title: `¿ Quieres Eliminar el Empleado ${nombre} ?`,
      showDenyButton: true,
      confirmButtonText: "Si",
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        fetch(`http://localhost:2100/empleado/Eliminar/${id}`, {
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
                html: <i>Eliminado Correctamente</i>,
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
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Usuarios</h1>
      </div>

      <div className="row">
        <div className="col-12">
          <table className="table ">
            <thead
              className="text-center bg-primary"
              style={{ color: "white" }}
            >
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre/s</th>
                <th scope="col">Apellido/s</th>
                <th scope="col">Telefono</th>
                <th scope="col">Direccion</th>
                <th scope="col">Correo</th>

                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {datos.map((dato) => {
                return (
                  <tr key={dato.idEmpleado}>
                    <th scope="row"> {dato.idEmpleado} </th>
                    <td>{dato.Nombres}</td>
                    <td>{dato.Apellidos}</td>
                    <td>{dato.Telefono}</td>
                    <td>{dato.Direccion}</td>
                    <td>{dato.Correo}</td>

                    <td>
                      <button
                        onClick={() => {
                          Eliminar(
                            dato.idEmpleado,
                            dato.Nombres + " " + dato.Apellidos
                          );
                        }}
                        className="btn btn-danger mr-2"
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                      <button
                        onClick={() => {
                          setEditar(dato.idEmpleado);
                          handleShow();
                        }}
                        className="btn btn-warning mr-2"
                      >
                        <i className="fas fa-edit"></i>
                      </button>
                    </td>
                    {Editar == dato.idEmpleado && (
                      <ModalEditarEmpleado
                        show={show}
                        handleClose={handleClose}
                        id={dato.idEmpleado}
                        nombre={dato.Nombres}
                        apellido={dato.Apellidos}
                        telefono={dato.Telefono}
                        direccion={dato.Direccion}
                        correo={dato.Correo}
                        setEditar={setEditar}
                        Listar={Listar}
                      />
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VerEmpleado;

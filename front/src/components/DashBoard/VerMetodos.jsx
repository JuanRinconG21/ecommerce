import React, { useState, useEffect } from "react";
import Swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import ModalEditarMetodo from "./ModalEditarMetodo";
const MySwal = withReactContent(Swal2);
const VerMetodos = () => {
  const [metodo, Setmetodo] = useState([]);
  const [Editar, setEditar] = useState(null);
  const token = localStorage.getItem("token");
  //FUNCION DEL FECTH
  const ListarMetodo = async () => {
    const request = await fetch("http://localhost:2100/metodos/listar", {
      method: "GET",
      headers: {
        Authorization: `${token}`,
      },
    });
    const data = await request.json();
    console.log(data);
    Setmetodo(data.mensaje);
  };
  //USE EFECT NO CICLO INFINITO
  useEffect(() => {
    ListarMetodo();
  }, []);
  //FUNCION PARA ELIMINAR
  const EliminarCate = (id, nombre) => {
    MySwal.fire({
      title: `¿ Quieres Eliminar el Metodo de Pago ${nombre} ?`,
      showDenyButton: true,
      confirmButtonText: "Si",
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        fetch(`http://localhost:2100/metodos/eliminar/${id}`, {
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
                html: <i>Metodo de Pago Eliminado Correctamente</i>,
                icon: "success",
              });
              ListarMetodo();
            } else {
              console.table(data);
            }
          });
      }
    });
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="container-fluid">
        <div className=" align-items-center mb-4">
          <h1 className="h3 mb-0 text-gray-800" style={{ textAlign: "center" }}>
            <b>METODOS DE PAGO</b>
          </h1>
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
                  <th scope="col">Metodo</th>
                  <th scope="col">Acciones</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {metodo.map((metodo) => {
                  return (
                    <tr>
                      <th scope="row">{metodo.idMetodo} </th>
                      <td>{metodo.Descripcion} </td>
                      <td>
                        <button
                          onClick={() => {
                            EliminarCate(metodo.idMetodo, metodo.Descripcion);
                          }}
                          className="btn btn-danger mr-2"
                        >
                          <i class="fas fa-trash"></i>
                        </button>
                        <button
                          onClick={() => {
                            setEditar(metodo.idMetodo);
                            handleShow();
                          }}
                          className="btn btn-warning mr-2"
                        >
                          <i class="fas fa-edit"></i>
                        </button>
                      </td>
                      {Editar == metodo.idMetodo && (
                        <ModalEditarMetodo
                          show={show}
                          handleClose={handleClose}
                          id={metodo.idMetodo}
                          metodo={metodo.Descripcion}
                          setEditar={setEditar}
                          ListarMetodo={ListarMetodo}
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
    </>
  );
};

export default VerMetodos;

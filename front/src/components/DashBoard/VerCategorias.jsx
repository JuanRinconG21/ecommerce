import React, { useState, useEffect } from "react";
import Swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal2);
import ModalEditarCate from "./ModalEditarCate";
const VerCategorias = () => {
  const [categorias, SetCategorias] = useState([]);
  const [Editar, setEditar] = useState(null);
  const token = localStorage.getItem("token");
  //FUNCION DEL FECTH
  const ListarCate = async () => {
    const request = await fetch("http://localhost:2100/categorias/listar", {
      method: "GET",
      headers: {
        Authorization: `${token}`,
      },
    });
    const data = await request.json();
    console.log(data);
    SetCategorias(data.mensaje);
  };
  //USE EFECT NO CICLO INFINITO
  useEffect(() => {
    ListarCate();
  }, []);
  //FUNCION PARA ELIMINAR
  const EliminarCate = (id, nombre) => {
    MySwal.fire({
      title: `¿ Quieres Eliminar la Categoria ${nombre} ?`,
      showDenyButton: true,
      confirmButtonText: "Si",
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        fetch(`http://localhost:2100/categorias/eliminar/${id}`, {
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
                html: <i>Categoria Eliminada Correctamente</i>,
                icon: "success",
              });
              ListarCate();
            }
          });
      }
    });
  };
  //TODO LO DE EDITAR
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="container-fluid">
      <div className=" align-items-center mb-4">
        <h1 className="h3 mb-0 text-gray-800" style={{ textAlign: "center" }}>
          <b>CATEGORIAS</b>
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
                <th scope="col">Categorias</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {categorias.map((categoria) => {
                return (
                  <tr>
                    <th scope="row">{categoria.idCategoria} </th>
                    <td>{categoria.DescripcionCategoria} </td>
                    <td>
                      <button
                        onClick={() => {
                          EliminarCate(
                            categoria.idCategoria,
                            categoria.DescripcionCategoria
                          );
                        }}
                        className="btn btn-danger mr-2"
                      >
                        <i class="fas fa-trash"></i>
                      </button>
                      <button className="btn btn-warning mr-2">
                        <i class="fas fa-edit"></i>
                      </button>
                    </td>
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

export default VerCategorias;

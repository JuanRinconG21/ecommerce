import React, { useState, useEffect } from "react";
import Swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal2);
const Pedidos = () => {
  const [pedidos, SetPedidos] = useState([]);
  const token = localStorage.getItem("token");
  //FUNCION DEL FECTH
  const Listar = async () => {
    const request = await fetch("http://localhost:2100/encabezado/listar", {
      method: "GET",
      headers: {
        Authorization: `${token}`,
      },
    });
    const data = await request.json();
    console.log(data);
    SetPedidos(data.mensaje);
  };
  //USE EFECT NO CICLO INFINITO
  useEffect(() => {
    Listar();
  }, []);

  const Actualizar = (id) => {
    MySwal.fire({
      title: `¿ Quieres Confirmar el envio del Pedido #${id} ?`,
      showDenyButton: true,
      confirmButtonText: "Si",
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        fetch(`http://localhost:2100/encabezados/actualizarEstado/${id}`, {
          method: "PUT", // Método de solicitud (puede ser GET, POST, etc.)
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
                title: <strong>Felicitaciones</strong>,
                html: <i>Confirmacion de Envio Exitosa</i>,
                icon: "success",
              });
              Listar();
            }
          });
      }
    });
  };

  return (
    <div className="container-fluid">
      <div className=" align-items-center mb-4">
        <h1 className="h3 mb-0 text-gray-800" style={{ textAlign: "center" }}>
          <b>PEDIDOS</b>
        </h1>
        <h2 className="mt-3"></h2>
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
                <th scope="col">Fecha y Hora</th>
                <th scope="col">Total</th>
                <th scope="col">Estado</th>
                <th scope="col">Usuario</th>
                <th scope="col">Metodo de Pago</th>
                <th scope="col">Actualizar Estado</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {pedidos.map((pedido) => {
                return (
                  <tr>
                    <th scope="row">{pedido.idEncabezado}</th>
                    <th scope="col">{pedido.FechayHora}</th>
                    <th scope="col">
                      {pedido.Total.toLocaleString("en-US", {
                        thousandsSeparator: ".",
                      })}
                    </th>
                    <th scope="col">
                      {pedido.idEstado === 0 ? "Pendiente" : "Enviado"}
                    </th>
                    <th scope="col">
                      {pedido.Nombres + " " + pedido.Apellidos}
                    </th>
                    <th scope="col">{pedido.MetodoPago}</th>
                    <th scope="col">
                      <button
                        className="btn btn-warning mr-2"
                        onClick={() => {
                          Actualizar(pedido.idEncabezado);
                        }}
                      >
                        <i class="fas fa-edit"></i>
                      </button>
                    </th>
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

export default Pedidos;

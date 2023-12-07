import React, { useState } from "react";

const Pedidos = () => {
  return (
    <div className="container-fluid">
      <div className=" align-items-center mb-4">
        <h1 className="h3 mb-0 text-gray-800" style={{ textAlign: "center" }}>
          <b>PEDIDOS</b>
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
                <th scope="col">Fecha y Hora</th>
                <th scope="col">Total</th>
                <th scope="col">Estado</th>
                <th scope="col">Usuario</th>
                <th scope="col">Metodo de Pago</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr>
                <th scope="row">2</th>
                <th scope="col">Fecha y Hora</th>
                <th scope="col">Total</th>
                <th scope="col">Estado</th>
                <th scope="col">Usuario</th>
                <th scope="col">Metodo de Pago</th>
              </tr>
              <tr>
                <th scope="row">2</th>
                <th scope="col">Fecha y Hora</th>
                <th scope="col">Total</th>
                <th scope="col">Estado</th>
                <th scope="col">Usuario</th>
                <th scope="col">Metodo de Pago</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Pedidos;

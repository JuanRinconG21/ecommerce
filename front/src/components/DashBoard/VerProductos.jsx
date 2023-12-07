import React, { useState } from "react";

const VerProductos = () => {
  return (
    <div className="container-fluid">
      <div className=" align-items-center mb-4">
        <h1 className="h3 mb-0 text-gray-800" style={{ textAlign: "center" }}>
          <b>PRODUCTOS</b>
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
                <th scope="col">Nombre</th>
                <th scope="col">Marca</th>
                <th scope="col">Precio</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Descripcion</th>
                <th scope="col">Categoria</th>
                <th scope="col">Imagen</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr>
                <th scope="row">1</th>
                <td scope="col">J</td>
                <td scope="col">JOTA</td>
                <td scope="col">21.000</td>
                <td scope="col">21</td>
                <td scope="col">NO HAY</td>
                <td scope="col">Perrote</td>
                <td scope="col">
                  <img src="" alt="" srcset="" />
                </td>
                <td>
                  <button className="btn btn-danger mr-2">
                    <i class="fas fa-trash"></i>
                  </button>
                  <button className="btn btn-warning mr-2">
                    <i class="fas fa-edit"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VerProductos;

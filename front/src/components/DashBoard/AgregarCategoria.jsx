import React, { useState } from "react";

const AgregarCategoria = () => {
  return (
    <div className="container-fluid">
      <div className=" align-items-center">
        <h1 className="h3 mb-0 text-gray-800" style={{ textAlign: "center" }}>
          <b>Agregar Categoria</b>
        </h1>
      </div>

      <div className="row" style={{ marginTop: "3%" }}>
        <div className="col-2"></div>
        <div className="col-8">
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Nombre de la Categoria
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <h1 className="text-center">
              <button type="submit" class="btn btn-primary">
                Agregar
              </button>
            </h1>
          </form>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
};

export default AgregarCategoria;

import React, { useState } from "react";

const AgregarProductos = () => {
  return (
    <div className="container-fluid">
      <div className=" align-items-center">
        <h1 className="h3 mb-0 text-gray-800" style={{ textAlign: "center" }}>
          <b>Agregar Producto</b>
        </h1>
      </div>

      <div className="row" style={{ marginTop: "3%" }}>
        <div className="col-2"></div>
        <div className="col-8">
          <form>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Nombre del Producto
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Marca del Producto
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Precio del Producto
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Stock Actual
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Descripcion del Producto
              </label>
              <textarea
                className="form-control"
                id="floatingTextarea2"
                style={{ height: "100px" }}
              ></textarea>
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Categoria del Producto
              </label>
              <select
                className="form-control"
                aria-label="Default select example"
              >
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Imagen del Producto
              </label>
              <input
                type="file"
                className="form-control"
                id="inputGroupFile01"
                style={{ paddingBottom: "4.3%" }}
              />
            </div>
            <h1 className="text-center mt-4">
              <button type="submit" className="btn btn-primary">
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

export default AgregarProductos;

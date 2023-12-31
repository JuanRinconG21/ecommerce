import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const Registro = () => {
  return (
    <div className="container-fluid" style={{ marginTop: "5%" }}>
      <div class="container">
        <div class="card o-hidden border-0 shadow-lg my-5">
          <div class="card-body p-0">
            <div class="row">
              <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
              <div class="col-lg-7">
                <div class="p-5">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">
                      Crea una Cuenta! <br />
                      Para Iniciar a Comprar
                    </h1>
                  </div>
                  <form class="user">
                    <div class="form-group">
                      <input
                        type="number"
                        class="form-control form-control-user"
                        id="exampleInputEmail"
                        placeholder="Identificacion"
                      />
                    </div>
                    <div class="form-group row">
                      <div class="col-sm-6 mb-3 mb-sm-0">
                        <input
                          type="text"
                          class="form-control form-control-user"
                          id="exampleFirstName"
                          placeholder="Nombre/s"
                        />
                      </div>
                      <div class="col-sm-6">
                        <input
                          type="text"
                          class="form-control form-control-user"
                          id="exampleLastName"
                          placeholder="Apellido/s"
                        />
                      </div>
                    </div>
                    <div class="form-group row">
                      <div class="col-sm-6 mb-3 mb-sm-0">
                        <input
                          type="number"
                          class="form-control form-control-user"
                          id="exampleFirstName"
                          placeholder="Telefono"
                        />
                      </div>
                      <div class="col-sm-6">
                        <input
                          type="text"
                          class="form-control form-control-user"
                          id="exampleLastName"
                          placeholder="Direccion"
                        />
                      </div>
                    </div>

                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control form-control-user"
                        id="exampleInputEmail"
                        placeholder="Correo Electronico"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="password"
                        class="form-control form-control-user"
                        id="exampleInputPassword"
                        placeholder="Contraseña"
                      />
                    </div>

                    <a
                      href="login.html"
                      class="btn btn-primary btn-user btn-block"
                    >
                      Registrar
                    </a>
                  </form>
                  <hr />
                  <NavLink to="/">
                    <div class="text-center">
                      <button class="btn btn-success btn-user btn-block">
                        ¿Ya tienes Cuenta? Logueate
                      </button>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registro;

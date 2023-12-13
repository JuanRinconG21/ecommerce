import { NavLink } from "react-router-dom";
const LoginDash = () => {
  return (
    <div className="container-fluid" style={{ marginTop: "8%" }}>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-10 col-lg-12 col-md-9">
            <div class="card o-hidden border-0 shadow-lg my-5">
              <div class="card-body p-0">
                <div class="row">
                  <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                  <div class="col-lg-6">
                    <div class="p-5">
                      <div class="text-center">
                        <h1 class="h4 text-gray-900 mb-4">
                          Login Para Empleados
                        </h1>
                      </div>
                      <form class="user">
                        <div class="form-group">
                          <input
                            type="email"
                            class="form-control form-control-user"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Ingresa Tu Identificacion"
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
                          href="index.html"
                          class="btn btn-primary btn-user btn-block"
                        >
                          Login
                        </a>
                      </form>
                      <hr />
                      <NavLink to="/">
                        <div class="text-center">
                          <button class="btn btn-success btn-user btn-block">
                            ¿Eres Usuario? Logueate Aca
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
      </div>
    </div>
  );
};

export default LoginDash;

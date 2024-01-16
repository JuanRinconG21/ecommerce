import { NavLink } from "react-router-dom";
import HelperForm from "../../helpers/HelperForm";
import Swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal2);

const Login = () => {
  const { form, cambiar } = HelperForm({});
  const Login = async (e) => {
    e.preventDefault();
    let formulario = form;
    const request = await fetch("http://localhost:2100/usuarios/login", {
      method: "POST",
      body: JSON.stringify(formulario),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await request.json();
    //console.log(data);
    if (data.id == 200) {
      let token = data.token;
      let mensaje = data.mensaje;
      localStorage.setItem("token2", token);
      localStorage.setItem("user2", JSON.stringify(data.usuario));
      MySwal.fire({
        title: <strong> {"Felicidades"} </strong>,
        html: <i>{mensaje}</i>,
        icon: "success",
      });
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else {
      const inputId = document.querySelector("#idUsuario");
      const inputPass = document.querySelector("#Pass");
      inputId.value = "";
      inputPass.value = "";
      let mensaje = data.mensaje;
      MySwal.fire({
        title: <strong> {"Error"}</strong>,
        html: <i>{mensaje}</i>,
        icon: "error",
      });
    }
  };
  return (
    <div className="container-fluid" style={{ marginTop: "8%" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">
                          Bienvenido de Vuelta <br />
                          Inicia Sesion Para Comprar
                        </h1>
                      </div>
                      <form className="user" onSubmit={Login}>
                        <div className="form-group">
                          <input
                            type="number"
                            className="form-control form-control-user"
                            id="idUsuario"
                            name="idUsuario"
                            aria-describedby="emailHelp"
                            placeholder="Ingresa Tu Identificacion"
                            onChange={cambiar}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control form-control-user"
                            id="Pass"
                            name="Pass"
                            placeholder="Contraseña"
                            onChange={cambiar}
                          />
                        </div>
                        <button
                          type="submit"
                          className="btn btn-primary btn-user btn-block"
                        >
                          Login
                        </button>
                      </form>
                      <hr />
                      <NavLink to="/Registro">
                        <div className="text-center">
                          <button className="btn btn-primary btn-user btn-block">
                            Crear una Cuenta
                          </button>
                        </div>
                      </NavLink>
                      <NavLink to="/LoginDash">
                        <div className="text-center">
                          <button className="btn btn-primary btn-user btn-block mt-2">
                            ¿Eres Empleado? Logueate
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

export default Login;

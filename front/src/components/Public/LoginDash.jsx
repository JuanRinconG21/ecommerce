import { NavLink } from "react-router-dom";
import HelperForm from "../../helpers/HelperForm";
import Swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal2);

const LoginDash = () => {
  const { form, cambiar } = HelperForm({});

  const Login = async (e) => {
    e.preventDefault();
    let formulario = form;
    const request = await fetch("http://localhost:2100/empleado/Login", {
      method: "POST",
      body: JSON.stringify(formulario),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await request.json();
    console.log(data);
    if (data.id == 200) {
      let token = data.token;
      let mensaje = data.mensaje;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(data.usuario));
      MySwal.fire({
        title: <strong> {"Felicidades"} </strong>,
        html: <i>{mensaje}</i>,
        icon: "success",
      });
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else {
      const inputId = document.querySelector("#idEmpleado");
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
                      <form class="user" onSubmit={Login}>
                        <div class="form-group">
                          <input
                            type="number"
                            class="form-control form-control-user"
                            id="idEmpleado"
                            name="idEmpleado"
                            aria-describedby="emailHelp"
                            placeholder="Ingresa Tu Identificacion"
                            onChange={cambiar}
                          />
                        </div>
                        <div class="form-group">
                          <input
                            type="password"
                            class="form-control form-control-user"
                            id="Pass"
                            name="Pass"
                            placeholder="Contraseña"
                            onChange={cambiar}
                          />
                        </div>
                        <button
                          type="submit"
                          class="btn btn-primary btn-user btn-block"
                        >
                          Login
                        </button>
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

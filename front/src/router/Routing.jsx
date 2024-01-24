import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
//PUBLICOS
import LayoutPublico from "../components/Public/LayaoutPublico";
import Login from "../components/Public/Login";
import Registro from "../components/Public/Registro";
import Error404 from "../components/Errors/Error404";
//DASHBOARD
import LayoutDash from "../components/DashBoard/LayoutDash";
import Inicio from "../components/DashBoard/Inicio";
import AgregarCategoria from "../components/DashBoard/AgregarCategoria";
import VerCategorias from "../components/DashBoard/VerCategorias";
import VerProductos from "../components/DashBoard/VerProductos";
import AgregarProductos from "../components/DashBoard/AgregarProductos";
import Pedidos from "../components/DashBoard/Pedidos";
import LoginDash from "../components/Public/LoginDash";
import VerMetodos from "../components/DashBoard/VerMetodos";
import AgregarMetodo from "../components/DashBoard/AgregarMetodo";
import AgregarEmpleado from "../components/DashBoard/AgregarEmpleado";
import VerEmpleado from "../components/DashBoard/VerEmpleado";
import LayoutEmpleado from "../components/Public/LayoutEmpleado";

//ECOMMERCE
import InicioEcommerce from "../components/Ecommerce/Inicio";
import Productos from "../components/Ecommerce/Productos";
import LayoutEcommerce from "../components/Ecommerce/LayoutEcommerce";
import SobreNosotros from "../components/Ecommerce/SobreNosotros";
import Carrito from "../components/Ecommerce/Carrito";
import PasarelaPago from "../components/Ecommerce/PasarelaPago";
import Compras from "../components/Ecommerce/Compras";
import Cerrar from "../components/Ecommerce/Cerrar";
//AUTH
import { AuthProvider } from "../context/AuthProvider";
import { AuthProviderEcommerce } from "../context/AuthProviderEcommerce";

const Routing = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/LoginDash" element={<LayoutEmpleado></LayoutEmpleado>}>
            <Route index element={<LoginDash></LoginDash>}></Route>
          </Route>

          <Route path="/DashBoard" element={<LayoutDash></LayoutDash>}>
            <Route index element={<Inicio></Inicio>}></Route>
            <Route
              path="AgregarCategoria"
              element={<AgregarCategoria></AgregarCategoria>}
            ></Route>
            <Route
              path="VerCategorias"
              element={<VerCategorias></VerCategorias>}
            ></Route>
            <Route
              path="AgregarProductos"
              element={<AgregarProductos></AgregarProductos>}
            ></Route>
            <Route
              path="VerProductos"
              element={<VerProductos></VerProductos>}
            ></Route>
            <Route path="Pedidos" element={<Pedidos></Pedidos>}></Route>
            <Route
              path="VerMetodos"
              element={<VerMetodos></VerMetodos>}
            ></Route>
            <Route
              path="AgregarMetodo"
              element={<AgregarMetodo></AgregarMetodo>}
            ></Route>
            <Route
              path="AgregarEmpleado"
              element={<AgregarEmpleado></AgregarEmpleado>}
            ></Route>
            <Route
              path="VerEmpleados"
              element={<VerEmpleado></VerEmpleado>}
            ></Route>
          </Route>
        </Routes>
      </AuthProvider>
      <AuthProviderEcommerce>
        <Routes>
          <Route path="/" element={<LayoutPublico></LayoutPublico>}>
            <Route index element={<Login></Login>}></Route>
            <Route path="Registro" element={<Registro></Registro>}></Route>
          </Route>
          <Route
            path="/Ecommerce"
            element={<LayoutEcommerce></LayoutEcommerce>}
          >
            <Route index element={<InicioEcommerce></InicioEcommerce>}></Route>
            <Route path="Productos" element={<Productos></Productos>}></Route>
            <Route path="Cerrar" element={<Cerrar></Cerrar>}></Route>
            <Route
              path="SobreNosotros"
              element={<SobreNosotros></SobreNosotros>}
            ></Route>
            <Route path="Carrito" element={<Carrito></Carrito>}></Route>
            <Route path="Compras" element={<Compras></Compras>}></Route>
            <Route
              path="Pasarela"
              element={<PasarelaPago></PasarelaPago>}
            ></Route>
          </Route>
        </Routes>
      </AuthProviderEcommerce>
    </BrowserRouter>
  );
};

export default Routing;

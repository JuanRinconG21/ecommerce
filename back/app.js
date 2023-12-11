const express = require("express");
const cors = require("cors");
const RutasCategorias = require("./routes/Categorias");
const RutasMetodos = require("./routes/MetodosPago");
const RutasUsers = require("./routes/Usuarios");
const RutasProductos = require("./routes/Productos");
const RutasEncabezado = require("./routes/Encabezado");
const RutasDetalle = require("./routes/Detalle");
const RutasEmpleados = require("./routes/Empleados");
const app = express();
require("./models/Conexion");
const puerto = 2100;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", RutasCategorias);
app.use("/", RutasMetodos);
app.use("/", RutasUsers);
app.use("/", RutasProductos);
app.use("/", RutasEncabezado);
app.use("/", RutasDetalle);
app.use("/", RutasEmpleados);

app.listen(puerto, () => {
  console.log("Aplicacion ejecutandose en : http://localhost:2100");
});

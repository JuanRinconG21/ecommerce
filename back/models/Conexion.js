const { Sequelize } = require("sequelize");

//INSTANCIAN MODELOS
const Categorias = require("./Categorias");
const Productos = require("./Producto");
const MetodoPago = require("./MetodoPago");
const Rol = require("./Rol");
const Usuarios = require("./Usuarios");
const Estado = require("./Estado");
const Encabezado = require("./Encabezado");
const Detalle = require("./Detalle");
const Empleados = require("./Empleados");

const sequelize = new Sequelize("bd_ecommerce", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

const Cate = Categorias(sequelize, Sequelize);
const Metodo = MetodoPago(sequelize, Sequelize);
const User = Usuarios(sequelize, Sequelize);
const Products = Productos(sequelize, Sequelize);
const Estados = Estado(sequelize, Sequelize);
const Roles = Rol(sequelize, Sequelize);
const Encabeza = Encabezado(sequelize, Sequelize);
const Deta = Detalle(sequelize, Sequelize);
const Emplea = Empleados(sequelize, Sequelize);

sequelize.sync({ force: false }).then(() => {
  console.log("BD SINCRONIZADA");
});

module.exports = {
  sequelize,
  Cate,
  Metodo,
  User,
  Products,
  Estados,
  Roles,
  Encabeza,
  Deta,
  Emplea,
};

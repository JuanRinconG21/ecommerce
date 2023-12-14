const { Sequelize } = require("sequelize");

//INSTANCIAN MODELOS
const Categorias = require("./Categorias");
const Productos = require("./Producto");
const MetodoPago = require("./MetodoPago");
const Usuarios = require("./Usuarios");
const Encabezado = require("./Encabezado");
const Detalle = require("./Detalle");
const Empleados = require("./Empleados");

//CONEXION A LA BASE DE DATOS
const sequelize = new Sequelize("bd_ecommerce", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

//CREACION DE MODELOS
const Cate = Categorias(sequelize, Sequelize);
const Metodo = MetodoPago(sequelize, Sequelize);
const User = Usuarios(sequelize, Sequelize);
const Products = Productos(sequelize, Sequelize);
const Encabeza = Encabezado(sequelize, Sequelize);
const Deta = Detalle(sequelize, Sequelize);
const Emplea = Empleados(sequelize, Sequelize);

/**
 * Funcion que Sincroniza la Base de Datos, Con los Modelos Instanciados
 */
sequelize.sync({ force: false }).then(() => {
  console.log("BD SINCRONIZADA");
});

module.exports = {
  sequelize,
  Cate,
  Metodo,
  User,
  Products,
  Encabeza,
  Deta,
  Emplea,
};

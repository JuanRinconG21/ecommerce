const { Products, sequelize } = require("../models/Conexion");
const { QueryTypes } = require("sequelize");

const ListarProductos = async (req, res) => {
  try {
    const Productos = await Products.findAll();
    res.send({ id: 200, mensaje: Productos });
  } catch (error) {
    res.send({ id: 400, mensaje: error.message });
  }
};

const ListarProductosInnerJoin = async (req, res) => {
  try {
    const ProductosCate = await sequelize.query(
      "SELECT producto.idProducto, producto.Nombre, producto.Marca, producto.Precio, producto.Cantidad, producto.Descripcion, categoria.DescripcionCategoria, producto.Imagen1  FROM producto JOIN categoria ON producto.idCategoria = categoria.idCategoria",
      { type: QueryTypes.SELECT }
    );
    res.send({ id: 200, mensaje: ProductosCate });
  } catch (error) {
    res.send({ id: 400, mensaje: error.message });
  }
};

const ListarProductosXCate = async (req, res) => {
  try {
    let idCate = req.params.id;
    const ProductosCate = await sequelize.query(
      `SELECT producto.idProducto, producto.Nombre, producto.Marca, producto.Precio, producto.Cantidad, producto.Descripcion, categoria.DescripcionCategoria, producto.Imagen1  FROM producto JOIN categoria ON producto.idCategoria = categoria.idCategoria AND categoria.idCategoria=${idCate}`,
      { type: QueryTypes.SELECT }
    );
    res.send({ id: 200, mensaje: ProductosCate });
  } catch (error) {
    res.send({ id: 400, mensaje: error.message });
  }
};

const EliminarProductos = async (req, res) => {
  try {
    const Productos = await Products.destroy({
      where: { idProducto: req.params.id },
    });
    res.send({ id: 200, mensaje: "Producto Eliminado" });
  } catch (error) {
    res.send({ id: 400, mensaje: error.message });
  }
};

const ListarUno = async (req, res) => {
  try {
    const Productos = await Products.findOne({
      where: { idProducto: req.params.id },
    });
    res.send({ id: 200, mensaje: Productos });
  } catch (error) {
    res.send({ id: 400, mensaje: error.message });
  }
};

const ListarProductoXid = async (req, res) => {
  try {
    let idProducto = req.params.id;
    const ProductosCate = await sequelize.query(
      `SELECT producto.idProducto, producto.Nombre, producto.Marca, producto.Precio, producto.Cantidad, producto.Descripcion, categoria.DescripcionCategoria, producto.Imagen1  FROM producto JOIN categoria ON producto.idCategoria = categoria.idCategoria AND producto.idProducto=${idProducto}`,
      { type: QueryTypes.SELECT }
    );
    res.send({ id: 200, mensaje: ProductosCate });
  } catch (error) {
    res.send({ id: 400, mensaje: error.message });
  }
};

module.exports = {
  ListarProductosInnerJoin,
  ListarProductosXCate,
  EliminarProductos,
  ListarProductoXid,
};

const { Products, sequelize } = require("../models/Conexion");
const { QueryTypes, Sequelize } = require("sequelize");

const ListarProductos = async (req, res) => {
  try {
    let pageNumber = parseInt(req.params.pagina);
    let pageSize = 3;
    const offset = (pageNumber - 1) * pageSize;
    const limit = pageSize;

    const Productos = await Products.findAll({ offset: offset, limit: limit });
    res.send({ id: 200, mensaje: Productos });
  } catch (error) {
    res.send({ id: 400, mensaje: error.message });
  }
};

const ListarProductosInnerJoin = async (req, res) => {
  try {
    let pageNumber = parseInt(req.params.pagina);
    let pageSize = 3;
    const offset = (pageNumber - 1) * pageSize;
    const limit = pageSize;
    //CONSULTA
    const query = `
    SELECT producto.idProducto, producto.Nombre, producto.Marca, producto.Precio, producto.Cantidad, producto.Descripcion, categoria.DescripcionCategoria, producto.Imagen1  FROM producto JOIN categoria ON producto.idCategoria = categoria.idCategoria LIMIT :limitValue OFFSET :offsetValue
  `;
    //DATOS DE PAGINACION
    const replacements = {
      limitValue: limit,
      offsetValue: offset,
    };
    console.log("REPLACEMENTS", replacements);
    console.table(replacements);
    const results = await sequelize.query(query, {
      replacements: replacements,
      type: Sequelize.QueryTypes.SELECT,
    });
    res.send({ id: 200, mensaje: results });
  } catch (error) {
    res.send({ id: 400, mensaje: error.message });
  }
};

const ListarProductosInnerJoinNo = async (req, res) => {
  try {
    const ProductosCate = await sequelize.query(
      `SELECT producto.idProducto, producto.Nombre, producto.Marca, producto.Precio, producto.Cantidad, producto.Descripcion, categoria.DescripcionCategoria, producto.Imagen1  FROM producto JOIN categoria ON producto.idCategoria = categoria.idCategoria`,
      { type: QueryTypes.SELECT }
    );
    res.send({ id: 200, mensaje: ProductosCate });
  } catch (error) {
    res.send({ id: 400, mensaje: error.message });
  }
};

const ListarProductosInnerMasVendido = async (req, res) => {
  try {
    const ProductosCate = await sequelize.query(
      `SELECT detalle.idProducto, producto.Nombre, producto.Precio, producto.Descripcion, producto.Imagen1,  SUM(detalle.Cantidad) as totalVendido
      FROM detalle INNER JOIN producto ON detalle.idProducto=producto.idProducto
      GROUP BY idProducto
      ORDER BY totalVendido DESC
      LIMIT 3;`,
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

/* const ListarUno = async (req, res) => {
  try {
    const Productos = await Products.findOne({
      where: { idProducto: req.params.id },
    });
    res.send({ id: 200, mensaje: Productos });
  } catch (error) {
    res.send({ id: 400, mensaje: error.message });
  }
}; */

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

const VerDispo = async (req, res) => {
  try {
    let idProducto = req.params.id;
    let cantidadCliente = req.body.cantidad;
    const disponibilidad = await sequelize.query(
      `SELECT Cantidad FROM producto WHERE producto.idProducto = ${idProducto}`,
      { type: QueryTypes.SELECT }
    );
    //console.log(disponibilidad[0].Cantidad);
    let cantidadFinal = disponibilidad[0].Cantidad - cantidadCliente;
    if (cantidadFinal < 0) {
      res.send({ id: 400, mensaje: false, cantidadFinal: cantidadFinal });
    } else {
      res.send({ id: 200, mensaje: true, cantidadFinal: cantidadFinal });
    }
  } catch (error) {
    res.send({ id: 400, mensaje: error.message });
  }
};

module.exports = {
  ListarProductos,
  ListarProductosInnerJoin,
  ListarProductosInnerJoinNo,
  ListarProductosXCate,
  EliminarProductos,
  ListarProductoXid,
  VerDispo,
  ListarProductosInnerMasVendido,
};

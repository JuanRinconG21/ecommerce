const { Deta, sequelize } = require("../models/Conexion");
const { QueryTypes } = require("sequelize");

const AgregarDetalle = async (req, res) => {
  try {
    const MaximoEncabezado = await sequelize.query(
      "SELECT MAX(idEncabezado) AS maximo FROM encabezado",
      { type: QueryTypes.SELECT }
    );
    const idEncabezado = MaximoEncabezado[0].maximo;
    const Detalle = await Deta.create({
      ...req.body,
      idEncabezado: idEncabezado,
    });
    ///
    //DESCUENTO LAS UNIDADES DEL PRODUCTO
    //Traigo la cantidad Actual del Producto
    const cantidadProducto = await sequelize.query(
      `SELECT producto.Cantidad FROM producto WHERE producto.idProducto = ${req.body.idProducto}`,
      { type: QueryTypes.SELECT }
    );
    //Capturo cantidad capturada del cliente
    let cantidadCliente = req.body.Cantidad;
    //Resto la cantidad Actual de la Comprada
    let nuevaCantidad = cantidadProducto[0].Cantidad - cantidadCliente;
    //Actualizo la info de el producto
    const Actualizacion = await sequelize.query(
      `UPDATE producto SET Cantidad=${nuevaCantidad} WHERE idProducto=${req.body.idProducto}`,
      { type: QueryTypes.UPDATE }
    );
    ///
    //const Encabezados = await Encabeza.create(req.body);
    res.send({ id: 200, mensaje: "Encabezado Agregado Correctamente" });
  } catch (error) {
    res.send({ id: 400, mensaje: error.message });
  }
};

const ListarDetalle = async (req, res) => {
  const Detalles = await sequelize.query(
    "SELECT detalle.idDetalle, detalle.Cantidad, detalle.Totalprod, producto.idProducto, producto.Nombre, detalle.idEncabezado FROM detalle JOIN producto ON detalle.idProducto=producto.idProducto",
    { type: QueryTypes.SELECT }
  );
  res.send({ id: 200, mensaje: Detalles });
};

module.exports = {
  AgregarDetalle,
  ListarDetalle,
};

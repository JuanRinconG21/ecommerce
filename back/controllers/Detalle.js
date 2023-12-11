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

const { Encabeza, sequelize } = require("../models/Conexion");
const { QueryTypes } = require("sequelize");

/* const ListarEncabezados = async (req, res) => {
  try {
    const Encabezados = await Encabeza.findAll();
    res.send({ id: 200, mensaje: Encabezados });
  } catch (error) {
    res.send({ id: 400, mensaje: error.message });
  }
}; */

const ListarEncabezados = async (req, res) => {
  try {
    const Encabezados = await sequelize.query(
      "SELECT encabezado.idEncabezado, encabezado.FechayHora, encabezado.Total, encabezado.idEstado, usuario.Nombres, usuario.Apellidos, metodopago.Descripcion AS 'MetodoPago' FROM encabezado JOIN usuario ON encabezado.idUsuario = usuario.idUsuario JOIN metodopago ON encabezado.idMetodo = metodopago.idMetodo",
      {
        type: QueryTypes.SELECT,
      }
    );
    res.send({ id: 200, mensaje: Encabezados });
  } catch (error) {
    res.send({ id: 400, mensaje: error.message });
  }
};

const AgregarEncabezados = async (req, res) => {
  try {
    const Encabezados = await Encabeza.create(req.body);
    res.send({ id: 200, mensaje: "Encabezado Agregado" });
  } catch (error) {
    res.send({ id: 400, mensaje: error.message });
  }
};

const EditarEstadoEncabezado = async (req, res) => {
  try {
    const Encabezados = await Encabeza.update(
      { idEstado: 1 },
      {
        where: { idEncabezado: req.params.id },
      }
    );
    res.send({ id: 200, mensaje: "Estado Actualizado a Enviado" });
  } catch (error) {
    res.send({ id: 400, mensaje: error.message });
  }
};

/* const ListarUno = async (req, res) => {
  try {
    const Encabezados = await Encabeza.findOne({
      where: { idEncabezado: req.params.id },
    });
    res.send({ id: 200, mensaje: Encabezados });
  } catch (error) {
    res.send({ id: 400, mensaje: error.message });
  }
};
 */
const ListarUno = async (req, res) => {
  try {
    let id = req.params.id;
    const Encabezados = await sequelize.query(
      `SELECT encabezado.idEncabezado, encabezado.FechayHora, encabezado.Total, estado.Descripcion AS 'Estado', usuario.Nombres, usuario.Apellidos, metodopago.Descripcion AS 'MetodoPago' FROM encabezado JOIN estado ON encabezado.idEstado = estado.idEstado JOIN usuario ON encabezado.idUsuario = usuario.idUsuario JOIN metodopago ON encabezado.idMetodo = metodopago.idMetodo WHERE encabezado.idEncabezado=${id}`,
      {
        type: QueryTypes.SELECT,
      }
    );
    res.send({ id: 200, mensaje: Encabezados });
  } catch (error) {}
};

module.exports = {
  ListarEncabezados,
  AgregarEncabezados,
  ListarUno,
  EditarEstadoEncabezado,
};

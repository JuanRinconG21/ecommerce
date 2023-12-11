const { User, sequelize } = require("../models/Conexion");
const { QueryTypes } = require("sequelize");
let bcrypt = require("bcrypt");

const ListarUser = async (req, res) => {
  try {
    const Users = await sequelize.query(
      "SELECT usuario.idUsuario, usuario.Nombres, usuario.Apellidos, usuario.Telefono, usuario.Direccion, usuario.Correo , rol.Descripcion AS 'Rol' FROM usuario JOIN rol ON usuario.idRol=rol.idRol",
      { type: QueryTypes.SELECT }
    );
    res.send({ id: 200, mensaje: Users });
  } catch (error) {
    res.send({ id: 400, mensaje: error.messages });
  }
};

const AgregarUser = async (req, res) => {
  try {
    let datos = req.body;
    let consulta = await User.findOne({
      where: { idUsuario: req.body.idUsuario },
    });
    if (consulta == null) {
      let password = await bcrypt.hash(datos.Pass, 10);
      const Metodos = await User.create({
        ...req.body,
        Pass: password,
      });
      res.send({
        id: 200,
        mensaje: "Usuario Agregado",
      });
    } else {
      res.send({ id: 400, mensaje: "El Usuario Ya Existe" });
    }
  } catch (error) {
    res.send({ id: 400, mensaje: error.message });
  }
};

const EliminarUser = async (req, res) => {
  try {
    const Users = await User.destroy({
      where: { idUsuario: req.params.id },
    });
    res.send({ id: 200, mensaje: "Usuario Eliminado" });
  } catch (error) {
    res.send({ id: 400, mensaje: error.messages });
  }
};

const EditarUser = async (req, res) => {
  try {
    let datos = req.body;
    let password = await bcrypt.hash(datos.Pass, 10);
    const Users = await User.update(
      { ...req.body, Pass: password },
      {
        where: { idUsuario: req.params.id },
      }
    );
    res.send({ id: 200, mensaje: "Usuario Actualizado" });
  } catch (error) {
    res.send({ id: 400, mensaje: error.messages });
  }
};

const ListarUno = async (req, res) => {
  try {
    const Users = await User.findOne({
      where: { idUsuario: req.params.id },
    });
    res.send({ id: 200, mensaje: Users });
  } catch (error) {
    res.send({ id: 400, mensaje: error.messages });
  }
};

module.exports = {
  ListarUser,
  AgregarUser,
  EliminarUser,
  EditarUser,
  ListarUno,
};

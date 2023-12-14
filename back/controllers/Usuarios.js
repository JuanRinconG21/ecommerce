const { User, sequelize } = require("../models/Conexion");
const { QueryTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const ListarUser = async (req, res) => {
  try {
    const Users = await sequelize.query(
      "SELECT usuario.idUsuario, usuario.Nombres, usuario.Apellidos, usuario.Telefono, usuario.Direccion, usuario.Correo FROM usuario",
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
    const Users = await sequelize.query(
      `SELECT usuario.idUsuario, usuario.Nombres, usuario.Apellidos, usuario.Telefono, usuario.Direccion, usuario.Correo FROM usuario WHERE idUsuario=${req.params.id}`,
      { type: QueryTypes.SELECT }
    );
    res.send({ id: 200, mensaje: Users });
  } catch (error) {
    res.send({ id: 400, mensaje: error.messages });
  }
};

/**
 * FUNCION PARA LOGUEARSE
 * @param {Array} req -Peticion con Datos
 * @param {object} res -Respuesta de la Funcion
 * @returns {object} -Si es Correcto ID,MENSAJE,USARIO,TOKEN / Si es Incorrecto ID,MENSAJE
 */
const Login = async (req, res) => {
  try {
    let data = req.body;

    if (!data.idUsuario || !data.Pass) {
      res.send({ id: 400, mensaje: "Email o Contraseña Vacio" });
    }

    let dataUsers = await sequelize.query(
      "SELECT * FROM usuario WHERE idUsuario=" + data.idUsuario,
      { type: QueryTypes.SELECT }
    );
    if (dataUsers[0] == null) {
      res.send({ id: 400, mensaje: "El Usuario No Existe" });
    } else {
      let password = bcrypt.compareSync(data.Pass, dataUsers[0].Pass);
      if (!password) {
        res.send({ id: 400, mensaje: "Contraseña Incorrecta" });
      } else {
        const token = jwt.sign(
          {
            idUsuario: dataUsers[0].idUsuario,
            Nombres: dataUsers[0].Nombres,
            Correo: dataUsers[0].Correo,
          },
          "Jota&Granada21",
          {
            expiresIn: "1d",
          }
        );
        return res.status(200).send({
          id: 200,
          mensaje: "Ingreso Exitoso",
          usuario: {
            idUsuario: dataUsers[0].idUsuario,
            Nombres: dataUsers[0].Nombres,
            Correo: dataUsers[0].Correo,
          },
          token: token,
        });
      }
    }
  } catch (error) {
    res.send({ id: 400, mensaje: error.message });
  }
};

module.exports = {
  ListarUser,
  AgregarUser,
  EliminarUser,
  EditarUser,
  ListarUno,
  Login,
};

const { Emplea, sequelize } = require("../models/Conexion");
const { QueryTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const ListarEmpleados = async (req, res) => {
  try {
    const Users = await sequelize.query(
      "SELECT empleado.idEmpleado, empleado.Nombres, empleado.Apellidos, empleado.Telefono, empleado.Direccion, empleado.Correo , rol.Descripcion AS 'Rol' FROM empleado JOIN rol ON empleado.idRol=rol.idRol",
      { type: QueryTypes.SELECT }
    );
    res.send({ id: 200, mensaje: Users });
  } catch (error) {
    res.send({ id: 400, mensaje: error.messages });
  }
};

const AgregarEmpleados = async (req, res) => {
  try {
    let datos = req.body;
    let consulta = await Emplea.findOne({
      where: { idEmpleado: req.body.idEmpleado },
    });
    if (consulta == null) {
      let password = await bcrypt.hash(datos.Pass, 10);
      const Empleados = await Emplea.create({
        ...req.body,
        Pass: password,
      });
      res.send({
        id: 200,
        mensaje: "Empleado Agregado",
      });
    } else {
      res.send({ id: 400, mensaje: "El Empleado Ya Existe" });
    }
  } catch (error) {
    res.send({ id: 400, mensaje: error.message });
  }
};

const EliminarEmpleados = async (req, res) => {
  try {
    const Empleados = await Emplea.destroy({
      where: { idEmpleado: req.params.id },
    });
    res.send({ id: 200, mensaje: "Empleado Eliminado" });
  } catch (error) {
    res.send({ id: 400, mensaje: error.messages });
  }
};

const EditarEmpleados = async (req, res) => {
  try {
    let datos = req.body;
    let password = await bcrypt.hash(datos.Pass, 10);
    const Empleados = await Emplea.update(
      { ...req.body, Pass: password },
      {
        where: { idEmpleado: req.params.id },
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
      `SELECT empleado.idEmpleado, empleado.Nombres, empleado.Apellidos, empleado.Telefono, empleado.Direccion, empleado.Correo , rol.Descripcion AS 'Rol' FROM empleado JOIN rol ON empleado.idRol=rol.idRol WHERE idEmpleado=${req.params.id}`,
      { type: QueryTypes.SELECT }
    );
    res.send({ id: 200, mensaje: Users });
  } catch (error) {
    res.send({ id: 400, mensaje: error.messages });
  }
};

const Login = async (req, res) => {
  try {
    let data = req.body;

    if (!data.idEmpleado || !data.Pass) {
      res.send({ id: 400, mensaje: "Email o Contraseña Vacio" });
    }

    let dataUsers = await sequelize.query(
      "SELECT * FROM empleado WHERE idEmpleado=" + data.idEmpleado,
      { type: QueryTypes.SELECT }
    );
    if (dataUsers[0] == null) {
      res.send({ id: 400, mensaje: "El Empleado No Existe" });
    } else {
      let password = bcrypt.compareSync(data.Pass, dataUsers[0].Pass);
      if (!password) {
        res.send({ id: 400, mensaje: "Contraseña Incorrecta" });
      } else {
        const token = jwt.sign(
          {
            idUsuario: dataUsers[0].idEmpleado,
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
            idUsuario: dataUsers[0].idEmpleado,
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
  ListarEmpleados,
  AgregarEmpleados,
  EliminarEmpleados,
  EditarEmpleados,
  ListarUno,
  Login,
};

const { Metodo } = require("../models/Conexion");

const ListarMetodos = async (req, res) => {
  try {
    const Metodos = await Metodo.findAll();
    res.send({ id: 200, mensaje: Metodos });
  } catch (error) {
    res.send({ id: 400, mensaje: error.message });
  }
};

const AgregarMetodo = async (req, res) => {
  try {
    const Metodos = await Metodo.create(req.body);
    res.send({ id: 200, mensaje: "Metodo Agregado" });
  } catch (error) {
    res.send({ id: 400, mensaje: error.message });
  }
};

const EliminarMetodo = async (req, res) => {
  try {
    const Metodos = await Metodo.destroy({
      where: { idMetodo: req.params.id },
    });
    res.send({ id: 200, mensaje: "Metodo Eliminado" });
  } catch (error) {
    res.send({ id: 400, mensaje: error.message });
  }
};

const EditarMetodo = async (req, res) => {
  try {
    const Metodos = await Metodo.update(req.body, {
      where: { idMetodo: req.params.id },
    });
    res.send({ id: 200, mensaje: "Metodo Actualizado" });
  } catch (error) {
    res.send({ id: 400, mensaje: error.message });
  }
};

const ListarUno = async (req, res) => {
  try {
    const Metodos = await Metodo.findOne({
      where: { idMetodo: req.params.id },
    });
    res.send({ id: 200, mensaje: Metodos });
  } catch (error) {
    res.send({ id: 400, mensaje: error.message });
  }
};

module.exports = {
  ListarMetodos,
  AgregarMetodo,
  EliminarMetodo,
  EditarMetodo,
  ListarUno,
};

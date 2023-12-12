const { Cate } = require("../models/Conexion");

const ListarCategoria = async (req, res) => {
  try {
    const Categorias = await Cate.findAll();
    res.send({ id: 200, mensaje: Categorias });
  } catch (error) {
    res.send({ id: 400, mensaje: error.message });
  }
};

const AgregarCategoria = async (req, res) => {
  try {
    const Categorias = await Cate.create(req.body);
    res.send({ id: 200, mensaje: "Categoria Agregada" });
  } catch (error) {
    res.send({ id: 400, mensaje: error.message });
  }
};

const EliminarCategoria = async (req, res) => {
  try {
    const Categorias = await Cate.destroy({
      where: { idCategoria: req.params.id },
    });
    res.send({ id: 200, mensaje: "Categoria Eliminada" });
  } catch (error) {
    res.send({ id: 400, mensaje: error.message });
  }
};

const EditarCategoria = async (req, res) => {
  try {
    const Categorias = await Cate.update(req.body, {
      where: { idCategoria: req.params.id },
    });
    res.send({ id: 200, mensaje: "Categoria Actualizada" });
  } catch (error) {
    res.send({ id: 400, mensaje: error.message });
  }
};

const ListarUno = async (req, res) => {
  try {
    const Categorias = await Cate.findOne({
      where: { idCategoria: req.params.id },
    });
    res.send({ id: 200, mensaje: Categorias });
  } catch (error) {
    res.send({ id: 400, mensaje: error.message });
  }
};

module.exports = {
  ListarCategoria,
  AgregarCategoria,
  EliminarCategoria,
  EditarCategoria,
  ListarUno,
};

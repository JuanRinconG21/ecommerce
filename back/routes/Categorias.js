const express = require("express");
const router = express.Router();
const CategoriasController = require("../controllers/Categorias");

router.get("/categorias/listar", CategoriasController.ListarCategoria);

router.post("/categorias/Agregar", CategoriasController.AgregarCategoria);

router.put("/categorias/Editar/:id", CategoriasController.EditarCategoria);

router.delete("/categorias/eliminar/:id",CategoriasController.EliminarCategoria);

router.get("/categorias/listarUno/:id", CategoriasController.ListarUno);

module.exports = router;

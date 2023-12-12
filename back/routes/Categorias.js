const express = require("express");
const router = express.Router();
const CategoriasController = require("../controllers/Categorias");
const auth = require("../controllers/auth");

router.get("/categorias/listar", auth, CategoriasController.ListarCategoria);

router.post("/categorias/Agregar", auth, CategoriasController.AgregarCategoria);

router.put(
  "/categorias/Editar/:id",
  auth,
  CategoriasController.EditarCategoria
);

router.delete(
  "/categorias/eliminar/:id",
  auth,
  CategoriasController.EliminarCategoria
);

router.get("/categorias/listarUno/:id", auth, CategoriasController.ListarUno);

module.exports = router;

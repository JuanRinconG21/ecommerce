const express = require("express");
const router = express.Router();
const MetodosController = require("../controllers/MetodosPago");
const auth = require("../controllers/auth");

router.get("/metodos/listar", auth, MetodosController.ListarMetodos);

router.post("/metodos/Agregar", auth, MetodosController.AgregarMetodo);

router.put("/metodos/Editar/:id", auth, MetodosController.EditarMetodo);

router.delete("/metodos/eliminar/:id", auth, MetodosController.EliminarMetodo);

router.get("/metodos/listarUno/:id", auth, MetodosController.ListarUno);

module.exports = router;

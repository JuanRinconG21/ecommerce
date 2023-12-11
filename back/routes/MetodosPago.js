const express = require("express");
const router = express.Router();
const MetodosController = require("../controllers/MetodosPago");

router.get("/metodos/listar", MetodosController.ListarMetodos);

router.post("/metodos/Agregar", MetodosController.AgregarMetodo);

router.put("/metodos/Editar/:id", MetodosController.EditarMetodo);

router.delete("/metodos/eliminar/:id", MetodosController.EliminarMetodo);

router.get("/metodos/listarUno/:id", MetodosController.ListarUno);

module.exports = router;

const express = require("express");
const router = express.Router();
const UsuariosController = require("../controllers/Usuarios");

router.get("/usuarios/listar", UsuariosController.ListarUser);

router.post("/usuarios/Agregar", UsuariosController.AgregarUser);

router.put("/usuarios/Editar/:id", UsuariosController.EditarUser);

router.delete("/usuarios/eliminar/:id", UsuariosController.EliminarUser);

router.get("/usuarios/listarUno/:id", UsuariosController.ListarUno);

module.exports = router;

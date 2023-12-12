const express = require("express");
const router = express.Router();
const UsuariosController = require("../controllers/Usuarios");
const auth = require("../controllers/auth");

router.get("/usuarios/listar", auth, UsuariosController.ListarUser);

router.post("/usuarios/Agregar", auth, UsuariosController.AgregarUser);

router.put("/usuarios/Editar/:id", auth, UsuariosController.EditarUser);

router.delete("/usuarios/eliminar/:id", auth, UsuariosController.EliminarUser);

router.get("/usuarios/listarUno/:id", auth, UsuariosController.ListarUno);

router.post("/usuarios/login", UsuariosController.Login);

module.exports = router;

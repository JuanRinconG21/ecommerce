const express = require("express");
const router = express.Router();
const ControllerDetalle = require("../controllers/Detalle");
const auth = require("../controllers/auth");

router.post("/detalle/Agregar",auth, ControllerDetalle.AgregarDetalle);
router.get("/detalle/listar",auth, ControllerDetalle.ListarDetalle);

module.exports = router;

const express = require("express");
const router = express.Router();
const ControllerDetalle = require("../controllers/Detalle");

router.post("/detalle/Agregar", ControllerDetalle.AgregarDetalle);
router.get("/detalle/listar", ControllerDetalle.ListarDetalle);

module.exports = router;

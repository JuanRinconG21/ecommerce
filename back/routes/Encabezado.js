const express = require("express");
const router = express.Router();
const controllerEncabezado = require("../controllers/Encabezado");

router.get("/encabezado/listar", controllerEncabezado.ListarEncabezados);
router.post("/encabezados/agregar", controllerEncabezado.AgregarEncabezados);
router.put(
  "/encabezados/actualizarEstado/:id",
  controllerEncabezado.EditarEstadoEncabezado
);
router.get("/encabezado/listarUno/:id", controllerEncabezado.ListarUno);

module.exports = router;

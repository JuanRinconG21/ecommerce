const express = require("express");
const router = express.Router();
const controllerEncabezado = require("../controllers/Encabezado");
const auth = require("../controllers/auth");

router.get("/encabezado/listar", auth, controllerEncabezado.ListarEncabezados);
router.post(
  "/encabezados/agregar",
  auth,
  controllerEncabezado.AgregarEncabezados
);
router.put(
  "/encabezados/actualizarEstado/:id",
  auth,
  controllerEncabezado.EditarEstadoEncabezado
);
router.get("/encabezado/listarUno/:id", auth, controllerEncabezado.ListarUno);

module.exports = router;

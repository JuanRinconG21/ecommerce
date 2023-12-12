const express = require("express");
const router = express.Router();
const controllerEmpleados = require("../controllers/Empleado");
const auth = require("../controllers/auth");

router.get("/empleado/listar", auth, controllerEmpleados.ListarEmpleados);
router.post("/empleado/Agregar", auth, controllerEmpleados.AgregarEmpleados);
router.put(
  "/empleado/Actualizar/:id",
  auth,
  controllerEmpleados.EditarEmpleados
);
router.delete(
  "/empleado/Eliminar/:id",
  auth,
  controllerEmpleados.EliminarEmpleados
);
router.get("/empleado/ListarUno/:id", auth, controllerEmpleados.ListarUno);
router.post("/empleado/Login", controllerEmpleados.Login);

module.exports = router;

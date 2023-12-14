const jwt = require("jsonwebtoken");

/**
 * Middleware de Auntenticacion para Validar EL Token de Verificacion
 * @param {Array} req -Solicitud del Cliente
 * @param {Object} res -Respuesta del Servidos
 * @param {*} next -Funcion que llama el Siguiente Middleware
 * @returns {Json} -400 Si es Incorrecto / Si es Correcto continua y Ejecuta el Siguiente Middleware
 */
const auth = (req, res, next) => {
  //VERIFICA EL TOKEN VALIDO EN EL HEADER "AUTORIZATION"
  const jwtToken = req.header("Authorization");
  if (!jwtToken) {
    return res.status(400).send({
      id: 400,
      mensaje: "Acceso denegado, No tiene token valido",
    });
  }
  try {
    const payload = jwt.verify(jwtToken, "Jota&Granada21");
    req.user = payload;
    next();
  } catch (error) {
    return res.status(400).send({
      error: error.message,
    });
  }
};

module.exports = auth;

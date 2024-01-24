const { Encabeza, sequelize } = require("../models/Conexion");
const { QueryTypes } = require("sequelize");
const nodemailer = require("nodemailer");

/* const ListarEncabezados = async (req, res) => {
  try {
    const Encabezados = await Encabeza.findAll();
    res.send({ id: 200, mensaje: Encabezados });
  } catch (error) {
    res.send({ id: 400, mensaje: error.message });
  }
}; */

const ListarEncabezados = async (req, res) => {
  try {
    const Encabezados = await sequelize.query(
      "SELECT encabezado.idEncabezado, encabezado.FechayHora, encabezado.Total, encabezado.idEstado, usuario.Nombres, usuario.Apellidos, metodopago.Descripcion AS 'MetodoPago' FROM encabezado JOIN usuario ON encabezado.idUsuario = usuario.idUsuario JOIN metodopago ON encabezado.idMetodo = metodopago.idMetodo",
      {
        type: QueryTypes.SELECT,
      }
    );
    res.send({ id: 200, mensaje: Encabezados });
  } catch (error) {
    res.send({ id: 400, mensaje: error.message });
  }
};

const ListarEncabezadosUser = async (req, res) => {
  try {
    const Encabezados = await sequelize.query(
      "SELECT encabezado.idEncabezado, encabezado.FechayHora, encabezado.Total, encabezado.idEstado, usuario.Nombres, usuario.Apellidos, metodopago.Descripcion AS 'MetodoPago' FROM encabezado JOIN usuario ON encabezado.idUsuario = usuario.idUsuario JOIN metodopago ON encabezado.idMetodo = metodopago.idMetodo WHERE ",
      {
        type: QueryTypes.SELECT,
      }
    );
    res.send({ id: 200, mensaje: Encabezados });
  } catch (error) {
    res.send({ id: 400, mensaje: error.message });
  }
};

const AgregarEncabezados = async (req, res) => {
  try {
    const Encabezados = await Encabeza.create(req.body);
    res.send({ id: 200, mensaje: "Encabezado Agregado" });
  } catch (error) {
    res.send({ id: 400, mensaje: error.message });
  }
};

const EditarEstadoEncabezado = async (req, res) => {
  try {
    const Encabezados = await Encabeza.update(
      { idEstado: 1 },
      {
        where: { idEncabezado: req.params.id },
      }
    );
    res.send({ id: 200, mensaje: "Estado Actualizado a Enviado" });
  } catch (error) {
    res.send({ id: 400, mensaje: error.message });
  }
};

/* const ListarUno = async (req, res) => {
  try {
    const Encabezados = await Encabeza.findOne({
      where: { idEncabezado: req.params.id },
    });
    res.send({ id: 200, mensaje: Encabezados });
  } catch (error) {
    res.send({ id: 400, mensaje: error.message });
  }
};
 */
const ListarUno = async (req, res) => {
  try {
    let id = req.params.id;
    const Encabezados = await sequelize.query(
      `SELECT encabezado.idEncabezado, encabezado.FechayHora, encabezado.Total, estado.Descripcion AS 'Estado', usuario.Nombres, usuario.Apellidos, metodopago.Descripcion AS 'MetodoPago' FROM encabezado JOIN estado ON encabezado.idEstado = estado.idEstado JOIN usuario ON encabezado.idUsuario = usuario.idUsuario JOIN metodopago ON encabezado.idMetodo = metodopago.idMetodo WHERE encabezado.idEncabezado=${id}`,
      {
        type: QueryTypes.SELECT,
      }
    );
    res.send({ id: 200, mensaje: Encabezados });
  } catch (error) {}
};

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: "jotacodigos@gmail.com",
    pass: "hfub ayrx cvip ymrv",
  },
});
const enviarCorreo = async (req, res) => {
  // send mail with defined transport object

  const info = await transporter.sendMail({
    from: '"Prueba de Envio 👻" <jotacodigos@gmail.com>', // sender address
    to: "juan3407rincon@gmail.com, mafevillada030417@gmail.com", // list of receivers
    subject: "Hola Compañerita ✔ 👋🏾🫂", // Subject line
    text: "Espero que te encuentres bien :)", // plain text body
    html: "<h1>Un Saludito</h1><br></br><h3>Que descanse, Mañana nos vemos y le doy un abracito <3 </h3><br></br><p>Si es que Quiere </p>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  //
  // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
  //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
  //       <https://github.com/forwardemail/preview-email>
  //
};

module.exports = {
  ListarEncabezados,
  AgregarEncabezados,
  ListarUno,
  EditarEstadoEncabezado,
  enviarCorreo,
};

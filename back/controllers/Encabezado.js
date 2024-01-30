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
      `SELECT encabezado.idEncabezado, encabezado.FechayHora, encabezado.Total, encabezado.idEstado, usuario.Nombres, usuario.Apellidos, metodopago.Descripcion AS 'MetodoPago' FROM encabezado JOIN usuario ON encabezado.idUsuario = usuario.idUsuario JOIN metodopago ON encabezado.idMetodo = metodopago.idMetodo WHERE encabezado.idUsuario=${req.params.id} `,
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
  //CAPTURAR INFO DEL USER
  try {
    let id = req.body.id;
    let idMetodo = req.body.idMetodo;
    const User = await sequelize.query(
      `SELECT * FROM usuario WHERE idUsuario=${id}`,
      {
        type: QueryTypes.SELECT,
      }
    );
    const Metodo = await sequelize.query(
      `SELECT * FROM metodopago WHERE idMetodo = ${idMetodo} `,
      {
        type: QueryTypes.SELECT,
      }
    );

    const Enacabezado = await sequelize.query(
      `SELECT MAX(idEncabezado) AS Maximo  FROM encabezado`,
      {
        type: QueryTypes.SELECT,
      }
    );
    const TotalEnca = await sequelize.query(
      `SELECT Total, FechayHora FROM encabezado WHERE idEncabezado=${Enacabezado[0].Maximo}`,
      {
        type: QueryTypes.SELECT,
      }
    );
    const formatearPrecio = (precio) => {
      return precio.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };
    const Detalle = await sequelize.query(
      `SELECT producto.Nombre, detalle.Cantidad, producto.Precio, detalle.Totalprod FROM producto INNER JOIN detalle ON detalle.idProducto = producto.idProducto INNER JOIN encabezado ON encabezado.idEncabezado = detalle.idEncabezado AND detalle.idEncabezado = ${Enacabezado[0].Maximo}`,
      {
        type: QueryTypes.SELECT,
      }
    );

    //console.log(Detalle);
    let detalleTabla = "";
    for (let i = 0; i < Detalle.length; i++) {
      detalleTabla =
        detalleTabla +
        `<tr>
      <td>${Detalle[i].Nombre}</td>
      <td>${Detalle[i].Cantidad}</td>
      <td>$${Detalle[i].Precio.toString().replace(
        /\B(?=(\d{3})+(?!\d))/g,
        "."
      )}</td>
      <td>$${Detalle[i].Totalprod.toString().replace(
        /\B(?=(\d{3})+(?!\d))/g,
        "."
      )}</td>
    </tr>`;
    }
    //console.log("LA TABLA =", detalleTabla);
    // send mail with defined transport object
    const html = `<!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Confirmación de Compra</title>
        <style>
          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
            overflow-x: auto; /* Agrega barras de desplazamiento horizontal si la tabla es demasiado ancha */
          }
    
          th,
          td {
            border: 1px solid #ddd;
            padding: 12px;
            text-align: left;
            white-space: nowrap; /* Evita el desbordamiento de texto en varias líneas */
            font-size: 70%;
          }
    
          th {
            background-color: #722cce;
            color: #fff;
          }
    
          td {
            background-color: #f2f2f2;
          }
          body {
            font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f2f2f2;
          }
          .container {
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 8px;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            overflow: hidden;
          }
          h2 {
            color: white;
          }
    
          h3 {
            color: #722cce;
          }
          p,
          strong {
            color: #555;
          }
          strong {
            font-weight: bold;
          }
          .header {
            background-color: #722cce;
            color: #fff;
            text-align: center;
            padding: 10px;
            border-radius: 8px 8px 0 0;
          }
          .thank-you {
            text-align: center;
            color: #722cce;
            font-size: 1.2em;
            font-weight: bold;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>Confirmación de Compra</h2>
          </div>
    
          <p class="thank-you">
            ¡Gracias por tu compra en <strong>GAMESOFT</strong>!
          </p>
    
          <h3>Detalles de la Tienda</h3>
          <p>Teléfono: <strong>3234681033</strong></p>
          <p>Dirección: <strong>EL BERLIN, Cartago, Valle del Cauca</strong></p>
    
          <h3>Detalles de la Compra</h3>
          <p>
            Total a Pagar:
            <strong>${TotalEnca[0].Total.toString().replace(
              /\B(?=(\d{3})+(?!\d))/g,
              "."
            )}</strong>
          </p>
          <p>Fecha y Hora de la Compra: <strong>${
            TotalEnca[0].FechayHora
          }</strong></p>
    
          <h3>Datos del Usuario</h3>
          <p>Identificación: <strong>${req.body.id}</strong></p>
          <p>Nombre: <strong>${User[0].Nombres}</strong></p>
          <p>Apellido: <strong>${User[0].Apellidos}</strong></p>
          <p>Teléfono: <strong>${User[0].Telefono}</strong></p>
          <p>Dirección: <strong>${User[0].Direccion}</strong></p>
          <p>Ciudad: <strong>${User[0].Ciudad}</strong></p>
    
          <h3>Resumen de Compra</h3>
          <table>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio Unitario</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <!-- Ejemplo de un producto, puedes repetir esta fila para cada producto -->
              ${detalleTabla}
              <!-- Puedes agregar más filas según la cantidad de productos -->
            </tbody>
          </table>
    
          <h3>Método de Pago</h3>
          <p>Método de Pago: <strong>${Metodo[0].Descripcion}</strong></p>
    
          <h3>Total de Compra</h3>
          <p>Total: <strong>${TotalEnca[0].Total.toString().replace(
            /\B(?=(\d{3})+(?!\d))/g,
            "."
          )}</strong></p>
    
          <p class="thank-you">
            ¡Gracias por elegirnos! Esperamos que disfrutes de tu compra.
          </p>
        </div>
      </body>
    </html>
    
    `;

    const info = await transporter.sendMail({
      from: `SOPORTE DE COMPRA #${Enacabezado[0].Maximo} <jotacodigos@gmail.com>`, // sender address
      to: `juan3407rincon@gmail.com,${User[0].Correo}, berserkups@gmail.com`, // list of receivers
      subject: "Confirmación de Compra ✔", // Subject line
      text: "Espero que te encuentres bien :)", // plain text body
      html: html, // html body
    });
    res.send({ id: 200, mensaje: "Soporte Enviado" });
    console.log("Message sent: %s", info.messageId);
    console.log(info);
  } catch (error) {
    res.send({ id: 400, mensaje: `Error: ${error.message}` });
  }
};

module.exports = {
  ListarEncabezados,
  AgregarEncabezados,
  ListarUno,
  EditarEstadoEncabezado,
  enviarCorreo,
  ListarEncabezadosUser,
};

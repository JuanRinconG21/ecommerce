const Producto = require("./Producto");
const Encabezado = require("./Encabezado");

module.exports = (sequelize, type) => {
  return sequelize.define(
    "detalle",
    {
      idDetalle: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      Cantidad: {
        type: type.INTEGER,
      },
      Totalprod: {
        type: type.INTEGER,
      },
      idProducto: {
        type: type.INTEGER,
        allowNull: false,
        references: {
          model: "producto",
          key: "idProducto",
        },
      },
      idEncabezado: {
        type: type.INTEGER,
        allowNull: false,
        references: {
          model: "encabezado",
          key: "idEncabezado",
        },
      },
    },
    {
      timestamps: false, // Desactiva la funcionalidad de timestamps
      tableName: "detalle",
    }
  );
};

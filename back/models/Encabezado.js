const Usuario = require("./Usuarios");
module.exports = (sequelize, type) => {
  return sequelize.define(
    "encabezado",
    {
      idEncabezado: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      FechayHora: {
        type: type.DATE,
      },
      Total: {
        type: type.INTEGER,
      },
      idEstado: {
        type: type.INTEGER,
      },
      idUsuario: {
        type: type.INTEGER,
        allowNull: false,
        references: {
          model: "usuario",
          key: "idUsuario",
        },
      },
      idMetodo: {
        type: type.INTEGER,
        allowNull: false,
        references: {
          model: "metodopago",
          key: "idMetodo",
        },
      },
    },
    {
      timestamps: false, // Desactiva la funcionalidad de timestamps
      tableName: "encabezado",
    }
  );
};

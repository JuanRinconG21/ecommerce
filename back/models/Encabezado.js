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
        onDelete: "CASCADE", // Si se elimina una categoría, se eliminarán los productos relacionados
        onUpdate: "CASCADE",
      },
      idMetodo: {
        type: type.INTEGER,
        allowNull: false,
        references: {
          model: "metodopago",
          key: "idMetodo",
        },
        onDelete: "CASCADE", // Si se elimina una categoría, se eliminarán los productos relacionados
        onUpdate: "CASCADE",
      },
    },
    {
      timestamps: false, // Desactiva la funcionalidad de timestamps
      tableName: "encabezado",
    }
  );
};

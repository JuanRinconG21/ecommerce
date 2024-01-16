const Categoria = require("./Categorias");
module.exports = (sequelize, type) => {
  return sequelize.define(
    "producto",
    {
      idProducto: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      Nombre: {
        type: type.STRING(256),
      },
      Marca: {
        type: type.STRING(256),
      },
      Precio: {
        type: type.INTEGER,
      },
      Cantidad: {
        type: type.INTEGER,
      },
      Descripcion: {
        type: type.STRING(256),
      },
      idCategoria: {
        type: type.INTEGER,
        allowNull: false,
        references: {
          model: "categoria",
          key: "idCategoria",
        },
        onDelete: "CASCADE", // Si se elimina una categoría, se eliminarán los productos relacionados
        onUpdate: "CASCADE",
      },
      Imagen1: {
        type: type.STRING(256),
      },
    },
    {
      timestamps: false, // Desactiva la funcionalidad de timestamps
      tableName: "producto",
    }
  );
};

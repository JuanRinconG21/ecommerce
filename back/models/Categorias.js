module.exports = (sequelize, type) => {
  return sequelize.define(
    "categoria",
    {
      idCategoria: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      DescripcionCategoria: {
        type: type.STRING(256),
      },
    },
    {
      timestamps: false, // Desactiva la funcionalidad de timestamps
      tableName: "categoria",
    }
  );
};

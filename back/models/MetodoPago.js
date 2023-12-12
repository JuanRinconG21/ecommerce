module.exports = (sequelize, type) => {
  return sequelize.define(
    "metodopago",
    {
      idMetodo: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      Descripcion: {
        type: type.STRING(256),
      },
    },
    {
      timestamps: false, // Desactiva la funcionalidad de timestamps
      tableName: "metodopago",
    }
  );
};

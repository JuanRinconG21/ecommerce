module.exports = (sequelize, type) => {
  return sequelize.define(
    "estado",
    {
      idEstado: {
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
      tableName: "estado",
    }
  );
};

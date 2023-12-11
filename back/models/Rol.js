module.exports = (sequelize, type) => {
  return sequelize.define(
    "rol",
    {
      idRol: {
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
      tableName: "rol",
    }
  );
};

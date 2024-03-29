module.exports = (sequelize, type) => {
  return sequelize.define(
    "usuario",
    {
      idUsuario: {
        type: type.INTEGER,
        primaryKey: true,
      },
      Nombres: {
        type: type.STRING(256),
      },
      Apellidos: {
        type: type.STRING(256),
      },
      Telefono: {
        type: type.STRING(256),
      },
      Direccion: {
        type: type.STRING(256),
      },
      Correo: {
        type: type.STRING(256),
      },
      Pass: {
        type: type.STRING(256),
      },
      Ciudad: {
        type: type.STRING(256),
      },
    },
    {
      timestamps: false, // Desactiva la funcionalidad de timestamps
      tableName: "usuario",
    }
  );
};

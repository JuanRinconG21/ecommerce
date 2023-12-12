const Rol = require("./Rol");
module.exports = (sequelize, type) => {
  return sequelize.define(
    "empleado",
    {
      idEmpleado: {
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
      idRol: {
        type: type.INTEGER,
        allowNull: false,
        references: {
          model: "rol",
          key: "idRol",
        },
      },
    },
    {
      timestamps: false, // Desactiva la funcionalidad de timestamps
      tableName: "empleado",
    }
  );
};

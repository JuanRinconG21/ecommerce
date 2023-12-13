const VerEmpleado = () => {
  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Usuarios</h1>
      </div>

      <div className="row">
        <div className="col-12">
          <table className="table ">
            <thead
              className="text-center bg-primary"
              style={{ color: "white" }}
            >
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre/s</th>
                <th scope="col">Apellido/s</th>
                <th scope="col">Telefono</th>
                <th scope="col">Direccion</th>
                <th scope="col">Correo</th>

                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr>
                <th scope="row">1</th>
                <td>Juan Jose</td>
                <td>Rincon Gomez</td>
                <td>3234681033</td>
                <td>Calle 16c #17-03</td>
                <td>juan3407rincon@gmail.com</td>

                <td>
                  <button className="btn btn-danger mr-2">
                    <i class="fas fa-trash"></i>
                  </button>
                  <button className="btn btn-warning mr-2">
                    <i class="fas fa-edit"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Juan Pablo</td>
                <td>Granada </td>
                <td>3234681033</td>
                <td>Calle 12c #19-04</td>
                <td>jpgranada@gmail.com</td>
                <td>
                  <button className="btn btn-danger mr-2">
                    <i class="fas fa-trash"></i>
                  </button>
                  <button className="btn btn-warning mr-2">
                    <i class="fas fa-edit"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VerEmpleado;

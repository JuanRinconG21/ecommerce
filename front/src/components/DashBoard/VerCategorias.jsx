const VerCategorias = () => {
  return (
    <div className="container-fluid">
      <div className=" align-items-center mb-4">
        <h1 className="h3 mb-0 text-gray-800" style={{ textAlign: "center" }}>
          <b>CATEGORIAS</b>
        </h1>
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
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr>
                <th scope="row">2</th>
                <td>Juan Pablo</td>
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
                <th scope="row">21</th>
                <td>Juan Jose</td>
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

export default VerCategorias;

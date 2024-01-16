const Demostracion = () => {
  return <>
  <div className="container-fluid">
                <form
                  action=""
                  method="post"
                  onSubmit={(e) => {
                    e.preventDefault();
                    let nombre = document.querySelector("#nomPolitica");
                    let nemotecnico = document.querySelector("#nemotecnico");
                    let years = document.querySelector("#years");
                    let fechaInicio = document.querySelector("#fechaInicio");
                    let fechaFin = document.querySelector("#fechaFin");
                    let sectorLider = document.querySelector("#sectorLiderPP");
                    let costo = document.querySelector("#costoPP");
                    let imagen = document.querySelector("#imagen");
                    let fechaAprobacion =
                      document.querySelector("#fechaAprobacion");
                    let entidadLider =
                      document.querySelector("#entidadLiderPP");
                    if (
                      nombre.value.length > 0 &&
                      nemotecnico.value.length > 0 &&
                      years.value.length > 0 &&
                      fechaInicio.value.length > 0 &&
                      fechaFin.value.length > 0 &&
                      sectorLider.value.length > 0 &&
                      costo.value.length > 0 &&
                      fechaAprobacion.value.length &&
                      entidadLider.length > 0
                    ) {
                      const formData = new FormData();
                      formData.append("nombre", nombre.value);
                      formData.append("nemotecnico", nemotecnico.value);
                      formData.append("years", years.value);
                      formData.append("fecha_inicio", fechaInicio.value);
                      formData.append("fecha_fin", fechaFin.value);
                      formData.append("sector_lider", sectorLider.value);
                      formData.append("entidad_lider", entidadLider.value);
                      formData.append("costo", costo.value);
                      formData.append(
                        "fecha_aprobacion",
                        fechaAprobacion.value
                      );
                      formData.append("imagen", imagen.files[0]); // Aquí se adjunta el archivo de imagen

                      formData.append("estado", "por aprobar");
                      fetch(
                        "http://127.0.0.1:3900/api/politicasPublicas/agregar",
                        {
                          method: "POST",
                          body: formData,
                        }
                      )
                        .then((response) => {
                          return response.json();
                        })
                        .then((res) => {
                          setIncersion(true);
                          const checkboxes = document.querySelectorAll(
                            'input[type="checkbox"]:checked'
                          );
                          let idPolitica = res.doc[0].max;
                          for (let i = 0; i < checkboxes.length; i++) {
                            // Envía los valores seleccionados al servidor, por ejemplo, como un JSON en el cuerpo de la solicitud
                            fetch(
                              "http://127.0.0.1:3900/api/politicaHasSectores/agregar",
                              {
                                method: "POST",
                                body: sector=${checkboxes[i].value}&id_politica=${idPolitica},
                                headers: {
                                  "Content-Type":
                                    "application/x-www-form-urlencoded",
                                },
                              }
                            )
                              .then((response) => response.json())
                              .then((data) => {
                                // Maneja la respuesta del servidor
                              })
                              .catch((error) => {
                                // Maneja errores
                              });
                          }
                        });
                    } else {
                      alert("revisar los datos");
                    }
                  }}
                >
                  <div className="row mb-3">
                    <div className="col">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                      >
                        Nombre de la politica <b className="text-danger">*</b>
                      </label>
                      <textarea
                        className="form-control"
                        name=""
                        id="nomPolitica"
                        rows="2"
                        style={{ resize: "none" }}
                      ></textarea>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-4">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                      >
                        Nemotécnico - Documento CONPES D.C.N{" "}
                        <b className="text-danger">*</b>
                      </label>
                      <div className="col d-flex">
                        <input
                          type="text"
                          className="form-control w-25 me-3"
                          id="nemotecnico"
                        />
                        <input
                          type="number"
                          className="form-control w-25 "
                          placeholder="Años"
                          id="years"
                        />
                      </div>
                    </div>
                    <div className="col-5">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label ms-4"
                      >
                        Vigencia de la politica
                      </label>
                      <div className="col d-flex">
                        <label
                          htmlFor="exampleInputPassword1"
                          className="form-label w-25 text-center"
                        >
                          Inicio <b className="text-danger">*</b>
                        </label>
                        <input
                          type="date"
                          className="form-control w-50 "
                          id="fechaInicio"
                        />
                        <label
                          htmlFor="exampleInputPassword1"
                          className="form-label w-25 text-center"
                        >
                          Fin <b className="text-danger">*</b>
                        </label>
                        <input
                          type="date"
                          className="form-control w-50"
                          id="fechaFin"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                      >
                        Sector lider <b className="text-danger">*</b>
                      </label>
                      <select
                        name=""
                        id="sectorLiderPP"
                        className="form-select"
                      >
                        {sector.map((element) => (
                          <option
                            key={element.id}
                            value={element.Nombre}
                            id="sectorLider"
                          >
                            {element.Nombre}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                      >
                        Entidad lider <b className="text-danger">*</b>
                      </label>
                      <select
                        name=""
                        id="entidadLiderPP"
                        className="form-select"
                      >
                        {entidad.map((element) => (
                          <option
                            key={element.id}
                            value={element.Nombre}
                            id="sectorEntidad"
                          >
                            {element.Nombre}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-4">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                      >
                        Costo total de la politica{" "}
                        <b className="text-danger">*</b>
                      </label>
                      <div className="input-group mb-3">
                        <span className="input-group-text">$</span>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Amount (to the nearest dollar)"
                          id="costoPP"
                        />
                      </div>
                    </div>
                    <div className="col-5 ms-4">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label "
                      >
                        Fecha aprobación <b className="text-danger">*</b>
                      </label>
                      <input
                        type="date"
                        className="form-control w-50"
                        id="fechaAprobacion"
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label "
                      >
                        Imagen
                      </label>
                      <input
                        type="file"
                        name="imagen"
                        id="imagen"
                        className="form-control w-50"
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label "
                    >
                      Sectores corresponsables
                    </label>
                    <div className="card w-50 px-0 bg-primary">
                      <div
                        className="card m-2 p-3 "
                        style={{
                          scrollbarWidth: "none",
                          overflow: "auto",
                          overflowX: "hidden",
                          height: "150px",
                        }}
                      >
                        {sector.map((sector) => (
                          <div className="form-check" key={sector.id}>
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value={sector.Nombre}
                              id={checkbox-${sector.id}}
                            />
                            <label
                              className="form-check-label"
                              htmlFor={checkbox-${sector.id}}
                            >
                              {sector.Nombre}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <hr className="sidebar-divider my-0 " />
                  <div className="row mb-3">
                    <div className="col d-flex justify-content-end">
                      <button className="btn btn-primary m-2">Guardar</button>
                      <button className="btn btn-secondary m-2">
                        Cancelar
                      </button>
                    </div>
                  </div>
                </form>
              </div>
  </>;
};

export default Demostracion;

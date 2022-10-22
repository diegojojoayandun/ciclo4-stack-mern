import React from "react";
import { useState } from "react";

const AddUser = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  //   const [name, setname] = useState(second);
  //   const [name, setname] = useState(second);
  //   const [name, setname] = useState(second);

  function addUser() {}

  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-4 mx-auto">
          <div className="card-header text-center">
            <h3>Agregar Usuario</h3>
            <div className="card-body">
              <form action="../links/add" method="post">
                <div className="row mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={name}
                    placeholder="Nombres"
                    autofocus
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
                <div className="row mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="lastname"
                    value={lastname}
                    placeholder="Apellidos"
                    onChange={(e) => {
                      setLastname(e.target.value);
                    }}
                  />
                </div>
                <div className="row mb-3">
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Contraseña"
                  />
                </div>
                <div className="row mb-3">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Correo Electrónico"
                  />
                </div>
                <div className="row mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    placeholder="Teléfono"
                  />
                </div>
                <div className="row mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    placeholder="Dirección"
                  />
                </div>
                <div className="row mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="state"
                    placeholder="Estado"
                  />
                </div>
                <div className="row mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="city"
                    placeholder="Ciudad"
                  />
                </div>
                <div className="row mb-3">
                  <div className="d-grid gap-2">
                    <button onClick={addUser} className="btn btn-success">
                      Guardar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;

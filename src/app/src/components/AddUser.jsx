import React from "react";
import { useState } from "react";

const AddUser = () => {
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    state: "",
    city: "",
    rol: "",
  });

  const handleChange = (e) => {
    console.log(e.target.value);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const user = {
    fullname: form.fullname,
    email: form.email,
    password: form.password,
    phone: form.phone,
    address: form.address,
    city: form.city,
    state: form.state,
    rol: form.rol,
  };
  async function addUser() {
    await fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    alert("sucessfully created ");
  }

  return (
    <div className="container p-3">
      <div className="row">
        <div className="col-md-4 mx-auto">
          <div className="card-header text-center">
            <h3>Registrarse</h3>
            <div className="card-body">
              <div className="row mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="fullname"
                  value={form.fullname}
                  placeholder="Nombres"
                  autoFocus
                  onChange={handleChange}
                />
              </div>
              <div className="row mb-3">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={form.email}
                  placeholder="Correo Electrónico"
                  onChange={handleChange}
                />
              </div>
              <div className="row mb-3">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={form.password}
                  placeholder="Contraseña"
                  onChange={handleChange}
                />
              </div>

              <div className="row mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  value={form.phone}
                  placeholder="Teléfono"
                  onChange={handleChange}
                />
              </div>
              <div className="row mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  value={form.address}
                  placeholder="Dirección"
                  onChange={handleChange}
                />
              </div>
              <div className="row mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="state"
                  value={form.state}
                  placeholder="Estado"
                  onChange={handleChange}
                />
              </div>
              <div className="row mb-3">
                <input
                  type="text"
                  className="form-control"
                  value={form.city}
                  name="city"
                  placeholder="Ciudad"
                  onChange={handleChange}
                />
              </div>
              <div className="row mb-3">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  name="rol"
                  onChange={handleChange}
                  value={form.rol}
                  
                >
                  <option defaultValue>Seleccione su Rol</option>
                  <option name="opt">usuario</option>

                  <option name="opt">abogado</option>
                </select>
              </div>
              <div className="row mb-3">
                <div className="d-grid gap-2">
                  <button onClick={addUser} className="btn btn-success">
                    Guardar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;

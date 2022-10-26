import React, { useState } from "react";
import {
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBBtn,
  MDBCol,
  MDBCard,
  MDBCardBody,
} from "mdb-react-ui-kit";

const Signup = () => {
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
    <MDBContainer fluid>
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol col="12">
          <MDBCard
            className="bg-dark text-white my-4 mx-auto"
            style={{ borderRadius: "1rem", maxWidth: "400px" }}
          >
            <MDBCardBody className="p-2 d-flex flex-column align-items-center mx-auto w-100">
              <h2 className="fw-bold mb-2 text-uppercase">Registro</h2>
              <p className="text-white-50 mb-2">
                Por favor registre sus datos personales!
              </p>

              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                labelClass="text-white"
                name="fullname"
                id="formControlLg"
                type="text"
                placeholder="Nombre Completo"
                onChange={handleChange}
              />

              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                labelClass="text-white"
                name="email"
                id="formControlLg"
                type="email"
                placeholder="Correo Eléctonico"
                onChange={handleChange}
              />
              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                labelClass="text-white"
                name="password"
                id="formControlLg"
                type="password"
                placeholder="Contraseña"
                onChange={handleChange}
              />

              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                labelClass="text-white"
                name="phone"
                id="formControlLg"
                type="text"
                placeholder="Teléfono"
                onChange={handleChange}
              />

              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                labelClass="text-white"
                name="address"
                id="formControlLg"
                type="text"
                placeholder="Dirección"
                onChange={handleChange}
              />
              <MDBRow>
                <MDBCol col="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    labelClass="text-white"
                    name="state"
                    id="formControlLg"
                    type="text"
                    placeholder="Departamento"
                    onChange={handleChange}
                  />
                </MDBCol>

                <MDBCol col="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    labelClass="text-white"
                    name="city"
                    id="formControlLg"
                    type="text"
                    placeholder="Ciudad"
                    onChange={handleChange}
                  />
                </MDBCol>
              </MDBRow>

              <div className="row mb-3">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  name="rol"
                  onChange={handleChange}
                  value={form.rol}
                >
                  <option defaultValue>Seleccione su Rol</option>
                  <option name="opt">Usuario</option>

                  <option name="opt">Abogado</option>
                </select>
              </div>

              <MDBBtn
                outline
                className="mx-2 px-5"
                color="light"
                onClick={addUser}
                id="liveAlertBtn"
              >
                Registro
              </MDBBtn>
              <div>
                <p className="mb-0 p-4">
                  Ya tienes Cuenta?{" "}
                  <a href="/" className="text-white-50 fw-bold">
                    Ingresa Aquí
                  </a>
                </p>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Signup;

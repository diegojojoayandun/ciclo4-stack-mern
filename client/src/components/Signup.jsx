import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams, Link } from "react-router-dom";
import { State, City } from "country-state-city";

import {
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
} from "mdb-react-ui-kit";

//import Swal from "sweetalert2";
import { dialogSuccess } from "./helpers/alerts";

const Signup = () => {
  const [stateid, setStateid] = useState([]);
  const [city, setCity] = useState([]);
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    state: "",
    city: "",
    type: "",
  });

  const states = State.getStatesOfCountry("CO");

  const params = useParams();
  const navigate = useNavigate();

  // handle onChange of Select element, get the state Id
  const handleState = (e) => {
    handleChange(e);
    const stateName = e.target.value;
    const stateId = states.filter(({ name }) => name === stateName);
    setStateid(stateId[0].isoCode);
  };

  // Get the cities by state
  useEffect(() => {
    const getcity = async () => {
      const cities = City.getCitiesOfCountry("CO");
      const result = cities.filter(({ stateCode }) => stateCode === stateid);
      setCity(result); // change the states of city with the cities of a state
    };
    getcity();
  }, [stateid]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //e.target.reset();
    !params.id ? addUser() : editUser();
    dialogSuccess(!params.id ? "Registro Exitoso!" : "Edición Exitosa!");
  };

  const user = {
    fullname: form.fullname,
    email: form.email,
    password: form.password,
    phone: form.phone,
    address: form.address,
    city: form.city,
    state: form.state,
    type: form.type,
  };

  // Agrega un usuario a la base de dato metodo POST
  async function addUser() {
    await fetch("http://localhost:5000/api/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    console.log(JSON.stringify(user));
    navigate("/");
  }

  async function editUser() {
    await fetch("http://localhost:5000/api/users/edit/" + params.id, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    navigate("/listusers");
  }

  useEffect(() => {
    const loadUsers = async (users) => {
      if (params.id) {
        try {
          const res = await fetch(
            "http://localhost:5000/api/users/" + params.id
          );
          const users = await res.json();
          setForm(users);
        } catch (error) {
          console.error(error);
        }
      }
    };
    loadUsers();
  }, [params.id]);

  return (
    <form onSubmit={handleSubmit}>
      <MDBContainer fluid>
        <MDBRow className="d-flex justify-content-center align-items-center h-100">
          <MDBCol col="12">
            <MDBCard
              className="bg-dark text-white my-4 mx-auto"
              style={{ borderRadius: "1rem", maxWidth: "400px" }}
            >
              <MDBCardBody className="p-3 d-flex flex-column align-items-center mx-auto w-100">
                <h2 className="fw-bold mb-2 text-uppercase">
                  {!params.id ? "Registro" : "Edición"}
                </h2>
                <p className="text-white-50 mb-3">
                  {!params.id
                    ? "Por favor registre sus datos personales!"
                    : "Por favor modifique datos a Actualizar!"}
                </p>

                <MDBInput
                  wrapperClass="mb-4 mx-5 w-100"
                  autoFocus
                  labelClass="text-white"
                  name="fullname"
                  id="fullname"
                  type="text"
                  value={form.fullname}
                  placeholder="Nombre Completo"
                  onChange={handleChange}
                  required
                />

                <MDBInput
                  wrapperClass="mb-4 mx-5 w-100"
                  labelClass="text-white"
                  name="email"
                  value={form.email}
                  id="email"
                  type="email"
                  placeholder="Correo Eléctonico"
                  onChange={handleChange}
                  required
                  invalid={MDBInput.invalid}
                  validation="Por favor ingrese su correo electrónico"
                />

                <MDBInput
                  wrapperClass="mb-4 mx-5 w-100"
                  labelClass="text-white"
                  name="password"
                  value={form.password}
                  id="password"
                  type="password"
                  placeholder="Contraseña"
                  pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$"
                  onChange={handleChange}
                  required
                  invalid={MDBInput.invalid}
                  validation="Caracteres no validos"
                />

                <MDBInput
                  wrapperClass="mb-4 mx-5 w-100"
                  labelClass="text-white"
                  name="phone"
                  value={form.phone}
                  id="phone"
                  type="text"
                  placeholder="Teléfono"
                  onChange={handleChange}
                  required
                />

                <MDBInput
                  wrapperClass="mb-4 mx-5 w-100"
                  labelClass="text-white"
                  name="address"
                  value={form.address}
                  id="address"
                  type="text"
                  placeholder="Dirección"
                  onChange={handleChange}
                  required
                />

                <MDBRow>
                  <MDBCol col="6">
                    <select
                      name="state"
                      id="state"
                      className="form-select mb-4"
                      onChange={(e) => handleState(e)}
                      onBlur={(e) => handleState(e)}
                      value={form.state}
                    >
                      <option hidden defaultValue>
                        -Departamento-
                      </option>
                      {states.map((item) => (
                        <option key={item.isoCode}>{item.name}</option>
                      ))}
                    </select>
                  </MDBCol>

                  <MDBCol col="6">
                    <select
                      name="city"
                      id="city"
                      className="form-select mb-4"
                      onChange={handleChange}
                      value={form.city}
                    >
                      <option disabled>-Ciudad-</option>
                      {city.map((item) => (
                        <option key={item.name + item.stateCode}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </MDBCol>
                </MDBRow>

                <div className="row mb-4 mx-5 w-100">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    name="type"
                    onChange={handleChange}
                    value={form.type}
                  >
                    <option defaultValue>Tipo de Usuario</option>
                    <option name="opt">Usuario</option>

                    <option name="opt">Abogado</option>
                  </select>
                </div>

                <button
                  className="btn btn-outline-light"
                  data-mdb-ripple-color="light"
                  type="submit"
                  //   onClick={!params.id ? addUser : editUser}
                >
                  {!params.id ? "Registrarse" : "Guardar"}
                </button>

                <div>
                  {!params.id ? (
                    <p className="mb-0 p-4">
                      Ya tienes Cuenta?{" "}
                      <Link to="/" className="text-white-50 fw-bold">
                        Ingresa Aquí
                      </Link>
                    </p>
                  ) : (
                    <p></p>
                  )}
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </form>
  );
};

export default Signup;

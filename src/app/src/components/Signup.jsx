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
  const [stateid, setStateid] = useState("");
  const [city, setCity] = useState([]);

  const states = State.getStatesOfCountry("CO");

  const handlestate = (event) => {
    handleChange(event);
    const getstateid = event.target.value;
    const idState = states.filter((item) => item.name === getstateid);
    setStateid(idState[0].isoCode);
  };

  useEffect(() => {
    const getcity = async () => {
      const cities = City.getCitiesOfCountry("CO");
      const rescity = cities.filter((item) => item.stateCode === stateid);
      setCity(rescity);
    };
    getcity();
  }, [stateid]);
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

  const params = useParams();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //e.target.reset();

    dialogSuccess("Agregado Exitosamente!");
    // navigate("/");
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

  // Agrega un usuario a la base de dato metodo POST
  async function addUser() {
    await fetch("http://localhost:5000/users", {
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
    await fetch("http://localhost:5000/users/edit/" + params.id, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    navigate("/listusers");
  }

  // GET user By ID
  //   const getUser = async () => {
  //     try {
  //       const res = await fetch("http://localhost:5000/users/" + params.id);
  //       const users = await res.json();
  //       setForm(users);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  useEffect(() => {
    const loadUsers = async (users) => {
      if (params.id) {
        try {
          const res = await fetch("http://localhost:5000/users/" + params.id);
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
                    : "Por favor modifique datos a cambiar!"}
                </p>

                <MDBInput
                  wrapperClass="mb-4 mx-5 w-100"
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
                />
                <MDBInput
                  wrapperClass="mb-4 mx-5 w-100"
                  labelClass="text-white"
                  name="password"
                  value={form.password}
                  id="password"
                  type="password"
                  placeholder="Contraseña"
                  onChange={handleChange}
                  required
                  invalid={MDBInput.invalid}
                  validation="Please provide your email"
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
                      onChange={(e) => handlestate(e)}
                      value={form.state}
                    >
                      <option defaultValue>--Seleccione Departamento--</option>
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
                      <option defaultValue>--Seleccione Ciudad--</option>
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
                    name="rol"
                    onChange={handleChange}
                    value={form.rol}
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
                  onClick={!params.id ? addUser : editUser}
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

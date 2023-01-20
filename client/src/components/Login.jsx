import React from "react";
import { Link } from "react-router-dom";
import {
  MDBContainer,
  MDBInput,
  MDBBtn,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
} from "mdb-react-ui-kit";

const Login = () => {
  return (
    <MDBContainer fluid>
      <MDBRow className="d-flex justify-content-center h-100">
        <MDBCol md="6" className="text-center text-md-start d-flex flex-column">
          <h1
            className="my-3 display-3 fw-bold ls-tight px-3"
            style={{ color: "hsl(218, 81%, 95%)" }}
          >
            Tu Abogado <br />
            <span style={{ color: "hsl(218, 81%, 75%)" }}>en un Click</span>
          </h1>
          <button
            className="btn btn-link link-light d-md-none col-3 mx-auto"
            data-mdb-ripple-color="light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            <i className="fa-sharp fa-solid fa-eye"></i> Mostrar{" "}
          </button>
          <div className="collapse dont-collapse-sm" id="collapseExample">
            <p
              className="px-3 text-justify"
              aria-expanded="true"
              style={{ color: "hsl(218, 81%, 85%)" }}
            >
              Probablemente todos, en algún momento de nuestras vidas,
              necesitemos los servicios de un especialista legal para ayudarnos
              a resolver algún asunto jurídico. Cada vez que necesitamos los
              servicios de un profesional, intentamos buscar a la persona de
              nuestro entorno experta en la materia en cuestión. Pero ¿es
              especialmente importante elegir un buen abogado? La respuesta es
              simple: SI, sin dudarlo. Un buen abogado puede ayudarnos a evitar
              múltiples problemas futuros y, sin duda, además de agilizar el
              tiempo para resolver cualquier inquietud, evitaría tener sorpresas
              económicas que puedan derivar de dicho problema. Por tanto, si
              elegimos al profesional correcto desde el principio, estaremos
              ahorrando tiempo y dinero.
            </p>
          </div>
        </MDBCol>

        <MDBCol col="12">
          <MDBCard
            className="bg-dark text-white my-5 mx-auto shadow-lg"
            style={{ borderRadius: "1rem", maxWidth: "400px" }}
          >
            <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">
              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">
                Por favor ingrese su usuario y Contraseña!
              </p>

              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                labelClass="text-white"
                type="email"
                label="Nombre de usuario"
                name="email"
                placeholder="Correo electrónico"
                autoFocus
              />
              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                labelClass="text-white"
                label="Contraseña"
                type="password"
                placeholder="Contraseña"
              />

              <p className="small mb-3 pb-lg-2">
                <a className="text-white-50" href="#!">
                  Olvidó su Contraseña?
                </a>
              </p>
              <MDBBtn outline className="mx-2 px-5" color="light">
                Login
              </MDBBtn>

              <div className="d-flex flex-row mt-3 mb-2">
                <MDBBtn
                  tag="a"
                  color="none"
                  className="m-3"
                  style={{ color: "white" }}
                >
                  <MDBIcon fab icon="facebook-f" size="lg" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="m-3"
                  style={{ color: "white" }}
                >
                  <MDBIcon fab icon="twitter" size="lg" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="m-3"
                  style={{ color: "white" }}
                >
                  <MDBIcon fab icon="google" size="lg" />
                </MDBBtn>
              </div>

              <div>
                <p className="mb-0">
                  Aún no tiene una cuenta?{" "}
                  <Link to="/adduser" className="text-white-50 fw-bold">
                    Registrese
                  </Link>
                </p>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Login;

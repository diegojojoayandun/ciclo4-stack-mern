import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <img
          src="https://psasattorneys.com/files/2020/03/hand_shake.png"
          height="30"
          alt=""
          loading="lazy"
        />

        <a className="navbar-brand" href="/">
           MiAbogadoYA.com
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Inicio
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Usuario
              </a>
              <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-lg-end">
                <li>
                  <a className="dropdown-item" href="/listusers">
                    Listar Usuarios
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/adduser">
                    Agregar Usuario
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Editar Usuario
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { successAlert } from "./helpers/alerts";

const ListUsers = () => {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  // GET all users list
  const getUsers = async () => {
    const res = await fetch("http://localhost:5000/users");
    const users = await res.json();
    return users;
  };

  // DELETE an user from DB
  const deleteUsers = async (id, e) => {
    await fetch("http://localhost:5000/users/delete/" + id, {
      method: "DELETE",
    });
    successAlert();
    setUser(user.filter((item, i) => item._id !== id));
  };

  useEffect(() => {
    getUsers().then((item) => {
      setUser(item);
    });
  }, []);

  return !user ? null : (
    <div className="table-wrapper">
      <table className="table table-responsive table-dark table-striped table-sm caption-top table-bordered table-hover">
        <caption className="text-center fs-4 fw-semibold bg-light text-dark">
          Lista de usuarios registrados
        </caption>
        <thead className="table-dark text-center">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombres</th>
            <th scope="col">Correo Electrónico</th>
            <th scope="col">Teléfono</th>
            <th scope="col">Rol</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {user.map((item) => (
            <tr key={item._id} className="text-center fw-light">
              <td>{item._id}</td>
              <td>{item.fullname}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.rol}</td>
              <td>
                <div className="d-flex justify-content-center">
                  <button
                    className="btn  btn-danger pull-right btn-xs btn-space"
                    onClick={(e) => deleteUsers(item._id, e)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-success pull-left btn-xs btn-space"
                    onClick={(e) => navigate(`/edit/${item._id}`)}
                  >
                    Editar
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListUsers;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { dialogSuccess } from "./helpers/alerts";

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
    dialogSuccess("Eliminado Correctamente");
    setUser(user.filter((item, i) => item._id !== id));
  };

  useEffect(() => {
    getUsers().then((item) => {
      setUser(item);
    });
  }, []);

  return !user ? null : (
    <div  className="p-5 grid align-items-center mx-auto">
      <div className="table-wrapper table-responsive">
        <table className="table table-responsive table-light table-striped table-sm caption-top table-bordered table-hover rounded rounded-3 overflow-hidden">
          <caption className="text-center fs-4 bg-light text-dark">
            Lista de usuarios registrados
          </caption>
          <thead className="table-dark text-center">
            <tr>
              <th className="fw-bold" scope="col">
                ID
              </th>
              <th scope="col">Nombres</th>
              <th scope="col">Correo Electrónico</th>
              <th scope="col">Teléfono</th>
              <th scope="col">Rol</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
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
                      className="btn btn-warning pull-left btn-xs btn-space"
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
    </div>
  );
};

export default ListUsers;

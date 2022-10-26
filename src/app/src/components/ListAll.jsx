import React, { useState, useEffect } from "react";

const ListAll = () => {
  const [user, setUser] = useState([]);

  const getUsers = async () => {
    const res = await fetch("http://localhost:5000/users");
    const users = await res.json();
    //console.log(users);
    return users;
  };

  const deleteUsers = async (id, e) => {
    console.log(id);
    await fetch("http://localhost:5000/users/delete/" + id, {
      method: "DELETE",
    });
    //const users = await res.json();
    setUser(user.filter((item, i) => {i !== id}));

    //return users;
  };

  useEffect(() => {
    getUsers().then((item) => {
      //console.log(newItem);
      setUser(item);
    });
  }, []);


  return !user ? null :(
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
            <tr key={item._id}>
              <td>{item._id}</td>
              <td>{item.fullname}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.rol}</td>
              <td className="align">
                <button
                  className="btn  btn-danger pull-right btn-xs btn-space"
                  onClick={(e) => deleteUsers(item._id, e)}
                >
                  Delete
                </button>
                <button className="btn btn-success pull-left btn-xs btn-space">
                      Editar
                    </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListAll;

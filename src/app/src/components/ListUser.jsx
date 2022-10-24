import React, { useEffect, useState } from "react";

const ListUser = () => {
  const [user, setUser] = useState([]);

  const getUsers = async () => {
    const res = await fetch("http://localhost:5000/users");
    const users = await res.json();
    //console.log(users);

    return users;
  };

  useEffect(() => {
    getUsers().then((newItem) => {
      //console.log(newItem);
      setUser(newItem);
    });
  }, []);

  return !user ? null : (
    <div className="table-wrapper">
      <table className="table table-success table-striped table-sm caption-top table-bordered table-hover">
        <caption className="text-center fs-4 fw-semibold">
          Lista de usuarios registrados
        </caption>
        <thead className="table-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombres</th>
            <th scope="col">Apellidos</th>
            <th scope="col">Correo Electrónico</th>
            <th scope="col">Contraseña</th>
            <th scope="col">Teléfono</th>
            <th scope="col">Dirección</th>
            <th scope="col">Departamento</th>
            <th scope="col">Municipio</th>
          </tr>
        </thead>
        <tbody>
          {user.map((item) => {
            // changed here
            //console.log("item: ", item.lastname);
            return (
              <tr>
                {Object.entries(item).map((field) => {
                  // changed here
                  //console.log("field: ", field);
                  return <td >{field[1]}</td>;
                })}
                <td><button className="btn btn-success">Editar</button></td>
                <td><button className="btn  btn-danger">Eliminar</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListUser;

import React, { useState, useEffect } from "react";

const Test = () => {
  const [states, setStates] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.min.json"
    )
      .then((response) => response.json())
      .then((data) => setStates(data));
  }, []);

  //console.log(states);

  //console.log(estados)

  return (
    <div>
    <select name="" id="">
      {states.map(({ id, municipio, departamento }) => (


          <option key={id}>{departamento}</option>
       
      ))}
      </select>
    </div>
  );
};

export default Test;

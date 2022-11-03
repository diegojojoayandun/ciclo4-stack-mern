import React, { useState, useEffect } from "react";
import { State, City } from "country-state-city";

const Test = () => {
  const [stateid, setStateid] = useState("");
  const [city, setCity] = useState([]);

  const states = State.getStatesOfCountry("CO");

  const handlestate = (event) => {
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

  return (
    <div className="p-5 d-flex flex-column align-items-center mx-auto w-100">
      <select
        name="state"
        id=""
        className="form-select my-3"
        onChange={(e) => handlestate(e)}
      >
        <option defaultValue>--Seleccione Departamento--</option>
        {states.map((item) => (
          <option key={item.isoCode}>{item.name}</option>
        ))}
      </select>

      <select name="city" id="" className="form-select">
        <option defaultValue>--Seleccione Ciudad--</option>
        {city.map((item) => (
          <option key={item.name + item.stateCode}>{item.name}</option>
        ))}
      </select>
    </div>
  );
};

export default Test;

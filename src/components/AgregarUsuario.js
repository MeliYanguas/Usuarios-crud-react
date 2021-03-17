import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

  const AgregarUsuario = () => {
    let history = useHistory();
    const [user, setUser] = useState({
      nombre: "",
      edad: "",
      ocupacion: ""
  });

  const { nombre, edad, ocupacion } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3001/usuarios", user);
    history.push("/Usuarios");
  };
  return (
    <div className="container">
      <div>
        <h1>Agregar Usuario Works....</h1>
          <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            Nombre:
            <input
              type="text"
              className="form-control "
              placeholder="Sebastian"
              name="nombre"
              value={nombre}
              onChange={e => onInputChange(e)}
              required
            />
          </div>
          <div className="form-group">
            Edad:
            <input
              type="number"
              className="form-control"
              placeholder="25"
              name="edad"
              value={edad}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            Ocupación
            <input
              type="text"
              className="form-control "
              placeholder="Programador"
              name="ocupacion"
              value={ocupacion}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Aceptar</button>
        </form>
      </div>
    </div>
  );
};

export default AgregarUsuario;


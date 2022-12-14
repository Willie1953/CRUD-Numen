import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function Perritos() {
  //hooks
  const [data, setData] = useState([]);

  useEffect(() => {
    obtenerPerros();
  }, []);

  const obtenerPerros = async () => {
    const perros = (await axios.get("http://localhost:5050/dogs")).data;
    console.log(perros);
    setData(perros);
  };

  //renderizando la info
  return (
    <div>
      <h2> Mostrar todos los perritos </h2>
      <div>
        {data.map((item) => {
          return (
            <div className="container" key={item._id+1}>
              <div className="row" key={item._id+2}>
                <div key={item._id} className="col-sm-6 offset-3">
                  <img src={item.image} alt={item.name} width="200px" />
                  <p>{item.name}</p>
                  <p>{item.breed}</p>
                  <p>{item.temperament}</p>
                </div>
                <button className="btn btn-success">Editar</button>
                <button className="btn btn-danger">Borrar</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Perritos;

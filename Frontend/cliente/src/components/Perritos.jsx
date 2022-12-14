import React from "react";
import { useEffect, useState } from "react";
import {Link, useNavigate} from 'react-router-dom';
import axios from "axios";
import '../Card.css'

function Perritos() {
  //hooks
  const [data, setData] = useState([]);
  const navegar = useNavigate()
  useEffect(() => {
    obtenerPerros();
  }, []);

  const obtenerPerros = async () => {
    const perros = (await axios.get("http://localhost:5050/dogs")).data;
    console.log(perros);
    setData(perros);
  };

  function borrarPerrito(idPerrito){
      axios.delete('http://localhost:5050/borrar/' + idPerrito).then(res=>{
        console.log(res.data)
        alert('Perrito borrado')
        navegar(0)
      }).catch(err=>console.log(err))
  }

  //renderizando la info
  return (
    <div className="container">
      <h2> Mostrar todos los perritos </h2>
      <div>
        {data.map((item) => {
          return (
            <div className="card" key={item._id+1}>
              <div className="row" key={item._id+2}>
                <div key={item._id} className="col-sm-6 offset-3">
                  <img src={item.image} alt={item.name} width="200px" />
                  <p>Nombre: {item.name}</p>
                  <p>Raza: {item.breed}</p>
                  <p>Caracter: {item.temperament}</p>
                <Link to={`/editarperro/${item._id}`}><li className="btn btn-success">Editar</li></Link>
                <button className="btn btn-danger" onClick={()=>{borrarPerrito(item._id)}}>Borrar</button>
                <hr className="mt-4"></hr>
                </div>
              </div>
            </div>
            
          );
        })}
      </div>
    
    </div>
  );
}

export default Perritos;

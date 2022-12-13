import React from "react";
import { useState } from "react";
import axios from 'axios';


function AgregarPerro(){
    //Hooks
    const [nombre,setNombre] = useState('');
    const [raza,setRaza] = useState('');
    const [peso,setPeso] = useState('');
    const [temperamento,setTemperamento] =useState('');

    function agregarPerro(){
        const newDog = {
            name:nombre,
            breed:raza,
            temperament:temperamento,
            weigth:peso
        }
        axios.post('http://localhost:5050/postear/', newDog)
        .then(res=> console.log(res.data))
        .then(err=>console.log(err))
    }

    return(
        <div className="container">
            <div className="row">
            
                <h2 className="mt-4"> Agregar un perro </h2>            

            </div>
            <div className="row">
                <div className="col-sm-6 offset-3">
                    <div className="mb-3">
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" className="form-control" value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="raza">Raza</label>
                        <input type="text" className="form-control" value={raza} onChange={(e)=>setRaza(e.target.value)}/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="peso">Peso</label>
                        <input type="text" className="form-control" value={peso} onChange={(e)=>setPeso(e.target.value)}/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="temperamento">Temperamento</label>
                        <input type="text" className="form-control" value={temperamento} onChange={(e)=>setTemperamento(e.target.value)}/>
                    </div>

                    <button onClick={agregarPerro} className="btn btn-success"> Agregar Perrito</button>

                </div>
            </div>
        </div>
    )
}

export default AgregarPerro;
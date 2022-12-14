import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";



function EditarPerro(){
    const params= useParams()
    const [nombre,setNombre] = useState('');
    const [raza,setRaza] = useState('');
    const [peso,setPeso] = useState('');
    const [temperamento,setTemperamento] =useState('');
    const navegar = useNavigate()
    useEffect(()=>{
        
       axios.patch('http://localhost:5050/update/' + params.id).then(res=>{
                let dataPerrito = res.data
            
            console.log('Data del perrito',dataPerrito.data.name)
            setNombre(dataPerrito.data.name)
            setRaza(dataPerrito.data.breed)
            setPeso(dataPerrito.data.weight)
            setTemperamento(dataPerrito.data.temperament)
        })
    },[])

    function editarPerrito(){
        const perroUpdate={
            name:nombre,
            breed:raza,
            temperament:temperamento,
            weight:peso,
        }
        axios.patch('http://localhost:5050/update/' + params.id,perroUpdate).then(res=>{
            console.log(res.data)
            alert('Perro actualizado con éxito!')
            navegar("/")
        })
    }


    return(
        <div className="container">
            <div className="row">
            
                <h2 className="mt-4"> Editar a {nombre} </h2>            

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

                    <button onClick={editarPerrito} className="btn btn-success"> Editar Perrito</button>

                </div>
            </div>
        </div>
    )
}

export default EditarPerro;
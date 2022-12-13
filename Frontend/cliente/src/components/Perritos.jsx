import React from "react";
import { useEffect, useState } from "react";
import Perro from './Perro';
import axios from "axios";

function Perritos(){

    //hooks
    const [perritos,setPerritos] = useState([])
    
    useEffect(()=>{
        axios.get('http://localhost:5050/dogs')
        .then(response => console.log(response.data))
    },[])

    //mapeando la info

    const perritosCard = perritos.map(perrito=>{
        return(
            <div>
                <Perro perro={perrito} />
            </div>
        )
    })
    //renderizando la info
    return(
        <div>
            <h2> Mostrar todos los perritos </h2>    
            {perritosCard}        
        </div>
    )
}

export default Perritos;

import React from "react";

function Perro(perrito){
    return(
        <div className="container">

            <div className="row">
                <img src="https://acortar.link/ftF6s8" alt="Caniche negro"></img>
                <p>Nombre: {perrito.name}</p>
                <p>Raza: {perrito.breed}</p>
                <p>Temperamento: {perrito.temperament}</p>
                <p>Peso: {perrito.weight}</p>
            </div>

                  
        </div>
    )
}

export default Perro;
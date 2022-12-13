const axios= require('axios')


exports.get= async (_,res)=>{
    try {
        const getAllDogs = await axios('https://api.thedogapi.com/v1/breeds?api_key=58e889c2-6c68-4943-843c-6cd982c402a7')
        .then(respuesta=>{
            return respuesta.data
        })
        res.status(200).send(getAllDogs)
    } catch (error) {
        res.status(500).send(error)
    }
}


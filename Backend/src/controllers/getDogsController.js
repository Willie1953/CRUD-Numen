const axios = require("axios");
const Dogs = require('../models/Dogs');
//Para traer perros de la API
exports.get = async (_, res) => {
  try {
    const getAllDogs = (
      await axios(
        "https://api.thedogapi.com/v1/breeds?api_key=58e889c2-6c68-4943-843c-6cd982c402a7"
      )
    ).data.map((e) => ({
      id: e.id,
      image: e.image.url,
      name: e.name,
      breed: e.breed,
      temperament: e.temperament,
      weight: e.weight.metric?e.weight.metric: 'no tiene peso',
    }));

    res.status(200).send(getAllDogs);
  } catch (error) {
    res.status(500).send(error);
  }
};
//Para traer perros de la DB
exports.getDB= async(_,res)=>{
  try {
    const dbDogs= await Dogs.find() 
    res.status(200).send(dbDogs)
  } catch (error) {
    res.status(404).send(error)
  }
}

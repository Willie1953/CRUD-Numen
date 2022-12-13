const Dogs = require("../models/Dogs");

exports.post = async (req, res) => {
  try {
    const { name, breed, temperament, weight} = req.body;
    let newDog = await Dogs.create({
      name,
      breed,
      temperament,
      weight
    });
    res.status(201).json({
      status: "success",
      data: newDog,
    });
  } catch (error) {
    res.status(404).send(error);
  }
};

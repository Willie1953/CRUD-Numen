const Dogs = require("../models/Dogs");

exports.patch = async (req, res) => {
  try {
    const {name,breed,temperament,weight} = req.body;

    const filter = { _id: req.params.id };

    const updateData = {name,breed,temperament,weight}

    let updatedDog = await Dogs.findByIdAndUpdate(filter, updateData, {new: true})

    res.status(200).json({
      status: "success",
      data: updatedDog,
    });
  } catch (error) {
    res.status(404).send(error);
  }
};

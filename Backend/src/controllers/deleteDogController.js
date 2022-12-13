const Dogs = require('../models/Dogs');

exports.delete= async (req,res)=>{
    try {
        
        const{id}= req.params
        const dogToDelete = await Dogs.findByIdAndDelete({_id:id});

        res.status(200).send(dogToDelete);

    } catch (error) {
        res.status(404).send(error)
    }
}
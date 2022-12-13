const {Router} = require('express');
const updateDogRouter = Router();
const updateDogController = require('../controllers/updateDogController');

updateDogRouter.patch('/:id', updateDogController.patch)

module.exports= updateDogRouter;
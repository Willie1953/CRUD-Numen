const {Router} = require('express');
const postDogsRouter = Router();
const postDogController = require('../controllers/postDogController');

postDogsRouter.post('/', postDogController.post);

module.exports = postDogsRouter;
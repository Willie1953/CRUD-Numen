const {Router} = require('express');
const deleteDogRouter = Router();
const deleteDogController = require('../controllers/deleteDogController');

deleteDogRouter.delete('/:id', deleteDogController.delete);

module.exports= deleteDogRouter;
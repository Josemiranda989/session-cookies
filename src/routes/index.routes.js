var express = require('express');
var router = express.Router();
var controller = require('../controllers/indexController');
var validations = require('../middlewares/validations');


// render de la vista principal
router.get('/', controller.index);
// proceso de registro del usuario 
router.post('/', validations, controller.store);
// render de vista colors
router.get('/color', controller.color);
// borrado de la session y la cookie
router.get('/borrar', controller.borrar);

module.exports = router;

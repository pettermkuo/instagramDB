var express = require('express');
var router = express.Router();
const usuariosController = require('../controller/usuariosController');

/* GET users listing. */
router.get('/', usuariosController.index);

router.post('/', usuariosController.create);

router.put('/:id', usuariosController.update);

router.delete('/:id', usuariosController.delete);

module.exports = router;

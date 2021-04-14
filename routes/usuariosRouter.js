var express = require('express');
var router = express.Router();
const usuariosController = require('../controller/usuariosController');
const validarCadastro = require('../middlewares/validarCadastro')

/* GET users listing. */
router.get('/', usuariosController.index);

router.post('/', validarCadastro, usuariosController.create);

router.put('/:id', usuariosController.update);

router.delete('/:id', usuariosController.delete);

module.exports = router;


const {Router} = require ('express');
const { getUsuarios, postUsuarios, putUsuarios, patchUsuarios, deleteUsuarios } = require('../controllers/usuarios');

const router = Router();

//le sacamos el /api porque ya lo configuramos en la clase
router.get('/', getUsuarios);

router.post('/', postUsuarios);
//Ej: http://localhost:8088/api/usuarios/12
router.put('/:id', putUsuarios);

router.patch('/', patchUsuarios);

router.delete('/', deleteUsuarios)









module.exports = router;

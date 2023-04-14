const express = require ('express')
const router = express.Router()
const apiController = require('../controllers/apiController')
const validarIDD = require ('../middleware/validarIDD')
const {check} = require ('express-validator')
const validarDestino = require ('../middleware/validarDestino')
const destinoController = require('../controllers/destinoController')





//rutas
router.get ('/saludo', apiController.saludo)

//ver
router.get ('/ver',apiController.vertrips)
router.get ('/ver/:id', validarIDD, apiController.viajeUnico)
//metodohttp, /expresion, /middleware,   /callback


router.get('/destino/', validarDestino, destinoController);



//crear
router.post ('/crear',[
    check('name').not().isEmpty().withMessage('el campo name es obligatorio').isLength({min:3, max:25}).withMessage('el campo de name debe contener mas de 3 caracteres y ser menor de 25'),
    check('price').not().isEmpty().withMessage('el campo price es obligatorio').isNumeric(),
    check('destination').not().isEmpty().withMessage('el campo destination es obligatorio'),
    
],apiController.creartrips)

//editar
router.put('/editar/:id',validarIDD, [
    check('name').not().isEmpty().withMessage('el campo name es obligatorio para poder editar el producto').isLength({min:3, max:25}).withMessage('el campo de name debe contener mas de 3 caracteres y ser menor de 25'),
    check('price').not().isEmpty().withMessage('el campo price es obligatorio para poder editar el producto').isNumeric(),
    check('destination').not().isEmpty().withMessage('el campo destination es obligatorio para poder editar el producto'),
    
],
 apiController.editartrips)
 
 //eliminar
 router.delete ('/eliminar/:id', validarIDD, apiController.eliminartrips)





module.exports = router
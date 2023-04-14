         // Middleware de ID unico // 

const {Trips} = require('../models/trips')
module.exports = validarIDD = async ( req, res, next) =>{
try {
    
    const item = await Trips.findById(req.params.id)
    if(item !== null){
        next()
    } else {
        return res.status(501).json ({msg: "el id es invalido"})
    }
    
} catch (error) {
res.status(501).json(error)    
}

  }
const{Trips}= require ('../models/trips')
const {validationResult} = require ('express-validator')

                  //Controlador de las rutas generales
const apiController = {
    saludo  (req, res) {
        
        res.status(200).send('Le doy la bienvenida a mi proyecto de BackEnd, Atte :Kevin')
    
    },
     ////////////  Obtener todos los viajes   /////////
 async vertrips (req, res) {
   const items = await Trips.find()
   res.json({items})
},
            ///// Buscar un viaje unico por id /////
async viajeUnico (req, res) {
    const item = await Trips.findById(req.params.id)
    res.json({item})
 },
   
     


     ///////////// Crear un viaje  ///////////////
    async creartrips (req, res){
        try {
            const err = validationResult(req)
            {
                if (err.isEmpty()) {
                    const item = new Trips (req.body);
                    await item.save();
                     res.status(201).json({item})
                } else {
                    res.status(501).json(err)
                }
            }
           
            
        } catch (error) {
            res.status(401).json ({error})
            
        }
    },
           //////    Editar un viaje por ID     //////
async editartrips (req,res){
    try {
        const err = validationResult(req);
        if (err.isEmpty()) {
            await Trips.findByIdAndUpdate(req.params.id , req.body)
            res.status(201).json ({msg: "El producto se ha actualizado id -" + req.params.id})
        } else {
            res.json(err)
        } 
    } catch (error) {
        res.json (error)
    }
},

          ////// Eliminar un viaje por ID   //////
async eliminartrips (req, res){
    await Trips.findOneAndDelete(req.params.id)
    res.json({
        msg: "El viaje se ha borrado exitosamente"
    })
}
}


module.exports = apiController
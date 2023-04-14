const mongoose = require ('mongoose');

const Schema = mongoose.Schema

                 // Modulo con algunas caracteristicas de viaje  // 
const trips = new Schema({
    name: {
        type: String,
         required: true},
    price: {
        type: Number,
        required: true,
        unique: true
    },
    destination:{
        type: String,
        required: true
    },
    category:{
        type: String,
    },
      description: {
        type: String,    
    },
    
   
   
})

const Trips = mongoose.model ('Trips', trips);
module.exports = {Trips}
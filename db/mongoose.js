           /// Conectarse con mongoDB  ///
const mongoose = require ("mongoose")
require('dotenv').config();

const connect = async () =>{
      try {
        await mongoose.connect (process.env.MONGO_CONNECT)
        console.log("base de datos conectada")
      } catch (error) {
        
        console.log("Error, problemas al conectar la base de datos")
        
      }
}

module.exports = {connect}
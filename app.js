// lo que se instala
const express = require('express');
const logger = require('morgan')
const cors = require ('cors')

//rutas inportadas
const indexRouter = require ("./routes/index")
const apiRouter = require ("./routes/api")
const {} = require ("./controllers/indexController")

//conectar al servidor
const {connect} = require ("./db/mongoose")

//express
const app = express();

//usos
app.use(logger("dev"))
app.use(express.json())
app.use(cors())

//ruta index
app.use ("/", indexRouter)
//Rutas del Crud
app.use ("/api", apiRouter)

//conectar a la base de datos
connect ();


module.exports = app
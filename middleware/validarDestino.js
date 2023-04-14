             // Midlleware de destinos de viajes //

const express = require('express');
const router = express.Router();
module.exports = validarDestino = async (req, res, next) => {
    try {
      
      const destination = req.query.destination;
      if (!destination) {
        return res.status(400).json({ error: 'Debe especificar un destino' });
      }
      req.destination = destination;
      next();
    } catch (error) {
      res.status(500).json({ error: 'Error en el middleware de viajes' });
    }
  };






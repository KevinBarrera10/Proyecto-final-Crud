              //Controlador de los destinos de viaje
const destinoController = async (req, res) => {
    
    try {
     
      const destination = req.destination;
      res.status(200).json({ message: `Viaje al destino: ${destination}` });
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el viaje' });
    }
  };

  module.exports = destinoController
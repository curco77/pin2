export default async (req, res) => {
  // Habilitar CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  
  if (req.method === 'POST') {
    const { lat, lon } = req.body;
    console.log('📍 Coordenadas:', lat, lon);
    return res.status(200).json({ success: true });
  }
  return res.status(404).send('Ruta no encontrada');
};
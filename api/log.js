export default async (req, res) => {
  if (req.method === 'POST') {
    const { lat, lon } = req.body;
    console.log('📍 Coordenadas:', lat, lon);
    return res.status(200).json({ success: true });
  }
  return res.status(404).send('Ruta no encontrada'); // Cambiado a 404 para debug
};
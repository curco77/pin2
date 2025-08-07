export default async (req, res) => {
  if (req.method === 'POST') {
    const { lat, lon } = req.body;
    console.log('Coordenadas recibidas:', lat, lon);
    
    // Opcional: Enviar a Telegram o guardar en una base de datos
    // await fetch(`https://api.telegram.org/botTU_BOT/sendMessage?chat_id=TU_CHAT_ID&text=📍 Ubicación: ${lat},${lon}`);
    
    res.status(200).json({ success: true });
  } else {
    res.status(405).end(); // Método no permitido
  }
};
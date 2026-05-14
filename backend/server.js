const express = require('express');
const app = express();

// Middlewares
app.use(express.json());

// Route test
app.get('/', (req, res) => {
  res.json({
    message: 'TaskFlow API fonctionne ✅'
  });
});



// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
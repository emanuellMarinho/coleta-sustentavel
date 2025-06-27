const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile('index.html', { root: '.' });
});

router.post('/enviar-feedback', (req, res) => {
  const { nome, mensagem } = req.body;
  console.log(`Feedback recebido: ${nome} disse "${mensagem}"`);
  res.send('Obrigado pelo feedback!');
});

module.exports = router;
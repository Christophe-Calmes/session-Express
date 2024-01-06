const express = require('express');
const router = express.Router();

// Initialisation de la variable de sessions "maVariable" avec TRUE
router.get('/', (req, res) => {
  req.session.maVariable = true;
});
router.get('/session-in', (req, res) => {
  req.session.song = 'be bop a lula';

  res.send('Session créée');
  res.end();
});

// Route pour afficher le contenu de la variable de session "song"
router.get('/session-out', (req, res) => {
  res.send(req.session.song);
});


module.exports = router;

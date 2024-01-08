const express = require('express');
const router = express.Router();

// Initialize session variables
router.get('/', (req, res) => {
  req.session.maVariable = true;
});

// Create song session variable and send response immediately
router.get('/session-in', (req, res) => {
  req.session.secret = 'be bop a lula !';
  res.send('Session créée');
  res.render('index',{ title: 'Session In', info: 'Logged In to a session. Go to /session-out to see your secret!' });
});

// Access song session variable
router.get('/session-out', (req, res) => {
  res.send(req.session.secret);
});
module.exports = router;

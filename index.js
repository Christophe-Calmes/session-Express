const express = require('express');
const Session = require('express-session');
const FileStore = require('session-file-store')(Session);
const path = require('path');
const router = require('./routes/index');
const app = express();

const port = 3000;
app
  .listen(port, () => {
    console.info(`Server is listening on port ${port}`);
  })
  .on("error", (err) => {
    console.error("Error:", err.message);
  });

// Initialise la session
app.use(Session({
  store: new FileStore({
    path: path.join(__dirname, '/tmp'),
    encrypt: true,
  }),
  secret: 'Be bop a lula !',
  resave: true,
  saveUninitialized: true,
  name: 'sessionId',
}));
 app
 .use(router);
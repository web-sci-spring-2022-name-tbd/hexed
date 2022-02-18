const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

// server route handler
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

// start server
app.listen(3000, function() {
  console.log(`Server up on http://localhost:${PORT}`);
});
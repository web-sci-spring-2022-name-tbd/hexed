const express = require('express');
const app = express();

app.use(express.static('public'));

// server route handler
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

// start server
app.listen(3000, function() {
  console.log('Server up on *:3000');
});
const express = require('express');
const app = express();
const path = require('path');

app.use('/static', express.static(__dirname + '/ui'));

app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/ui/index.html'));
});

const server = app.listen(80);

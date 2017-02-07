const express = require('express');
const app = express();

app.use('/static', express.static(__dirname + '/ui'));

const server = app.listen(80);

const express = require('express');

const port = (process.env.PORT || 8080);
var path = require('path');
const app = express();
app.use('/images', express.static('images'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/main.css', function(req, res) {
    res.sendFile(path.join(__dirname + '/main.css'));
});

app.listen(port);
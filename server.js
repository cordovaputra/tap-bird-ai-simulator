const express = require('express');
const app = express();
const http = require('http')
const server = http.createServer(app)

// Listen to Static Files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/javascript', express.static(__dirname + 'public/javascript'));
app.use('/ai', express.static(__dirname + 'public/ai'));
app.use('/game', express.static(__dirname + 'public/game'));

// Listen to HTML
app.get('', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})

app.listen(3000,() => console.log('Server running on port 3000'));


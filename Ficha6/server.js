const { response } = require('express');
const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

fs.writeFileSync("log.txt", "");

app.use(express.json());

app.get('/', (req, res) => {
    const body = 'Hello world!';
    response.writeHead(200, {
        'Content-Length': Buffer.byteLength(body),
        'Content-Type': 'text/plain'
});
    res.end(body);
})

app.get('/html', (req, res) => {
    const body = '<!DOCTYPE html> <html> <body> <h1>My First Heading</h1> <p>My first paragraph.</p> </body> </html>';
    response.writeHead(200, {
        'Content-Length': Buffer.byteLength(body),
        'Content-Type': 'html'
});
    res.end(body);
})

app.get('/fhtml', (req, res) => {
    const body = fs.readFileSync('index.html');
    response.writeHead(200, {
        'Content-Length': Buffer.byteLength(body),
        'Content-Type': 'html'
});
    res.end(body);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
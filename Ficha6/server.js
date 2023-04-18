const { response } = require('express');
const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

fs.writeFileSync("log.txt", "");

app.use(writeLog);
app.use(express.json());

function writeLog(req, res, next){
    var log = req.url + ", " + req.method + ", " + new Date().toString() + "\n";
    fs.appendFileSync("log.txt", log);
    next();
};

fs.appendFileSync("log.txt", "SERVER STARTED \n");

app.post('/test', (req, res) => {
      
    res.end("TEST POST");
})


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

app.get('/html/:name', (req, res) => {
    var name = req.params.name;
    var date = new Date();

    /* var str = "Porto é o melhor!";
    str = str.replace("Porto","Benfica"); */

    var body = fs.readFileSync('index.html', "utf-8");
    body = body.replace("{name}", name)
    body = body.replace("{date}", date.toString())
    
    
    res.writeHead(200, {
        'Content-Length': Buffer.byteLength(body),
        'Content-Type': 'html'
});
    res.end(body);
})

app.get('/s', (req, res) => {
    var date = new Date();

    var body = fs.readFileSync('index.html', "utf-8");
    body = body.replace("{date}", date.toString())
    
    
    res.writeHead(200, {
        'Content-Length': Buffer.byteLength(body),
        'Content-Type': 'html'
});
    res.end(body);
})

app.get('/log', (req, res) => {
    var log = fs.readFileSync("log.txt", "utf-8");
    res.send(log);
})

app.get('/log.txt', (req, res) => {
    res.download("log.txt", (err)=>{
        if(err){
            res.status(404).end(err.message);
        }
    });
})

app.delete('/clear', (req, res) => {
    fs.unlink("log.txt", (err)=>{
        if(err != undefined){
            res.status(304).end("Unable to delete file");
        }
        else {
            res.send("File deleted!");
        }
    })
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}...`);
});
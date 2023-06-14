const { json } = require("body-parser");
const express = require("express");
const fs = require("fs");
const { parseArgs } = require("util");
const app = express();

app.use(express.json());

function writeLogFile(action){
    fs.appendFileSync("./log.txt",action)
}

function getTime(){
    var currentdate = new Date(); 
var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
    return datetime;
}
// const data = fs.readFileSync("./");
// const persons = JSON.parse(data);

fs.writeFileSync("./log.txt","");


var server = app.listen(8080,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://localhost:%s",port);
})

app.use((request,response,next)=>{
    writeLogFile("path -> "+request.originalUrl+"/, "+request.method+", "+getTime()+" \n");
    next();
})

app.get('/root', function(request,response){
    const body = "Saudações"
    response.writeHead(200,{
        'Content-Length': Buffer.byteLength(body),
        'Content-Type': 'text/plan'
        }
    );
    response.end(body);
})

app.get('/html', function(request,response){
    var body = "<!DOCTYPE html><html><head><title>request html</title></head><body><h1>This is a Heading {tempo} </h1><p>This is a paragraph.</p></body></html>"
    body = body.replace("{tempo}",getTime());
    response.writeHead(200,{
        'Content-Length': Buffer.byteLength(body),
        'Content-Type': 'html'
        }
    );
    response.end(body);
})

app.get('/user/:name',function(request,response){
    response.send("bem vindo "+request.params.name);
})

app.get('/list/log',function(request,response){

    var body = fs.readFileSync('./log.txt','utf8',function(err,data){
        return data
    })
    response.writeHead(200,{
        'Content-Length': Buffer.byteLength(body),
        'Content-Type': 'text/plan'
        }
    );
    response.end(body);
})

app.get('/download/log',function(request,response){
    const file = `${__dirname}/log.txt`;
    response.download(file); // Set disposition and send it.
    response.send("file sent!")
})

app.get('/clear',function(request,response){
    fs.writeFileSync("./log.txt","");
    response.send("file restarted")
})

// app.listen(port, () => {

// })
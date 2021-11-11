const http = require('http');
const fs = require('fs');
const path = require('path');
const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res)=>{
    if(req.url==='/'){
        fs.readFile(path.join(__dirname, 'index.html'),(err,data)=>{
            if (err) {
                res.writeHead(500, {"Content-Type" : "text/plain"});
                res.end("500 - Internal error");
            }
            else {
                res.writeHead(200, {"Content-Type" : "text/html"});
                res.end(data)
            }
        })
    }
    else if(req.url==='/about'){
        fs.readFile(path.join(__dirname, 'about.html'), (err, data) => {
            if (err) {
                res.writeHead(500, {"Content-Type" : "text/plain"});
                res.end("500 - Internal error");
            }
            else {
                res.writeHead(200, {"Content-Type" : "text/html"});
                res.end(data)
            }
        })
    }
    else if(req.url==='/img/gallery/graduation.jpg'){
        fs.readFile(path.join(__dirname, 'img/gallery','graduation.jpg'),(err, data)=>{
            if (err) {
                res.writeHead(500, {"Content-Type" : "text/plain"});
                res.end("500 - Internal error");
            }
            else {
                res.writeHead(200, {"Content-Type" : "image/jpg"});
                res.end(data)
            }
        })
    }
    else if(req.url==='/img/gallery/study.jpg'){
        fs.readFile(path.join(__dirname, 'img/gallery','study.jpg'),(err,data)=>{
            if (err) {
                res.writeHead(500, {"Content-Type" : "text/plain"});
                res.end("500 - Internal error");
            }
            else {
                res.writeHead(200, {"Content-Type" : "image/jpg"});
                res.end(data)
            }
        })
    }
    else if(req.url==='/video/memes'){
        fs.readFile(path.join(__dirname, 'video/students','memes.mp4'),(err, data)=>{
            if (err) {
                res.writeHead(500, {"Content-Type" : "text/plain"});
                res.end("500 - Internal error");
            }
            else {
                res.writeHead(200, {"Content-Type" : "video/mp4"});
                res.end(data)
            }
        })
    }
    else if(req.url==='/style.css'){
        fs.readFile(path.join(__dirname, 'style.css'),(err, data)=>{
            if (err) {
                res.writeHead(500, {"Content-Type" : "text/plain"});
                res.end("500 - Internal error");
            }
            else {
                res.writeHead(200, {"Content-Type" : "text/css"});
                res.end(data)
            }
        })
    }
    else if(req.url==='/script.js'){
        fs.readFile(path.join(__dirname, 'script.js'),(err, data)=>{
            if (err) {
                res.writeHead(500, {"Content-Type" : "text/plain"});
                res.end("500 - Internal error");
            }
            else {
                res.writeHead(200, {"Content-Type" : "text/js"});
                res.end(data)
            }
        })
    }
    else if(req.url==='/img/about.jpg'){
        fs.readFile(path.join(__dirname, 'img','about.jpg'),(err, data)=>{
            if (err) {
                res.writeHead(500, {"Content-Type" : "text/plain"});
                res.end("500 - Internal error");
            }
            else {
                res.writeHead(200, {"Content-Type" : "img/jpg"});
                res.end(data)
            }
        })
    }
    else if(req.url==='/img/cry.jpg'){
        fs.readFile(path.join(__dirname, 'img','cry.jpg'),(err, data)=>{
            if (err) {
                res.writeHead(500, {"Content-Type" : "text/plain"});
                res.end("500 - Internal error");
            }
            else {
                res.writeHead(200, {"Content-Type" : "img/jpg"});
                res.end(data)
            }
        })
    }
    else if(req.url==='/img/welcome.jpg'){
        fs.readFile(path.join(__dirname, 'img','welcome.jpg'),(err, data)=>{
            if (err) {
                res.writeHead(500, {"Content-Type" : "text/plain"});
                res.end("500 - Internal error");
            }
            else {
                res.writeHead(200, {"Content-Type" : "img/jpg"});
                res.end(data)
            }
        })
    }
    else {
        fs.readFile(path.join(__dirname, 'error.html'),(err,data)=>{
            if (err) {
                res.writeHead(500, {"Content-Type" : "text/plain"});
                res.end("500 - Internal error");
            }
            else {
                res.writeHead(404, {"Content-Type" : "text/html"});
                res.end(data)
            }
        })
    }
})
server.listen(port,hostname,()=>{
    console.log("The server has been started.. Press CTRL+C to stop")
});
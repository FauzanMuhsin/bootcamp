const http = require('http');
const fs = require('fs');
// const path = require('path');
const p = 3000

const renderHtml = (path, res) => {
    fs.readFile(path ,(err, data) => {
            if (err) {
                res.writeHead(404);
                res.write('ERROR: page not found');
            } else {
                res.write(data);
            };
            res.end();
        })
}

http
.createServer((req, res) => {
    const url = req.url;
    res.writeHead(200,{
        'Content-Type': 'text/html',
    });
    
    if(url === '/about') {
        renderHtml('./about.html', res);
    } else if (url === '/contact') {
        renderHtml('./contact.html', res);
    } else {
        renderHtml('./index.html',res);
    };
})

.listen(p,() => {
    console.log(`server is listening on port${p}`);
})
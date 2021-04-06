const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => {
    
    let rand=_.random(0,20);
    console.log(rand);

    const greet=_.once(()=>{

        console.log('Hello');

    });

    greet();
    greet();
    
    //    //console.log(req.url, req.method);
    res.setHeader('Content-Type', 'text/html');

    let path = './views';
    switch (req.url) {
        case '/':
            res.statusCode = 200;
            path += '/index.html';
            break;
        case '/about':
            res.statusCode = 200;
            path += '/about.html';
            break;

        case '/contact':
            res.statusCode = 200;
            path += '/contact.html';
            break;
        default:
            res.statusCode = 404;
            path += '/404.html';
            break;
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
            res.statusCode = 500;
        } else {
            //res.statusCode = 200;
            res.write(data);
            res.end();
        }
    });

    //    //res.write("Hello from world of noders");
});

server.listen(process.env.PORT||3000, () => {
    console.log('Listening on port 3000');
});
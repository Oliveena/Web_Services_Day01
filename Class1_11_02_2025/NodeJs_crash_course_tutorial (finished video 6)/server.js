const http = require('http');
const fs = require('fs');
const _ = require('lodash');

// runs every time a request comes in to a server 
// req contains URL
// res is reponse
const server = http.createServer((req, res) => {
    //console.log(req.url, req.method);

    //lodash
    const num = _.random(0, 20);
    console.log(num);

    const greet = _.once(() => {
        console.log('hello');
    });

    // set header content type (what kind of content? what's the content? how do we end?)
    res.setHeader('Content-Type', 'text/html');
// figure out path user visits
let path = './views/';
switch (req.url) {
    case '/':
        path += 'index.html';
        res.statusCode = 200;
        break;
    case '/about':
        path += 'about.html';
        res.statusCode = 200;
        break;
        // redirecting from a page that moved
    case '/about-me':
        path += 'about.html';
        res.statusCode = 301;
        // where do we redirect?
        res.setHeader('Location', '/about');
        break;
    default:
        path += '404.html';
        res.statusCode = 404;
        break;
    }

    //send an html file as a response
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            //res.write(data);
            res.end(data); // res.end always needed, and we can just pass data into it
        }
    })
});

// port#, default is localhist, f(x) fires when we start listening
server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000')
});

// this runs on the server (backend), not on the browser (frontend)

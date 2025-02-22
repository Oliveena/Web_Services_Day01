const express = require('express');

// instance of express app
const app = express();

// register view engine, using EJS
// will start to look in 'views' folder
app.set('view engine', 'ejs');


//listen for requests
app.listen(3000);

app.use((req, res, next) => {
    console.log('new request made: ');
    console.log('host', req.hostname);
    console.log('path', req.path);
    console.log('method', req.method);
    next();
})

app.use((req, res, next) => {
    console.log('in the next middleware');

    next();
})

app.get('/', (req, res) => {
    // send() automatically lets the browser decide on the type of content and status code
    //res.send('<p>home page</p>');
    //res.sendFile('./views/index.html', {root: __dirname});
    res.render('index');
});

app.get('/about', (req, res) => {
    //res.send('<p>about page</p>');
    //res.sendFile('./views/about.html', {root: __dirname});
    res.render('about');
});

app.get('/blogs/create', (req, res) => {
    res.render('create');
});

// 404
// will fire regardless of URL if other cases do not fit 
// must be at the bottom 
// a "catch-all"
app.use(() => (req, res) => {
    res.status(404).render('404');
})



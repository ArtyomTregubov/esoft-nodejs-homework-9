const routers = require('./routes');
const express = require('express');

const app = express();

const port = 5000;

app.use(routers);

app.listen(port, ()=> {
    console.log('Server started');
})

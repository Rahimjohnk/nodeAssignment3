// npm init
// npm i nodemon --save-dev
// npm i --seve express

const express = require('express');
const app = express();

const path = require('path');

const rootDir = require('./util/path.js');
// http://localhost:3000/users
app.get('/users',(req, res, next)=>{
    res.sendFile(path.join(__dirname, 'view', 'user.html'));
});
// http://localhost:3000
app.use('/', (req, res, next)=>{
    res.sendFile(path.join(rootDir, 'view', 'base.html'));
});

app.listen(3000);
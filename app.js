// npm init
// npm i nodemon --save-dev
// npm i --seve express
const path = require('path');

const express = require('express');
const app = express();

const rootDir = require('./util/path.js');

app.use(express.static(path.join(__dirname, 'public')));
// http://localhost:3000/users
app.get('/users',(req, res, next)=>{
    res.sendFile(path.join(__dirname, 'view', 'user.html'));
});
// http://localhost:3000
app.get('/', (req, res, next)=>{
    res.sendFile(path.join(rootDir, 'view', 'base.html'));
});

app.listen(3000);
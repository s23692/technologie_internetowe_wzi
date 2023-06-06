const express = require('express');
const app = express();

app.get('/test1',(req,res)=>res.send('Testowy 1'));
app.get('/test2',(req,res)=>res.send('Testowy 2'));
app.get('/test3',(req,res)=>res.send('Testowy 3'));

app.listen(8000);
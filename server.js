const { static } = require('express');
const express = require('express');
const app = express();
const port = 3000;

app.use('/',express.static('public'));

const budget = require('./budgetDetails.json');
console.log(budget);

app.get('/hello',(req, res) => {
    res.send('Hello world!!');
});

app.get('/budget',(req, res) => {
    res.json(budget);
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    
});
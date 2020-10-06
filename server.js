// Budget API
const { static } = require('express');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// app.use('/',express.static('public'));

app.use(cors());
const budget = require('./budgetDetails.json');
// console.log(budget);



app.get('/budget',(req, res) => {
    res.json(budget);
});
app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
    
});
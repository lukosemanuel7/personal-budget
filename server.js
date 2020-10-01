const { static } = require('express');
const express = require('express');
const app = express();
const port = 3000;

app.use('/',express.static('public'));

const budget ={
    myBudget: [
    {
        title: 'Eat out',
        budget: 50
    },
    {
        title: 'rent',
        budget: 370
    },
    {
        title: 'Groceries',
        budget: 100
    }
]
};

app.get('/hello',(req, res) => {
    res.send('Hello world!!');
});

app.get('/budget',(req, res) => {
    res.json(budget);
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    
});
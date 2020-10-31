// budget api using mongoose
const { static } = require('express');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

const budgetsModel = require('./models/budgets_schema');

let url = 'mongodb://localhost:27017/pb_mongodb'

app.use(cors());
app.use('/',express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
// const budget = require('./budgetDetails.json');
// console.log(budget);



app.get('/budget',(req, res) => {
    mongoose.connect(url)
        .then(()=>{
            console.log("connected to the database");
            budgetsModel.find({})
                .then((data)=>{
                    console.log(data);
                    res.json(data);
                    mongoose.connection.close();
                })
                .catch((connectionError) => {
                    console.log(connectionError);
                })
        })
        .catch((connectionError) => {
            console.log(connectionError);
        })
    
});

app.post('/addBudget',(req,res) => {

    
    // console.log(req.body);
    mongoose.connect(url)
        .then(()=>{
            console.log("connected to the database");
            let newData = new budgetsModel(req.body);
            budgetsModel.insertMany(newData)
                .then((data)=>{
                    console.log("DATAAAA", data);
                    // console.log(newData);
                    res.send(data);
                }) 
                .catch((connectionError) => {
                    console.log(connectionError);
                })
        })
        .catch((connectionError) => {
            console.log(connectionError);
        });
    
    
});
app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
    
});
var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {Users} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req,res) => {
    var todo = new Todo(
    //     {
    //     text: req.body.text
    // }
    req.body
    );

    todo.save().then((doc) => {
        res.send(doc);
    },(err)=>{
        res.status(404).send(err);
    });
});

app.listen(3000, ()=> {
    console.log('Running on port 3000');
})
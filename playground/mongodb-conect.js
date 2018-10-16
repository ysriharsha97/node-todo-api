// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client)=> {
    if(err){
        return console.log('Unable to connect to MongoDB');
    }
    console.log('Connected to MongoDB');
    const db = client.db('TodoApp');
    
    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert todo',err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Sriharsha',
    //     age: 21,
    //     location: 'Bangalore'
    // }, (err,result) => {
    //     if(err){
    //         return console.log('Unable to insert into Users',err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

     client.close();
});
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client)=> {
    if(err){
        return console.log('Unable to connect to MongoDB');
    }
    console.log('Connected to MongoDB');
    const db = client.db('TodoApp');

    //DeleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) =>{
    //     console.log(result);
    // })

    //DeleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) =>{
    //     console.log(result);
    // })

    //FindOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed:false}).then((result) =>{
    //     console.log(result);
    // })

    db.collection('Users').deleteMany({name: 'Sriharsha'}).then((result) => {
        console.log(result);
    })

    db.collection('Users').findOneAndDelete({_id: new ObjectID("5bc5bd5602d13d5ee4ccb6bb")}).then((result) => {
        console.log(result);
    })

    client.close();
});
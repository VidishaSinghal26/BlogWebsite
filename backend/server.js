const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017/';

const  client = new MongoClient(url);
const database = 'MovieSet';

async function connectDB(){
    let result = await client.connect();
    let db = result.db(database);
    let collection = db.collection('Movies');
    return collection
    // let respone = await collection.find().toArray();
    // console.log(respone);

}

module.exports = connectDB
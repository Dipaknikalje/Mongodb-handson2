const {MongoClient} = require("mongodb")

const url = "mongodb://127.0.0.1:27017"  // local host database

const atlasUrl = "mongodb+srv://self:Rushikesh03021998@cluster0.0zk9nzz.mongodb.net/?retryWrites=true&w=majority"

const mongoClient = new MongoClient(url)

async function connectToDatabase(){
try{
 await mongoClient.connect()
  console.log("server connected to database");
}
catch(err){
    console.log(err,"Something went wrong in making the connection with DataBase");
}
}

connectToDatabase()
const database = mongoClient.db("HR")

module.exports = {database}
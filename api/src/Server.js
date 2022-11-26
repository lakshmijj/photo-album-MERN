let express = require("express");
let cors = require('cors');
let path = require('path');
let MongoClient = require("mongodb").MongoClient;
let sanitizer = require("express-sanitizer");
const { ObjectId } = require("mongodb");
const { cp } = require("fs");
let objectId = require("mongodb").ObjectId;


// MongoDB constants
const URL = "mongodb://mongo:27017/";
const DB_NAME = "dbData";

// construct application object via express
let app = express();
// add cors as middleware to handle CORs errors while developing
app.use(cors());
//body parser middleware
app.use(express.json());

//setup sanitizer middleware
app.use(sanitizer());

// get absolute path to /build folder (production build of react web app)
const CLIENT_BUILD_PATH = path.join(__dirname, "./../../client/build");
// adding middleware to define static files location
app.use("/", express.static(CLIENT_BUILD_PATH));

app.get("/get", async (request, response) => {    
    // construct a MongoClient object, passing in additional options
    let mongoClient = new MongoClient(URL, { useUnifiedTopology: true });
    try {
        await mongoClient.connect();
        // get reference to database via name
        let db = mongoClient.db(DB_NAME);
        //let picArray = await db.collection("photoAlbum").find().sort("difficulty",1).toArray();
        let picArray = await (await db.collection("photoAlbum").find().toArray()).sort();
        console.log(picArray);
        let json = { "photos": picArray };
        response.status(200);
        // serializes sampleJSON to string format
        response.send(json);
    } catch (error) {
        response.status(500);
        response.send({error: error.message});
        throw error;
    } finally {
        mongoClient.close();
    }
});

app.post("/post", async (request, response) => {    
    // construct a MongoClient object, passing in additional options
    let mongoClient = new MongoClient(URL, { useUnifiedTopology: true });
    try {
        await mongoClient.connect();
         console.log(request.body);       
        //sanitize all incoming data
        let selector = {"id": request.sanitize(request.body.photoId)};
        let commentJson = {
            "author": request.sanitize(request.body.author),
            "comment": request.sanitize(request.body.comment)
        };       
       
        //create collection in db
        let photoCollection = mongoClient.db(DB_NAME).collection("photoAlbum");
        // var result = await  photoCollection.updateOne(
        //     selector,
        //     { $unshift: { comments: commentJson } }
        // )

        let photo = (await photoCollection.find().toArray()).find(item => item.id== selector.id);
        photo.comments.unshift(commentJson);
        let newValues = {$set:photo};   
        var result = await photoCollection.updateOne(selector, newValues);
        if(result.matchedCount <= 0){
            response.status(404);
            response.send({error: "No photo found with ID"});
            mongoClient.close();
            return;
        }
        response.status(200);
        response.send(result);       
    } catch (error) {
        response.status(500);
        response.send({error: error.message});
        throw error;
    } finally {
        mongoClient.close();
    }
});

// wildcard to handle all other non-api URL routings (/selected, /all, /random, /search)
app.use("/*", express.static(CLIENT_BUILD_PATH));

// startup the Express server - listening on port 80
app.listen(80, () => console.log("Listening on port 80"));
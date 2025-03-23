const express = require("express");
const bodyParser = require("body-parser"); 
const cors = require("cors");
const { MongoClient } = require("mongodb");
const e = require("express");

const app = express();

const urlencodedParser = bodyParser.urlencoded({ extended: false }); app.use(bodyParser.json());

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

// const url = "mongodb://127.0.0.1:27017";
const url = " mongodb://127.0.0.1:27017/" 

const database = "FoodDelivery";

const PORT = 8000;

app.get("/", (req, res) => { res.send("Server running!");
});

app.get("/users", async (req, res) => { let users = await getUsers(); res.send(users);
});

async function addUser(data) {
const client = new MongoClient(url);

try {
let mydb = (await client.connect()).db(database); let collection = mydb.collection("User");

await collection.insertOne(data);

console.log("Bill successfully stored in the FoodDelivery Database.");
} catch (error) { console.log(error);
} finally {
await client.close();
}
}

async function getUsers() {
 
const client = new MongoClient(url); let data;
try {
let mydb = (await client.connect()).db(database);
data = await mydb.collection("User").find({}).toArray();
} catch (error) { console.log(error);
} finally {
await client.close();
}

return data;
}

app.post("/signup", urlencodedParser, async (req, res) => { let data = req.body;
let users = await getUsers();
let found = users.find((user) => user.email === data.email); if (found === undefined) addUser(data);
else
res.send(
"Account with Email ID: " + data.email +
" already exists. Use a different Email ID or Sign in."
);
});

async function addOrder(data) {
const client = new MongoClient(url);

try {
let mydb = (await client.connect()).db(database); let collection = mydb.collection("Order");

await collection.insertOne(data);

console.log(
"Order saved successfully in database Food Delivery Application."
);
} catch (error) { console.log(error);
} finally {
await client.close();
}
}

app.post("/orders", urlencodedParser, async (req, res) => { let data = req.body;
addOrder(data); res.send(
"Server: Order placed Successfully for " + data.user + " at " + data.time
 
);
});

app.listen(PORT, function (err) { if (err) console.log(err); console.log("***BACKEND***"); console.log("Server Started.");
console.log("Server listening on PORT:", PORT);
});


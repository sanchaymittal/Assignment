'use strict';

const fs = require('fs');

// const Web3 = require('web3')
// const web3 = new Web3('https://kovan.infura.io/v3/6c6f87a10e12438f8fbb7fc7c762b37c')
var admin = require("firebase-admin");

var serviceAccount = require('./assignment-b4020-firebase-adminsdk-u391t-db556eec8e.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://assignment-b4020.firebaseio.com"
});

let db = admin.firestore();

async function getTransactionFromHash(hash) {

    let dRef = db.collection('Transactions').doc(hash);
    dRef.get()
        .then(doc => {
            if (!doc.exists) {
                console.log('No such Transaction!');
            } else {
                console.log('Transaction data:', doc.data());
            }
        })
        .catch(err => {
            console.log('Error getting Transaction', err);
        });
}

async function getTransactionFromAddress(address){
    let json = [];
    
    let dRef = await db.collection('Transactions');
    let query = await dRef.where('from', '==', address).get()
        .then(snapshot => {
            if (snapshot.empty) {
                console.log('No matching address.');
                return;
            }

            snapshot.forEach(doc => {
                //let data = JSON.stringify(doc.id, '=>', doc.data());
                json.push(doc.data());
                //console.log(doc.id, '=>', doc.data());
                console.log(json);

            });
        })
        .catch(err => {
            console.log('Error getting address', err);
        });
    return json
}

const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});

// define a simple route
app.get('/getTransaction', async (req, res) => {
    //res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
    const data = await getTransactionFromAddress(req.query.address)
    //let data = JSON.stringify(ex);
    res.json(data);
});

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
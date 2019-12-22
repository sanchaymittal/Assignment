// const Web3 = require('web3')
// const web3 = new Web3('https://kovan.infura.io/v3/6c6f87a10e12438f8fbb7fc7c762b37c')
var admin = require("firebase-admin");

var serviceAccount = require('./assignment-b4020-firebase-adminsdk-u391t-db556eec8e.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://assignment-b4020.firebaseio.com"
});

let db = admin.firestore();

function getTransactionFromHash(hash) {

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

function getTransactionFromAddress(address) {
    let dRef = db.collection('Transactions');
    let query = dRef.where('from', '==', address).get()
        .then(snapshot => {
            if (snapshot.empty) {
                console.log('No matching address.');
                return;
            }

            snapshot.forEach(doc => {
                console.log(doc.id, '=>', doc.data());
            });
        })
        .catch(err => {
            console.log('Error getting address', err);
        });
}

//getTransactionFromHash('0x000acbfebeff996ee153b34c57ca56708a710374c519997f43710fcc10ca9ad3')
getTransactionFromAddress('0xa8322307bea4a8047883622582e058c452a8fa38')
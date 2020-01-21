const Web3 = require('web3')
const web3 = new Web3('https://kovan.infura.io/v3/c80e8facf4bd4b718db243b8dfc1bdec')

// var admin = require("firebase-admin");

// var serviceAccount = require('./assignment-b4020-firebase-adminsdk-u391t-db556eec8e.json');

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://assignment-b4020.firebaseio.com"
// });

// worker.addEventListener('message', function(e) {
//   console.log(e.data);
// })
// worker.postMessage(null);
// let db = admin.firestore();
web3.eth.getBlockNumber().then((latest) => {
  let i
  try {
    for (i = 0; i < 10000; i++) {
      web3.eth.getBlock(latest - i).then((data) => {
        data['transactions'].forEach(hash => web3.eth.getTransactionReceipt(hash).then((trans) => {
          // let dbrf = db.collection(('Transactions').toString()).doc(hash);
          //console.log(trans['from'], trans['to'], trans['blockNumber'], trans['transactionHash'])  
          // dbrf.set({
          //   'from': trans['from'],
          //   'to': trans['to'],
          //   'blocknumber': trans['blockNumber'],
          //   'transactions': trans['transactionHash'],
          //   'blockHash': trans['blockHash'],
          //   'contractAddress': trans['contractAddress'],
          //   'cumulativeGasUsed': trans['cumulativeGasUsed'],
          //   'root': trans['root'],
          //   'gasUsed': trans['gasUsed'],
          //   'status': trans['status'],
          //   'transactionIndex': trans['transactionIndex']
          // });
          //OR
          //dbrf.set(trans);        
        }));
      })
    }
  } catch (error) {
    console.log(i)
  }
})
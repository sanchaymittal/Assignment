const Web3 = require('web3')
const web3 = new Web3('https://kovan.infura.io/v3/6c6f87a10e12438f8fbb7fc7c762b37c')
//const web3 = new  Web3(new Web3.providers.WebsocketProvider("wss://kovan.infura.io/ws"));
//var worker = new Worker('worker.js');
var MongoClient = require('mongodb').MongoClient;
//const url = 'mongodb+srv://root:root@cluster0-km8op.mongodb.net/test?retryWrites=true&w=majority'
const url = 'var url = "mongodb://localhost:27017/'

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var datastore = db.db("data");
  console.log("Database created!");

  // worker.addEventListener('message', function(e) {
  //   console.log(e.data);
  // })
  // worker.postMessage(null);

  web3.eth.getBlockNumber().then((latest) => {
    let i
    try {
      for (i = 0; i < 1000; i++) {
        web3.eth.getBlock(latest - i).then((data) => {
          //console.log(data['transactions'])
          data['transactions'].forEach(hash => web3.eth.getTransactionReceipt(hash).then((trans) => {
            //console.log(trans['from'], trans['to'], trans['blockNumber'], trans['transactionHash'])  
            datastore.collection("Transactionss").insertOne({
              trans
            }, (err, result) => {})
          }));
        })
      }
    } catch (error) {
      console.log(i)
    }
  })
  db.close();
});
'use strict';

const fs = require('fs');

const Web3 = require('web3')
const web3 = new Web3('https://kovan.infura.io/v3/6c6f87a10e12438f8fbb7fc7c762b37c')
//var worker = new Worker('worker.js');
// worker.addEventListener('message', function(e) {
//   console.log(e.data);
// })
// worker.postMessage(null);

web3.eth.getBlockNumber().then((latest) => {
  for (let i = 0; i < 10000; i++) {
    web3.eth.getBlock(latest - i).then((data) => {
      data['transactions'].forEach(hash => web3.eth.getTransactionReceipt(hash).then((trans) => {
        var transd = {
          'from': trans['from'],
          'to': trans['to'],
          'blocknumber': trans['blockNumber'],
          'transactions': trans['transactionHash']
        }
        let data = JSON.stringify(transd);
        fs.appendFileSync('file.json', data);
      }));
    })
  }
})
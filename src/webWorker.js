// worker.js

self.addEventListener('message', function (e) {
  web3.eth.getBlockNumber().then((latest) => {
    for (let i = 0; i < 10000; i++) {
      web3.eth.getBlock(latest - i).then(console.log)
    }
  })
  self.postMessage(message);
  self.close();
})
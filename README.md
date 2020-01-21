# API

<!-- ## Run
Assignment is an API to retrieve the user transactions, by given the user address.
- Please visit the given link.
- Enter the user Address to retrieve the transactions by the user.
```
https://ethereum-transaction.herokuapp.com/getTransaction?address=0x002002812b42601ae5026344f0395e68527bb0f8
``` -->

1. The emails used for signing up to Infura: sanchaymittal@gmail.com
2. A screenshot of the "Stats" dashboard of your project showing the graphs of network traffic
![stats](/static/stats.png)

## How to set it up[LocalHost]
### Prerequisites

Ensure you have Nodejs & NPM installed on your machine. Use Chrome or Firefox as your browser...

1. Node.js (v10+): Install or update Node.js from [official page](https://nodejs.org/en/).

```
$ node -v
$ npm -v
$ npm install -g update-node
```

OR

Yarn (v1+): Install Yarn from [official Page](https://yarnpkg.com/lang/en/docs/install/#debian-stable).

```
$ yarn --version
```

### Setup the Environment

```
$ mkdir repo && cd repo
$ git clone https://github.com/sanchaymittal/Assignment
$ cd Assignment
$ yarn 
or
$ node install
```
ps: If permission is denied, please use sudo as a prefix to any command provided. And if you are intrested in making permenant changes to avoid future issues use ```chmod```

### Host Server
```
$ node server.js 
```
### Run
```
http://localhost:3000/getTransaction?address=0x002002812b42601ae5026344f0395e68527bb0f8
```
Update the address, To use the API to find the transactions emitted by the user address.


> Optional...
1. Update the Firebase Hosting
- Create a [Cloud Firestore database](https://firebase.google.com/docs/firestore/quickstart?authuser=5)
- Generate KeyPair from firebase cloud test hosting project.
- Save the KeyPair file and update serviceAccount and databaseURL.

2. Connect to Ethereum node(hosted by Infura) & Catch the Latest blocks on Kovan Network
```
$ node main.js
```

## Docker

### Prerequisites
1. Docker (v18.+): Install Docker from [official Page](https://www.docker.com/get-started).
```
$ Docker --version
```

### Setup the Environment

```
$ mkdir repo && cd repo
$ git clone https://github.com/sanchaymittal/Assignment
$ cd Assignment
```

### Run
```
$ docker build -t <imageName> .
$ docker run -p 49160:3000 <imageName>
```

## Assignment

- [x] Connect to an Ethereum node (hosted by Infura) using web3js on the Kovan testnet. Reference. 
- [x] You can use this blockchain testnet API endpoint on Infura: kovan.infura.io/v3/6c6f87a10e12438f8fbb7fc7c762b37c
- [x] Index the data in a database of your choice that will serve as the datastore for the API requests. Most important fields in a transaction for the purpose of this assignment will be from, to, blockNumber and transactionHash.
- [x] We would like you to index at least 10,000 recent blocks.
- [x] Construct an API to retrieve the user transactions, given the user address.
- [x] Push all the code you write in a github repository and share it with us. 
- [x] Please include the instructions to run the server in the README.
- [x] Cookie points for a clean commit history that reflects your progress.
- [x] (Optional) Bonus points for including a docker file to spin up everything together.
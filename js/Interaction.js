const Wallet = require('./Wallet');  // Assuming Wallet class is in a separate file
const BlockchainUtils = require('./BlockchainUtils');  // Assuming BlockchainUtils module is in a separate file
const axios = require('axios');

function postTransaction(sender, receiver, amount, type) {
    const transaction = sender.createTransaction(receiver.publicKeyString(), amount, type);
    const url = "http://localhost:5000/transaction";
    const package = { transaction: BlockchainUtils.encode(transaction) };

    axios.post(url, package)
        .then(response => {
            console.log(response.data);  // Handle the response as needed
        })
        .catch(error => {
            console.error("Error posting transaction:", error);
        });
}

if (require.main === module) {
    const bob = new Wallet();
    const alice = new Wallet();
    alice.fromKey('keys/stakerPrivateKey.pem');
    const exchange = new Wallet();

    // forger: genesis
    postTransaction(exchange, alice, 100, 'EXCHANGE');
    postTransaction(exchange, bob, 100, 'EXCHANGE');
    postTransaction(exchange, bob, 10, 'EXCHANGE');

    // forger: probably alice
    postTransaction(alice, alice, 25, 'STAKE');
    postTransaction(alice, bob, 1, 'TRANSFER');
    postTransaction(alice, bob, 1, 'TRANSFER');
}

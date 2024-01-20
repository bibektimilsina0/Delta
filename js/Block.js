class Block {
    constructor(transactions, lastHash, forger, blockCount) {
        this.blockCount = blockCount;
        this.transactions = transactions;
        this.lastHash = lastHash;
        this.timestamp = Date.now() / 1000; // equivalent to time.time() in seconds
        this.forger = forger;
        this.signature = '';
    }

    static genesis() {
        const genesisBlock = new Block([], 'genesisHash', 'genesis', 0);
        genesisBlock.timestamp = 0;
        return genesisBlock;
    }

    toJson() {
        const data = {};
        data['blockCount'] = this.blockCount;
        data['lastHash'] = this.lastHash;
        data['signature'] = this.signature;
        data['forger'] = this.forger;
        data['timestamp'] = this.timestamp;
        const jsonTransactions = this.transactions.map(transaction => transaction.toJson());
        data['transactions'] = jsonTransactions;
        return data;
    }

    payload() {
        const jsonRepresentation = { ...this.toJson() };
        jsonRepresentation['signature'] = '';
        return jsonRepresentation;
    }

    sign(signature) {
        this.signature = signature;
    }
}

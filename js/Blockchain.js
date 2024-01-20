const Block = require('./Block');  // Assuming Block class is in a separate file
const BlockchainUtils = require('./BlockchainUtils');  // Assuming BlockchainUtils module is in a separate file
const AccountModel = require('./AccountModel');  // Assuming AccountModel class is in a separate file
const ProofOfStake = require('./ProofOfStake');  // Assuming ProofOfStake class is in a separate file

class Blockchain {
    constructor() {
        this.blocks = [Block.genesis()];
        this.accountModel = new AccountModel();
        this.pos = new ProofOfStake();
    }

    addBlock(block) {
        this.executeTransactions(block.transactions);
        this.blocks.push(block);
    }

    toJson() {
        const data = {};
        const jsonBlocks = this.blocks.map(block => block.toJson());
        data['blocks'] = jsonBlocks;
        return data;
    }

    blockCountValid(block) {
        return this.blocks[this.blocks.length - 1].blockCount === block.blockCount - 1;
    }

    lastBlockHashValid(block) {
        const latestBlockchainBlockHash = BlockchainUtils.hash(JSON.stringify(this.blocks[this.blocks.length - 1].payload())).toString();
        return latestBlockchainBlockHash === block.lastHash;
    }

    getCoveredTransactionSet(transactions) {
        const coveredTransactions = [];
        transactions.forEach(transaction => {
            if (this.transactionCovered(transaction)) {
                coveredTransactions.push(transaction);
            } else {
                console.log('transaction is not covered by sender');
            }
        });
        return coveredTransactions;
    }

    transactionCovered(transaction) {
        if (transaction.type === 'EXCHANGE') {
            return true;
        }
        const senderBalance = this.accountModel.getBalance(transaction.senderPublicKey);
        return senderBalance >= transaction.amount;
    }

    executeTransactions(transactions) {
        transactions.forEach(transaction => {
            this.executeTransaction(transaction);
        });
    }

    executeTransaction(transaction) {
        if (transaction.type === 'STAKE') {
            const sender = transaction.senderPublicKey;
            const receiver = transaction.receiverPublicKey;
            if (sender === receiver) {
                const amount = transaction.amount;
                this.pos.update(sender, amount);
                this.accountModel.updateBalance(sender, -amount);
            }
        } else {
            const sender = transaction.senderPublicKey;
            const receiver = transaction.receiverPublicKey;
            const amount = transaction.amount;
            this.accountModel.updateBalance(sender, -amount);
            this.accountModel.updateBalance(receiver, amount);
        }
    }

    nextForger() {
        const lastBlockHash = BlockchainUtils.hash(JSON.stringify(this.blocks[this.blocks.length - 1].payload())).toString();
        return this.pos.forger(lastBlockHash);
    }

    createBlock(transactionsFromPool, forgerWallet) {
        const coveredTransactions = this.getCoveredTransactionSet(transactionsFromPool);
        this.executeTransactions(coveredTransactions);
        const newBlock = forgerWallet.createBlock(
            coveredTransactions,
            BlockchainUtils.hash(JSON.stringify(this.blocks[this.blocks.length - 1].payload())).toString(),
            this.blocks.length
        );
        this.blocks.push(newBlock);
        return newBlock;
    }

    transactionExists(transaction) {
        for (const block of this.blocks) {
            for (const blockTransaction of block.transactions) {
                if (transaction.equals(blockTransaction)) {
                    return true;
                }
            }
        }
        return false;
    }

    forgerValid(block) {
        const forgerPublicKey = this.pos.forger(block.lastHash);
        const proposedBlockForger = block.forger;
        return forgerPublicKey === proposedBlockForger;
    }

    transactionsValid(transactions) {
        const coveredTransactions = this.getCoveredTransactionSet(transactions);
        return coveredTransactions.length === transactions.length;
    }
}

module.exports = Blockchain;

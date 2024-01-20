from flask_classful import FlaskView, route
from flask import Flask, jsonify, request
from BlockchainUtils import BlockchainUtils
from urllib.parse import unquote
from Wallet import Wallet
import requests


node = None


class NodeAPI(FlaskView):

    def __init__(self):
        self.app = Flask(__name__)

    def start(self, port):
        NodeAPI.register(self.app, route_base='/')
        self.app.run(host='localhost', port=port)

    def injectNode(self, injectedNode):
        global node
        node = injectedNode

    @route('/info', methods=['GET'])
    def info(self):
        return 'This is a communiction interface to a nodes blockchain', 200

    @route('/blockchain', methods=['GET'])
    def blockchain(self):
        return node.blockchain.toJson(), 200

    @route('/transactionPool', methods=['GET'])
    def transactionPool(self):
        transactions = {}
        for ctr, transaction in enumerate(node.transactionPool.transactions):
            transactions[ctr] = transaction.toJson()
        return jsonify(transactions), 200
    

    @route('/do',methods=['POST'])
    def do(self):
        def postTransaction(sender, receiver, amount, type):
            transaction = sender.createTransaction(
                receiver.publicKeyString(), amount, type)
            url = "http://localhost:5000/transaction"
            package = {'transaction': BlockchainUtils.encode(transaction)}
            request = requests.post(url, json=package)
            return package
        bob = Wallet()
        alice = Wallet()
        
        request=postTransaction(bob, alice, 69, 'EXCHANGE')
        return jsonify(request),200

    @route('/transaction', methods=['POST'])
    def transaction(self):
        values = request.get_json()
        if not 'transaction' in values:
            return 'Missing transaction value', 400
        transaction = BlockchainUtils.decode(values['transaction'])
        node.handleTransaction(transaction)
        response = {'message': 'Received transaction'}
        return jsonify(response), 201
    
    @route('/balance', methods=['POST'])
    def get_balance(self):
        values = request.get_json()
        if 'public_key' not in values:
            return 'Missing public_key value', 400

        public_key = values['public_key']
        balance = node.blockchain.getAccountBalance(public_key)
        response = {'balance': balance}
        return jsonify(response), 200
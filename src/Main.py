from transactions.Transaction import Transaction
from interaction.Wallet import Wallet
from transactions.TransactionPool import TransactionPool
from blockchain.Block import Block
from blockchain.Blockchain import Blockchain
import pprint
from blockchain.BlockchainUtils import BlockchainUtils
from interaction.AccountModel import AccountModel
from interaction.Node import Node
import sys

if __name__ == '__main__':
    
    # Extract command-line arguments for IP, port, API port, and optional key file
    ip = sys.argv[1]
    port = int(sys.argv[2])
    apiPort = int(sys.argv[3])
    keyFile = None
    if len(sys.argv) > 4:
        keyFile = sys.argv[4]

    # Create a Node instance with specified parameters

    node = Node(ip, port, keyFile)
    node.startP2P()
    node.startAPI(apiPort)                                                                      

import uuid
import time
import copy


class Transaction():

    def __init__(self, senderPublicKey, receiverPublicKey, amount, type):

        #  
        # Initializes a new transaction instance.

        # Args:
        #     senderPublicKey (str): Public key of the sender.
        #     receiverPublicKey (str): Public key of the receiver.
        #     amount (float): Amount of the transaction.
        #     type (str): Type of the transaction (e.g., 'EXCHANGE', 'STAKE', 'TRANSFER').
        # 

        self.senderPublicKey = senderPublicKey
        self.receiverPublicKey = receiverPublicKey
        self.amount = amount
        self.type = type
        self.id = (uuid.uuid1()).hex   # Generate a unique transaction ID
        self.timestamp = time.time()   # Record the timestamp of the transaction
        self.signature = ''   # Placeholder for the transaction signature


    def toJson(self):

        # Converts the transaction object to a JSON-like dictionary.

        # Returns:
        #     dict: JSON-like dictionary representation of the transaction.
        return self.__dict__

    def sign(self, signature):
        # Signs the transaction with a given signature.

        # Args:
        #     signature (str): Signature to be applied to the transaction.
        self.signature = signature

    def payload(self):

        # Returns a copy of the transaction with the signature removed.

        # Returns:
        #     dict: JSON-like dictionary representation of the transaction without the signature.
        
        jsonRepresentation = copy.deepcopy(self.toJson())
        jsonRepresentation['signature'] = ''
        return jsonRepresentation

    def equals(self, transaction):
        if self.id == transaction.id:
            return True
        else:
            return False

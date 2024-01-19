import uuid
import time
class Transcation():
    def __init__(self,senderPublicKey,receivePublicKey,amount ,type):
        self.senderPublicKey=senderPublicKey
        self.receivePublicKey=receivePublicKey
        self.amount=amount
        self.type=type
        self.id=uuid.uuid1().hex
        self.timestamp=time.time()
        self.signature=''
    
    def toJson(self):
        return self.__dict__
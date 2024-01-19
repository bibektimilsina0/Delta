import Transaction

if __name__=="__main__":
    sender='sender'
    receiver='receiver'
    type="TRANSFER"
    amount=1
    transcation=Transaction(sender,receiver,amount,type)
    print(transcation)
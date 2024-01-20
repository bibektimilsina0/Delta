from BlockchainUtils import BlockchainUtils
package = {'transaction': '{"sender": "huvdhebfdu", "receiver": "nhsbhejb", "amount": "21", "type": "EXCHANGE"}'}
encoded_transaction = package['transaction']
print(encoded_transaction)
decoded_transaction = BlockchainUtils.decode(encoded_transaction)
print(decoded_transaction)

const crypto = require('crypto');
const jsonpickle = require('jsonpickle');

class BlockchainUtils {
    static hash(data) {
        const dataString = JSON.stringify(data);
        const dataBytes = Buffer.from(dataString, 'utf-8');
        const dataHash = crypto.createHash('sha256').update(dataBytes).digest('hex');
        return dataHash;
    }

    static encode(objectToEncode) {
        return jsonpickle.encode(objectToEncode, true);
    }

    static decode(encodedObject) {
        return jsonpickle.decode(encodedObject);
    }
}

module.exports = BlockchainUtils;

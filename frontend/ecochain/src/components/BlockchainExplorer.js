import React, { useState, useEffect } from 'react';

function BlockchainExplorer() {
  const [blockchainData, setBlockchainData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/blockchain');
        const data = await response.json();
        const blocks = data.blocks;

        setBlockchainData(blocks);
        const senderPublicKey= blocks[1].transactions[0].receiverPublicKey
       
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-8">
      {blockchainData.map((block, index) => (
        <div
          key={block.blockCount}
          className={`shadow-md rounded-md p-6 mb-8 bg-gray-300 hover:shadow-sm`}
        >
          <h2 className={`text-2xl text-center font-bold mb-4 text-${index % 2 === 0 ? 'blue' : 'green'}-800`}>
            Block #{block.blockCount}
          </h2>
          <div className="mb-2">
            <span className="text-xl m-2 font-bold p-2 rounded hover:bg-blue-100 transition-colors">
              Forger:
            </span>{' '}
            {block.forger}
          </div>
          <div className="mb-2">
            <span className="text-xl m-2 font-bold p-2 rounded hover:bg-blue-100 transition-colors">
              Last Hash:
            </span>{' '}
            {block.lastHash}
          </div>
          <div className="mb-2">
            <span className="text-xl m-2 font-bold p-2 rounded hover:bg-blue-100 transition-colors">
              Signature:
            </span>{' '}
            {block.signature}
          </div>
          <div className="mb-2">
            <span className="text-xl m-2 font-bold p-2 rounded hover:bg-blue-100 transition-colors">
              Timestamp:
            </span>{' '}
            {block.timestamp}
          </div>
          {block.transactions.length > 0 ? (
            <div>
              <h3 className={`text-xl font-bold mb-4 text-${index % 2 === 0 ? 'blue' : 'green'}-800`}>
                Transactions
              </h3>
              {block.transactions.map((transaction) => (
                <div key={transaction.id} className="bg-gray-100 p-4 mb-4 rounded-md">
                  <p className="mb-2">
                    <span className="text-xl m-2 font-bold p-2 rounded hover:bg-green-100 transition-colors">
                      Amount:
                    </span>{' '}
                    {transaction.amount}
                  </p>
                  <p className="mb-2">
                    <span className="text-xl m-2 font-bold p-2 rounded hover:bg-green-100 transition-colors">
                      ID:
                    </span>{' '}
                    {transaction.id}
                  </p>
                  <p className="mb-2">
                    <span className="text-xl m-2 font-bold p-2 rounded hover:bg-green-100 transition-colors">
                      Receiver Public Key:
                    </span>{' '}
                    {transaction.receiverPublicKey}
                  </p>
                  <p className="mb-2">
                    <span className="text-xl m-2 font-bold p-2 rounded hover:bg-green-100 transition-colors">
                      Sender Public Key:
                    </span>{' '}
                    {transaction.senderPublicKey}
                  </p>
                  {/* Add more elements to display other transaction data as needed */}
                </div>
              ))}
            </div>
          ) : (
            <p>No transactions in this block</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default BlockchainExplorer;

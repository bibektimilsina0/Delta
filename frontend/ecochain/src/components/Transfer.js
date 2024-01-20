import React from 'react';
import { useState, useEffect } from 'react';
import Navbar from './Navbar';
function Transfer() {
    const [balance, setBalance] = useState(0);
    const senderPublicKey = localStorage.getItem('publickey')
    const [jsonData, setJsonData] = useState({
        amount: '',
        type: "TRANSFER"
    })
    const truncatedKey = senderPublicKey ? `${senderPublicKey.slice(30, 80)}...` : 'no public key';

    const handleCancel = () => {
        // Go back to the previous page when cancel is clicked
        window.history.back();
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setJsonData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };
    const fetchBalance = async () => {
        try {
            const response = await fetch('http://localhost:5000/balance', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ public_key: senderPublicKey }),
            });
            const data = await response.json()
            setBalance(data.balance)
            console.log(data)
        } catch (error) {
            console.error('Error fetching balance:', error);
        }
    };
    useEffect(() => {
        fetchBalance();
    }, []);
    const handleTransction = async (e) => {
       
        console.log(jsonData)

        try {
            const response = await fetch('http://localhost:5000/do', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(jsonData),
            });
            const data = await response.json()
            console.log(JSON.parse(data.transaction))
         
            const transaction=JSON.parse(data.transaction)
            if (transaction) {
                
          
                // Update the content of the transaction-details element
                const transactionDetailsElement = document.getElementById('transaction-details');
                transactionDetailsElement.innerHTML = `
                  <p>Transaction ID: ${transaction.id}</p>
                  <p>Type: ${transaction.type}</p>
                  <p>Amount: ${transaction.amount}</p>
                  <p>Sender Public Key: ${transaction.senderPublicKey}</p>
                  <p>Receiver Public Key: ${transaction.receiverPublicKey}</p>
                `;
              }
        } catch (error) {
            console.error('Error posting transaction:', error);
        }
    }

    return (
        <div className='h-svh bg-[#1D3565] ' id='transfer'>
            <Navbar/>
        <div className=" flex justify-center items-center mt-8   ">
           
            <div className="w-1/2 text-center items-center  bg-[#F1FAEE] h-[70vh]">

                {/* Sender Account */}
                <div className="border p-4 mb-4">
                    <h6 className=" font-semibold">Sender Account:</h6>
                    <p className="text-gray-700">{senderPublicKey ? `${truncatedKey}` : 'your public key'}</p>
                </div>

                {/* Receiver Account */}
                <div className="border p-4 mb-4">
                    <h6 className=" font-semibold">Receiver Account:</h6>
                    <input
                        type="text"
                        name="receiverPublicKey"  // This should match the name used in handleChange
                        id="receiverPublicKey"
                        className="border p-2 w-full"
                        // onChange={(e) => handleChange(e)}
                    />

                </div>

                {/* Assets */}
                <div className="flex mb-4">

                    <h3 className="mr-2 w-1/2 font-semibold">Assets:</h3>

                    <div className="border p-1 w-1/2">
                        <h4 className=" font-semibold">Eco Coin</h4>
                        <p className="text-gray-400">Balance: <span className="font-bold">{balance ? `${balance}` : '1'}ECO</span></p>
                    </div>
                </div>

                {/* Amount to Send */}
                <div className="flex mb-4">

                    <h3 className="mr-2 w-1/2 font-semibold">Amount to Send:</h3>

                    <div className="border p-4">
                        <input
                            type="number"
                            name="amount"
                            id="amount"
                            placeholder='0.001'
                            onChange={(e) => handleChange(e)}
                            className="p-2 border  rounded-full w-3/4"
                        /><span>ECO</span>
                        <p className="text-gray-400">Fee: <span className="font-bold">10%</span></p>
                    </div>
                </div>
                <div className="flex justify-center mb-4">
                    <button className="bg-[#E63946]   text-white font-bold py-2 px-4 rounded mx-4" onClick={(e) => handleTransction(e)}>
                        Next
                    </button>
                    <button className=" bg-gray-400 hover:bg-gray-700 text-white font-bold py-2 mx-4 px-4 rounded" onClick={handleCancel} >
                        Cancel
                    </button>
                </div>
                <div id='transaction-details'>

                </div>

            </div>
        </div>
   
        </div>
            );
}

export default Transfer;

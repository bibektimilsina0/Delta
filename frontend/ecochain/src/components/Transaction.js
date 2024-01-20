import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

import { useState, useEffect } from 'react';


function Transaction() {
    const [balance, setBalance] = useState(0);
    const senderPublicKey = localStorage.getItem('publickey')
    console.log(senderPublicKey)
    const truncatedKey = senderPublicKey ? `${senderPublicKey.slice(30, 42)}...` : 'no public key';

    // Function to fetch balance from the API
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
    const handleCopyClick = () => {
        // Copy the full key to the clipboard
        navigator.clipboard.writeText(senderPublicKey);
      };
    // useEffect hook to fetch balance when the component mounts
    useEffect(() => {
        fetchBalance();
    }, []);

    return (
        <div className="flex justify-center">

            <div className="w-1/2 flex items-center justify-center">
                <div className="w-[70%] text-center items-center border h-[80vh] mt-2 p-8 bg-[#F1FAEE] rounded-lg mr-4">
                <br/>
                    <div className="mb-4">
                        <h1 className="text-3xl font-bold text-[#E63946] mb-2 font-mono">Eco-Chain</h1>
                    </div>
                    <br/>
                    <div className="flex justify-between items-center mb-4 ml-12">
                        <div className="flex-grow"></div>
                        <div className="flex-grow"></div>
                        <div className="flex-shrink-0">
                            <select className="border p-2 rounded">
                                <option value="">Account 1</option>
                                {/* Add more account options as needed */}
                            </select>
                        </div>
                        <div className="flex-grow"></div>
                        <div className="flex-grow text-gray-600">Account Details</div>
                    </div>
                    <div className="flex justify-center ">
                        <h1 className="text-md text-center  font-semibold text-[#E63946] mb-4 bg-[#A8DADC] w-[50%] border rounded-full h-8 ">{senderPublicKey ? `${truncatedKey}` : 'no public key'}  <FontAwesomeIcon icon={faCopy} onClick={handleCopyClick} className='ml-8'/></h1>
                       
                           

                    </div>
                    <div className="mb-4">
                        <h3 className="text-xl font-semibold mb-1">{balance ? `${balance}` : '0'}<span className="text-gray-600"> ECO</span></h3>
                        <h5 className="text-lg">{balance ? `$${balance * 130}` : '$000'}<span className="text-gray-600">USD</span></h5>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="flex justify-center mb-4">
                        <button className="bg-[#E63946]  text-white font-bold py-2 px-4 rounded mx-4">
                            <Link to='/transfer'>Transfer</Link>
                        </button>
                        <button className="bg-[#E63946] text-white font-bold py-2 mx-4 px-4 rounded">
                            <Link to='/stack'>Stake</Link>
                        </button>
                    </div>
                    {/* <div className="border min-h-[30vh] p-4 overflow-y-auto">
                        <h4 className="text-lg font-semibold mb-2">History</h4>
                       
                    </div> */}
                </div>
            </div>

        </div>
    );
}

export default Transaction;

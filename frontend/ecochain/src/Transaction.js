
import { Link } from 'react-router-dom';
import img from './image/green.jpg';
import { useState, useEffect } from 'react';  


function Transaction() {
    const [balance, setBalance] = useState(0);

    // Function to fetch balance from the API
    const fetchBalance = async () => {
        try {
            const response = await fetch('your_api_endpoint_here');  
            setBalance(response.data.balance);  // Assuming the API response has a 'balance' field
        } catch (error) {
            console.error('Error fetching balance:', error);
        }
    };

    // useEffect hook to fetch balance when the component mounts
    useEffect(() => {
        fetchBalance();
    }, []); 
    
    return (
        <div className="flex justify-center">
            <div className="w-1/2 flex items-center justify-center">
                <img src={img} alt="logo" className="m-4 w-[80%] rounded-xl h-[50vh]  object-cover" />
            </div>
            <div className="w-1/2 flex items-center justify-center">
            <div className="w-[70%] text-center items-center border h-[80vh] mt-2 p-8 bg-gray-200 rounded-lg mr-4">
                <div className="mb-4">
                    <h1 className="text-3xl font-bold text-blue-500 mb-2">Eco-Chain</h1>
                </div>
                <div className="flex justify-between items-center mb-4 ml-12">
                    <div className="flex-grow"></div>
                    <div className="flex-shrink-0">
                        <select className="border p-2 rounded">
                            <option value="">Account 1</option>
                            {/* Add more account options as needed */}
                        </select>
                    </div>
                    <div className="flex-grow text-gray-600">Account Details</div>
                </div>
                <div className="flex justify-center">
                    <h1 className="text-2xl font-bold mb-4 bg-gray-400 w-[50%] border rounded-full">Public Key</h1>
                </div>
                <div className="mb-4">
                    <h3 className="text-xl font-semibold mb-1">Balance<span className="text-gray-600"> BTC</span></h3>
                    <h5 className="text-lg">$balanceinuse <span className="text-gray-600">USD</span></h5>
                </div>
                <div className="flex justify-center mb-4">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-4">
                        <Link to='/transfer'>Transfer</Link>
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-4 px-4 rounded">
                        <Link to='/stack'>Stack</Link>
                    </button>
                </div>
                <div className="border min-h-[30vh] p-4 overflow-y-auto">
                    <h4 className="text-lg font-semibold mb-2">History</h4>
                    {/* Add your history content here */}
                </div>
            </div>
            </div>
          
        </div>
    );
}

export default Transaction;

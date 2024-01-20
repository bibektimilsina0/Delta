import React from 'react';
import Navbar from './Navbar';

function Stack() {
   

    const handleCancel = () => {
        // Go back to the previous page when cancel is clicked
        window.history.back();
      };
      

      const senderPublicKey = localStorage.getItem('publickey')
      console.log(senderPublicKey)
      const truncatedKey = senderPublicKey ? `${senderPublicKey.slice(30, 42)}...` : 'no public key';
    return (
        <div className='h-svh bg-[#1D3565] '>
        <Navbar/>
        <div className="flex justify-center mt-8   ">
            <div className="w-1/2 text-center items-center bg-[#F1FAEE] rounded-xl">

                {/* Sender Account */}
                <div className="border p-4 mb-4 ">
                    <h6 className=" font-semibold">Your Account:</h6>
                    <p className="text-gray-700 bg-gray-200  text-center">{senderPublicKey ? `${truncatedKey}` : 'your public key'}</p>
                </div>

                
                {/* Assets */}
                <div className="flex mb-4">

                    <h3 className=" font-semibold mr-2 w-1/2">Assets:</h3>

                    <div className="border p-1 w-1/2">
                        <h4 className=" font-semibold">Eco Coin</h4>
                        <p className="text-gray-400">Balance: <span className="font-bold">30 ECO</span></p>
                    </div>
                </div>

                {/* Amount to Send */}
                <div className="flex mb-4">

                    <h3 className="font-semibold mr-2 w-1/2">Amount to Stack:</h3>

                    <div className="border p-4">
                        <input
                            type="number"
                            name="amount"
                            id="amount"
                            placeholder='0.001 '
                            className="p-2 bg-gray-200 rounded-sm w-3/4"
                        /><span>ECO</span>
                        <p className="text-gray-400">Fee: <span className="font-bold">10%</span></p>
                    </div>
                </div>
                <div className="flex justify-center mb-4">
                    <button className="bg-[#E63946]   text-white font-bold py-2 px-4 rounded mx-4" >
                       Stake
                    </button>
                    <button className=" bg-gray-400 hover:bg-gray-700 text-white font-bold py-2 mx-4 px-4 rounded" onClick={handleCancel} >
                     Cancel
                    </button>
                </div>

            </div>
        </div>
            
        </div>
    );
}

export default Stack;

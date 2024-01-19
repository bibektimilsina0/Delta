import React from 'react';

function Transfer() {
   

    const handleCancel = () => {
        // Go back to the previous page when cancel is clicked
        window.history.back();
      };


    return (
        <div className="flex justify-center mt-8   ">
            <div className="w-1/2 text-center items-center bg-gray-100">

                {/* Sender Account */}
                <div className="border p-4 mb-4">
                    <h6 className="text-blue-400 font-semibold">Sender Account:</h6>
                    <p className="text-gray-700">Your public key</p>
                </div>

                {/* Receiver Account */}
                <div className="border p-4 mb-4">
                    <h6 className="text-blue-400 font-semibold">Receiver Account:</h6>
                    <input
                        type="text"
                        name="receiverPublicKey"
                        id="receiverPublicKey"
                        className="border p-2 w-full"
                    />
                </div>

                {/* Assets */}
                <div className="flex mb-4">

                    <h3 className="mr-2 w-1/2">Assets:</h3>

                    <div className="border p-1 w-1/2">
                        <h4 className="text-blue-400 font-semibold">Bitcoin</h4>
                        <p className="text-gray-400">Balance: <span className="font-bold">30 BTC</span></p>
                    </div>
                </div>

                {/* Amount to Send */}
                <div className="flex mb-4">

                    <h3 className="mr-2">Amount to Send:</h3>

                    <div className="border p-4">
                        <input
                            type="number"
                            name="amount"
                            id="amount"
                            className="p-2 bg-gray-100 rounded-sm w-3/4"
                        /><span>btc</span>
                        <p className="text-gray-400">Fee: <span className="font-bold">10%</span></p>
                    </div>
                </div>
                <div className="flex justify-center mb-4">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-4" >
                       <a href="#send">Next</a> 
                    </button>
                    <button className=" bg-gray-400 hover:bg-gray-700 text-white font-bold py-2 mx-4 px-4 rounded" onClick={handleCancel} >
                     Cancel
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Transfer;

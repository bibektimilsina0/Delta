import './App.css';
import Navbar from './components/Navbar';
import Transaction from './components/Transaction';
import Transfer from './components/Transfer';
import bg from './image/blockchain.jpg';
import { useEffect } from 'react';
function App() {
  const handleInit = async () => {
    try {
        const response = await fetch('http://localhost:5000/initi', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json()
       console.log(data)
    } catch (error) {
        console.error('Error fetching balance:', error);
    }
};

 localStorage.setItem('publickey','-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAzyi6gpqY3+u6VWFDhKXp\nl7NpzPdutOxVy53gHGmG2mN2m9s0rFDPGNI5ogTqBvm8S5oOWDl4B5wGDTH8BQHg\nTlZRWLxbg7rEpkSHtME9y94lO9p6LqmsPms5rNHfyuzUvbaaHUzL803P1+USDGrJ\njtczLQkGwkeAp9qQCJY6bx70DJBfe4DEb6Hs2yTC/JXDjnodTJNZgYvlb/5pki3Y\naUHkvQXaG7u5L63Y14fgWGI+TFxjXULRfU14rU9bYQ2e6NY6U2YVIi2WlSPtT12D\nwOo99LeAaPkcIKgFzdtpakKafglDSboxbMmW3s4WEQS1Oe71wTqXK2qhk3Gq5qEf\niQIDAQAB\n-----END PUBLIC KEY-----')
  return (
    <div className="App bg-gradient-to-r bg-[#1D3565] h-[100vh]" >
      <Navbar />
      <Transaction />
      <button className="bg-[#E63946]   text-white font-bold py-2 px-4 rounded mx-4" onClick={(e) => handleInit(e)}>
                        Next
                    </button>
    </div>
  );
}

export default App;

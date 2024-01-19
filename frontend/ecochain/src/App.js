import './App.css';
import Navbar from './Navbar';
import Transaction from './Transaction';
import Transfer from './Transfer';
import bg from './image/blockchain.jpg';

function App() {
 

  return (
    <div className="App bg-gradient-to-r from-gray-300 to-gray-600" >
      <Navbar />
      <Transaction />
   
    </div>
  );
}

export default App;

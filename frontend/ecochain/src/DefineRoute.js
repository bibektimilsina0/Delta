import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import App from './App';
import Transaction from './components/Transaction';
import Transfer from './components/Transfer';
import Stack from './components/Stack'
import Profile from './components/Profile';
import BlockchainExplorer from './components/BlockchainExplorer';

function DefineRoute() {
    return ( 
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/transaction" element={<Transaction />} />
            <Route path="/transfer" element={<Transfer />} />
            <Route path="/stack" element={<Stack/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/blockchain" element={<BlockchainExplorer/>} />
          </Routes>
        </BrowserRouter>
     );
}

export default DefineRoute;

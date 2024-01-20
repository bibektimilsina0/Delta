import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import App from './App';
import Transaction from './Transaction';
import Transfer from './Transfer';
import Stack from './Stack'
import Profile from './Profile';

function DefineRoute() {
    return ( 
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/transaction" element={<Transaction />} />
            <Route path="/transfer" element={<Transfer />} />
            <Route path="/stack" element={<Stack/>} />
            <Route path="/profile" element={<Profile/>} />
          </Routes>
        </BrowserRouter>
     );
}

export default DefineRoute;

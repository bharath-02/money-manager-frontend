import React from 'react';
import { Header } from './components/Header';
import { IncomeExpenses } from './components/IncomeExpenses';
import { History } from './components/History';
import { AddTransaction } from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <IncomeExpenses />
        <History />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
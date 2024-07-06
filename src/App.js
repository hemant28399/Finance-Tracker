import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddTransaction from './components/AddTransaction';
import TransactionList from './components/TransactionList';
import Summary from './components/Summary';
import CategoryBreakdown from './components/CategoryBreakdown';
import styled from 'styled-components';
import  TransactionContext   from './components/TransactionContext';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTransactions = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:5000/transactions');
      setTransactions(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionContext.Provider value={{ transactions, fetchTransactions }}>
      <StyledApp>
        <h1>Personal Finance Tracker</h1>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
          <AddTransaction fetchTransactions={fetchTransactions} />
        <TransactionList transactions={transactions} />
        <Summary transactions={transactions} />
        <CategoryBreakdown transactions={transactions} />
      </StyledApp>
    </TransactionContext.Provider>
  );
};

const StyledApp = styled.div`
  max-width: 820px;
  margin: 0 auto;
  padding: 20px;
`;


export default App;

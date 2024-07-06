import React, { useState , useContext} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import TransactionContext from './TransactionContext'

const AddTransaction = () => {
  const [type, setType] = useState('income');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const {fetchTransactions}=useContext(TransactionContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTransaction = { type, amount: parseFloat(amount), category, date };
    await axios.post('http://localhost:5000/transactions', newTransaction);
    fetchTransactions();
  };

  return (
      <form onSubmit={handleSubmit}>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </Select>
        <Input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" required />
        <Input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" required />
        <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        <button type="submit">Add Transaction</button>
      </form>
  );
};

const Input = styled.input`
  margin: 15px;
  height: 1.5rem;
  border-radius: 2rem;
  padding-left: 0.6rem;
`;

const Select = styled.select`
  margin: 1.5rem 1.5rem 1.5rem 0;
  height: 1.8rem;
  border-radius: 2rem;
  padding-left: 0.8rem;
`;

export default AddTransaction;

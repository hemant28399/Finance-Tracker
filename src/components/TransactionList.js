import React, { useState } from 'react';
import styled from 'styled-components';

const TransactionList = ({ transactions }) => {

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const filteredTransactions = transactions.filter(transaction => {
    const transactionDate = new Date(transaction.date);
    const start = startDate ? new Date(startDate) : null;
    const end = endDate ? new Date(endDate) : null;
    return (!start || transactionDate >= start) && (!end || transactionDate <= end);
  });

  return (
    <div>
      <div>
        <h3>Transactions List</h3>
      </div>
      Start Date   
      <Input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} placeholder="Start Date" />
      End Date
      <Input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} placeholder="End Date" />
      <ul>
        {filteredTransactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.date} - {transaction.category} - {transaction.type} - ${transaction.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Input = styled.input`
  margin: 0 2rem 0 0.5rem;
  height: 1.5rem;
  width: 115px;
  border-radius: 2rem;
  padding-left: 0.7rem;
  padding-right: 0.3rem;
`;

export default TransactionList;

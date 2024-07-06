import React, { useState } from 'react';

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
      <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} placeholder="Start Date" />
      <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} placeholder="End Date" />
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

export default TransactionList;

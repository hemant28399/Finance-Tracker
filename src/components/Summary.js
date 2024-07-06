import React from 'react';
import styled from 'styled-components';

const Summary = ({ transactions }) => {
  const totalIncome = transactions.filter(t => t.type === 'income').reduce((acc, curr) => acc + curr.amount, 0);
  const totalExpenses = transactions.filter(t => t.type === 'expense').reduce((acc, curr) => acc + curr.amount, 0);
  const balance = totalIncome - totalExpenses;

  return (
    <div>
      <H3>Summary</H3>
      
      <table>
      <tr>
        <Td>Total Income:</Td>
        <Td>${totalIncome}</Td>
      </tr>
      <tr>
        <Td>Total Expenses:</Td>
        <Td>${totalExpenses}</Td>
      </tr>
      <tr>
        <Td>Balance:</Td>
        <Td>${balance}</Td>
      </tr>
      </table>
    </div>
  );
};

const Td = styled.td`
  padding: 0.3rem 0.3rem 0.3rem 0;
`;

const H3 = styled.h3`
  margin-top: 2.5rem;
`;

export default Summary;

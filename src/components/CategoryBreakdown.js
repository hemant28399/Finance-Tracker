import React from 'react';
import { PieChart, Pie, Tooltip } from 'recharts';

const CategoryBreakdown = ({ transactions }) => {
  const expenses = transactions.filter(t => t.type === 'expense');
  const categoryData = expenses.reduce((acc, curr) => {
    const existingCategory = acc.find(item => item.name === curr.category);
    if (existingCategory) {
      existingCategory.value += curr.amount;
    } else {
      acc.push({ name: curr.category, value: curr.amount });
    }
    return acc;
  }, []);

  return (
    <PieChart width={400} height={400}>
      <Pie data={categoryData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={150} fill="#8884d8" />
      <Tooltip />
    </PieChart>
  );
};

export default CategoryBreakdown;

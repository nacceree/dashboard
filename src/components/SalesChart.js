import React from 'react';
import { Card } from 'react-bootstrap';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', sales: 18000, profit: 10000 },
  { name: 'Feb', sales: 16000, profit: 11000 },
  { name: 'Mar', sales: 5000, profit: 4000 },
  { name: 'Apr', sales: 8000, profit: 5000 },
  { name: 'May', sales: 3000, profit: 2000 },
  { name: 'Jun', sales: 14000, profit: 9000 },
  { name: 'Jul', sales: 14000, profit: 10000 },
  { name: 'Aug', sales: 15000, profit: 11000 },
  { name: 'Sep', sales: 16000, profit: 12000 },
  { name: 'Oct', sales: 18000, profit: 13000 },
  { name: 'Nov', sales: 17000, profit: 12000 },
  { name: 'Dec', sales: 19000, profit: 13000 },
];

function SalesChart() {
  return (
    <Card>
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <Card.Title>Sales</Card.Title>
          <small className="text-muted">Sync</small>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sales" fill="#8884d8" />
            <Bar dataKey="profit" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
        <div className="text-end mt-2">
          <small className="text-primary">Overview →</small>
        </div>
      </Card.Body>
    </Card>
  );
}

export default SalesChart;
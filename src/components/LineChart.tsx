import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { date: '2023-08-01', cases: 1000, recovered: 500, deaths: 50 },
  { date: '2023-08-02', cases: 1500, recovered: 700, deaths: 75 },
  { date: '2023-08-03', cases: 2000, recovered: 1000, deaths: 100 },
  { date: '2023-08-03', cases: 2200, recovered: 1200, deaths: 110 }, // Duplicate entry
  { date: '2023-08-04', cases: 2500, recovered: 1500, deaths: 125 },
  { date: '2023-08-05', cases: 3000, recovered: 2000, deaths: 150 },
  { date: '2023-08-06', cases: 3500, recovered: 2500, deaths: 175 },
  { date: '2023-08-06', cases: 3800, recovered: 2700, deaths: 180 }, // Duplicate entry
];

const LineChartComponent = () => {
  return (
    <LineChart width={800} height={400} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="cases" stroke="#8884d8" />
      <Line type="monotone" dataKey="recovered" stroke="#82ca9d" />
      <Line type="monotone" dataKey="deaths" stroke="#ff0000" />
    </LineChart>
  );
};

export default LineChartComponent;

import React from 'react';

interface YourDataPoint {
  date: string;
  cases: number;
  recovered: number;
  deaths: number;
}

interface YourComponentProps {
  data: YourDataPoint[];
}

const YourComponent: React.FC<YourComponentProps> = ({ data }) => {
  return (
    <div>
      <h2>Your Component</h2>
      <ul>
        {data.map((entry, index) => (
          <li key={index}>
            <p>Date: {entry.date}</p>
            <p>Cases: {entry.cases}</p>
            <p>Recovered: {entry.recovered}</p>
            <p>Deaths: {entry.deaths}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YourComponent;

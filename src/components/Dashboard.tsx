// src/components/Dashboard.tsx
import React, { useState , useEffect} from 'react';
import { useWorldwideData, useCountryData, useHistoricalData } from '../api';
import LineChartComponent from './LineChart';
import MapComponent from './Map';
import YourComponent from './YourComponent';

const Dashboard: React.FC = () => {
  const worldwideData = useWorldwideData();
  const countryData = useCountryData();
  const historicalData = useHistoricalData();
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/covid-data');
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (worldwideData.isLoading || countryData.isLoading || historicalData.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col space-y-4 p-4">
      <LineChartComponent  />
      <MapComponent worldwideData={worldwideData.data} countryData={countryData.data} />
      <YourComponent data={data} />
    </div>
  );
};

export default Dashboard;

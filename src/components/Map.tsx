import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

interface CountryData {
  country: string;
  countryInfo: {
    lat: number;
    long: number;
  };
  cases: number;
  recovered: number;
  deaths: number;
  // Add other properties as needed
}

interface MapComponentProps {
  worldwideData: any; // Type this properly
  countryData: CountryData[]; // Type this properly
}

const MapComponent: React.FC<MapComponentProps> = ({ worldwideData, countryData }) => {
  const defaultCenter: [number, number] = [0, 0]; 

  return (
    <MapContainer center={defaultCenter} zoom={2} style={{ height: '400px', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {countryData && Array.isArray(countryData) && countryData.length > 0 ? (
        countryData.map((country) => (
          <Marker
            key={country.country}
            position={[country.countryInfo.lat, country.countryInfo.long]}
          >
            <Popup>
              <div>
                <h2>{country.country}</h2>
                <p>Total Cases: {country.cases}</p>
                <p>Recovered: {country.recovered}</p>
                <p>Deaths: {country.deaths}</p>
              </div>
            </Popup>
          </Marker>
        ))
      ) : (
        <p>No country data available</p>
      )}
    </MapContainer>
  );
};

export default MapComponent;

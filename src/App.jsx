// src/App.jsx
import React from 'react';
import './App.css';
import Cars from './Cars';
import carData from './cars.json';

function App() {
  return (
    <div className="App">
      <h1>Car List</h1>
      <Cars cars={carData} />
    </div>
  );
}

export default App;

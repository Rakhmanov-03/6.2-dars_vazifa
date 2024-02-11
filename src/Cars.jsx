// src/components/Cars.jsx
import React from 'react';

const Car = ({ brand, model, year }) => {
  const isNew = year > 2000;

  return (
    <div className={`car ${isNew ? 'new' : ''}`}>
      <h3>{brand} {model}</h3>
      <p>Year: {year}</p>
      <p>Status: {isNew ? 'New' : 'Old'}</p>
    </div>
  );
};

const Cars = ({ cars }) => {
  return (
    <div className="cars-list">
      {cars.map((car) => (
        <Car key={car.id} {...car} />
      ))}
    </div>
  );
};

export default Cars;

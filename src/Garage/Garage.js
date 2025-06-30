import React from 'react';

// Car Component
function Car(props) {
  return <li> {props.brand}</li>;
}

// Garage Component
function Garage() {
  const cars = [
    { id: 1, brand: 'BENZ' },
    { id: 2, brand: 'BMW' },
    { id: 3, brand: 'PRADO' }
  ];

  return (
    <>
      <h1>Type of cars in my garage?</h1>
      <ul>
        {cars.map((car) => (
          <Car key={car.id} brand={car.brand} />
        ))}
      </ul>
    </>
  );
}

export default Garage;



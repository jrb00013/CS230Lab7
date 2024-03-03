import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Card from './Card';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>CS230L</h1>
      <h2>Section - 001</h2>
      <p>WVU ID: 800333252</p>
      <p>Hi I am Joe Black</p>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col">
            <Card name="01" color="primary" />
          </div>
          <div className="col">
            <Card name="02" color="danger" />
          </div>
          <div className="col">
            <Card name="03" color="success" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

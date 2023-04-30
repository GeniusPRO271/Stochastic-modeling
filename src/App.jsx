import { useState } from 'react';
import './App.css';
import Sim1 from './simulations/8.1';
import Sim2 from './simulations/8.2';
import Sim3 from './simulations/8.3';

function App() {
  return (
    <>
      <div className="container">
        <Sim1 />
        <Sim2 />
        <Sim3 />
      </div>
    </>
  );
}

export default App;

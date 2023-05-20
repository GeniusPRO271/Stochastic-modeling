import { useState } from 'react';
import './App.css';
import Sim1 from './simulations/8.1';
import Sim2 from './simulations/8.2';
import Sim3 from './simulations/8.3';
import Sim4 from './simulations/9.0';

function App() {
  return (
    <>
      <div className="container">
        <Sim1 />
        <Sim2 />
        <Sim3 />
        <Sim4 />
      </div>
    </>
  );
}

export default App;

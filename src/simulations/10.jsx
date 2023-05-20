import { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJs,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';
import './10.css';

// Register the LinearScale component with Chart.js
ChartJs.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

// Import the required chart types and scale types

function BarChart({ chartData, chatLabel }) {
  const data = {
    labels: chatLabel,
    datasets: [
      {
        label: 'Goals',
        data: chartData,
        backgroundColor: '#ebff00',
        borderColor: '#000000',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        type: 'linear', // Use a linear y-axis scale
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
}

function Sim5() {
  const [lambda, setLambda] = useState(0); // Lambda parameter for the Poisson distribution
  const [numMatches, setNumMatches] = useState(0); // Number of matches to simulate
  const [simulatedResults, setSimulatedResults] = useState([]);
  const [label, setLabel] = useState([]);

  const simulateMatches = () => {
    const results = [];

    for (let i = 0; i < numMatches; i++) {
      const goals = simulateGoals(lambda);
      results.push(goals);
    }
    setLabel(Array.from({ length: numMatches }, (_, index) => index + 1));

    setSimulatedResults(results);
  };

  const simulateGoals = (lambda) => {
    let goals = 0;
    let cumulativeProb = Math.exp(-lambda);
    let random = Math.random();

    while (random > cumulativeProb) {
      goals++;
      cumulativeProb +=
        (Math.exp(-lambda) * lambda ** goals) / factorial(goals);
    }

    return goals;
  };

  const factorial = (n) => {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      let result = 1;
      for (let i = 2; i <= n; i++) {
        result *= i;
      }
      return result;
    }
  };

  return (
    <div className="box">
      <div className="title">10</div>
      <div className="variables_container">
        <input
          className="randomNum_box"
          type="number"
          placeholder="Number of Matches"
          step="10"
          min="0"
          max="1000"
          onChange={(event) => {
            setNumMatches(event.target.value);
          }}
        />

        <div
          className={`start_button_box_off ${
            lambda > 0 && numMatches > 0 && 'start_button_box_on'
          }`}
          onClick={() => {
            if (lambda > 0 && numMatches > 0) {
              simulateMatches();
            }
          }}
        >
          START
        </div>
        <div>
          <label>λ (Lambda):</label>
          <input
            className="number_input"
            type="number"
            min={0}
            value={lambda}
            onChange={(e) => {
              let value = e.target.value;
              value < 0 ? (value = 0) : value;
              setLambda(value);
            }}
          />
        </div>
      </div>
      <div className="options_box">
        <div className="ball_container">
          <div className="ball_answer">
            <BarChart chartData={simulatedResults} chatLabel={label} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sim5;

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
import './8.3.css';

// Register the LinearScale component with Chart.js
ChartJs.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function NumberInput({ label, value, onChange }) {
  const handleInputChange = (event) => {
    const newValue = event.target.value;
    // Only allow numbers between 0 and 1
    if (/^\d*\.?\d*$/.test(newValue) && newValue >= 0 && newValue <= 1) {
      onChange(newValue);
    }
  };

  return (
    <div>
      <label>{label}</label>
      <input
        className="number_input"
        type="number"
        step="0.01"
        min="0"
        max="1"
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
}

// Import the required chart types and scale types

function BarChart({ chartData, chatLabel }) {
  const data = {
    labels: chatLabel,
    datasets: [
      {
        label: 'Frequency',
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

function Sim3() {
  const [times, setTimes] = useState(undefined);
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [number3, setNumber3] = useState(0);
  const [number4, setNumber4] = useState(0);
  const [data, setData] = useState([]);
  const [label, setlLabel] = useState([]);

  const generateNumber = () => {
    const items = [
      'It is certain',
      'It is decidedly so',
      'Very doubtful',
      'Outlook not so good',
      'My sources say no',
    ];
    const probabilities = [number1, number2, number3, number4];
    const sum = probabilities.reduce((acc, curr) => acc + Number(curr), 0);
    const fifthProb = (1 - sum).toFixed(2);
    probabilities.push(fifthProb);
    let data = [];
    for (let i = 0; i < times; i++) {
      let result = selectItem(items, probabilities);
      data.push(result);
    }
    const count = items.reduce((acc, curr, index) => {
      const count = data.filter((n) => n === index).length;
      acc.push(count);
      return acc;
    }, []);
    setData(count);
    setlLabel(items);
  };

  function selectItem(items, probabilities) {
    let a = Math.random();
    for (let k = 0; k < probabilities.length; k++) {
      a -= probabilities[k];
      if (a <= 0) {
        return k;
      }
    }
  }

  const checkInputs = () => {
    if (times && number1 && number2 && number3 && number4) {
      // Check if the sum of the four numbers is less than or equal to 1
      if (
        Number(number1) + Number(number2) + Number(number3) + Number(number4) <=
        1
      ) {
        return true;
      }
    }
    return false;
  };

  return (
    <div className="box">
      <div className="title">8.3</div>
      <div className="variables_container">
        <input
          className="randomNum_box"
          type="number"
          step="10"
          min="0"
          placeholder="Times"
          max="1000"
          onChange={(event) => {
            setTimes(event.target.value);
          }}
        />

        <div
          className={`start_button_box_off ${
            checkInputs() && 'start_button_box_on'
          }`}
          onClick={() => {
            if (checkInputs()) {
              generateNumber();
            }
          }}
        >
          START
        </div>
        <NumberInput label="Number 1" value={number1} onChange={setNumber1} />
        <NumberInput label="Number 2" value={number2} onChange={setNumber2} />
        <NumberInput label="Number 3" value={number3} onChange={setNumber3} />
        <NumberInput label="Number 4" value={number4} onChange={setNumber4} />
        <div>
          <label>Number 5</label>
          <input
            className="number_input"
            style={{ width: '50%' }}
            type="number"
            step="0.01"
            min="0"
            max="1"
            placeholder="AUTO"
            disabled
          />
        </div>
      </div>
      <div className="options_box">
        <div className="ball_container">
          <div className="ball_answer">
            <BarChart chartData={data} chatLabel={label} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sim3;

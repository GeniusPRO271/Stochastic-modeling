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
import './9.0.css';

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

function Sim4() {
  const [times, setTimes] = useState(undefined);
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [number3, setNumber3] = useState(0);
  const [number4, setNumber4] = useState(0);
  const [number5, setNumber5] = useState(0);
  const [mValue, setMvalue] = useState(1);
  const [alpha, setAlpha] = useState(1);
  const [empiricExpectation, setEmpiricExpectation] = useState(0);
  const [empiricVariance, setEmpiricVariance] = useState(0);
  const [absoluteErrorVariance, setAbsoluteErrorVariance] = useState(0);
  const [absoluteErrorExpectation, setAbsoluteErrorExpectation] = useState(0);
  const [relativeErrorExpectation, setRelativeErrorExpectation] = useState(0);
  const [relativeErrorVariance, setRelativeErrorVariance] = useState(0);
  const [chiTest, setChiTest] = useState(0);
  const [data, setData] = useState([]);
  const [label, setlLabel] = useState([]);
  const chiSquareTable = [
    [3.841, 6.635],
    [5.991, 9.21],
    [7.815, 11.345],
    [9.488, 13.277],
    [11.07, 15.086],
    [12.592, 16.812],
    [14.067, 18.475],
    [15.507, 20.09],
    [16.919, 21.666],
    [18.307, 23.209],
    [19.675, 24.725],
  ];

  const generateNumber = () => {
    const items = ['1', '2', '3', '4', '5', '6'];
    const probabilities = [number1, number2, number3, number4, number5];
    const sum = probabilities.reduce((acc, curr) => acc + Number(curr), 0);
    const sixthProb = (1 - sum).toFixed(2);
    probabilities.push(sixthProb);
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

    // get frequencies --> numOfaperence/times
    let frequencies = [];
    count.map((d) => {
      frequencies.push(d / times);
    });

    //get empiric EmpiricExpectation --> SUM(frequencies * iteam[i]) && EmpiricExpectationSquare
    let EmpiricExpectation = 0;
    let EmpiricExpectationSquare = 0;
    let Expectation = 0;
    let ExpectationSquare = 0;
    let chiTest = 0;
    let expectedFrequencies = [];
    count.map((_, index) => {
      EmpiricExpectation += frequencies[index] * parseInt(items[index]);
      EmpiricExpectationSquare +=
        frequencies[index] * parseInt(items[index]) ** 2;

      Expectation += probabilities[index] * parseInt(items[index]);
      ExpectationSquare += probabilities[index] * parseInt(items[index]) ** 2;

      chiTest += _ ** 2 / (times * probabilities[index]);

      expectedFrequencies.push(probabilities[index] * times);
    });

    //get empiric EmpiricVariance && Variance
    let EmpiricVariance = EmpiricExpectationSquare - EmpiricExpectation ** 2;
    let Variance = ExpectationSquare - Expectation ** 2;

    //get Absuolute Errors
    let AbsoluteErrorVariance = Math.abs(EmpiricVariance - Variance);
    let AbsoluteErrorExpectation = Math.abs(EmpiricExpectation - Expectation);

    //get Realtive Errors
    let RelativeErrorVariance = AbsoluteErrorVariance / Math.abs(Variance);
    let RelativeErrorExpectation =
      AbsoluteErrorExpectation / Math.abs(Expectation);

    setEmpiricExpectation(EmpiricExpectation.toFixed(3));
    setEmpiricVariance(EmpiricVariance.toFixed(3));

    setAbsoluteErrorExpectation(AbsoluteErrorExpectation.toFixed(3));
    setAbsoluteErrorVariance(AbsoluteErrorVariance.toFixed(3));

    setRelativeErrorExpectation((RelativeErrorExpectation * 100).toFixed(3));
    setRelativeErrorVariance((RelativeErrorVariance * 100).toFixed(3));

    setChiTest((chiTest - times).toFixed(3));
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
    if (times && number1 && number2 && number3 && number4 && number5) {
      // Check if the sum of the four numbers is less than or equal to 1
      if (
        Number(number1) +
          Number(number2) +
          Number(number3) +
          Number(number4) +
          Number(number5) <=
        1
      ) {
        return true;
      }
    }
    return false;
  };

  return (
    <div className="box">
      <div className="title">9.0</div>
      <div className="variables_container">
        <input
          className="randomNum_box_sim4"
          type="number"
          step="10"
          min="0"
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
        <NumberInput label="Number 5" value={number5} onChange={setNumber5} />
        <div>
          <label>Number 6</label>
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
      <div className="datas_sim4">
        <div className="constant_box">
          Empiric Expectation <br />
          <span style={{ fontSize: '20px', fontWeight: 'bold' }}>
            {empiricExpectation}
          </span>
        </div>
        <div className="constant_box">
          Empiric Variance <br />{' '}
          <span style={{ fontSize: '20px', fontWeight: 'bold' }}>
            {empiricVariance}
          </span>
        </div>
        <div className="constant_box">
          Absolute Error Variance <br />{' '}
          <span style={{ fontSize: '20px', fontWeight: 'bold' }}>
            {absoluteErrorVariance}
          </span>
        </div>
        <div className="constant_box">
          Absolute Error Expectation <br />
          <span style={{ fontSize: '20px', fontWeight: 'bold' }}>
            {absoluteErrorExpectation}
          </span>
        </div>
        <div className="constant_box">
          Relative Error Variance <br />{' '}
          <span style={{ fontSize: '20px', fontWeight: 'bold' }}>
            {relativeErrorVariance}%
          </span>
        </div>
        <div className="constant_box">
          Relative Error Expectation <br />
          <span style={{ fontSize: '20px', fontWeight: 'bold' }}>
            {relativeErrorExpectation}%
          </span>
        </div>
      </div>
      <div className="datas_sim4">
        <div className="constant_box">
          Chi Test Value <br />
          <span style={{ fontSize: '20px', fontWeight: 'bold' }}>
            {chiTest}
          </span>
        </div>
        <div className="constant_box">
          m-degree value 1-6
          <br />
          <input
            className="number_input"
            type="number"
            step="1"
            min="1"
            max="6"
            value={mValue}
            onChange={(e) => {
              let value = e.target.value;
              e.target.value > 6 ? (value = 6) : value;
              e.target.value < 1 ? (value = 1) : value;

              setMvalue(value);
            }}
          />
        </div>
        <div className="constant_box">
          alpha index 1 = 0.05 , 2 = 0.01 <br />
          <input
            className="number_input"
            type="number"
            step="1"
            min="0"
            max="6"
            value={alpha}
            onChange={(e) => {
              let value = e.target.value;
              e.target.value > 2 ? (value = 2) : value;
              e.target.value < 1 ? (value = 1) : value;
              setAlpha(value);
            }}
          />
        </div>
      </div>
      <div className="constant_box">
        Chi Test {'>'} X square m / a = 3{' '}
        {chiSquareTable[mValue - 1][alpha - 1]}
        <br />
        <span style={{ fontSize: '20px', fontWeight: 'bold' }}>
          {chiTest > chiSquareTable[mValue - 1][alpha - 1] ? 'true' : 'false'}
        </span>
      </div>
    </div>
  );
}

export default Sim4;

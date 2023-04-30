import { useState } from 'react';
import './8.1.css';

function Sim1() {
  const [random, setRandom] = useState(0);
  const [isTrue, setIsTrue] = useState(null);
  const [question, setQuestion] = useState('');
  const [probA, setprobA] = useState(0.5);
  const generateNumber = () => {
    const a = Math.random();
    // console.log(`${a} < ${probA}`, a < probA);
    if (a < probA) {
      setIsTrue(true);
    } else {
      setIsTrue(false);
    }
    setRandom(a);
  };

  const handleProbabilty = (event) => {
    let a = event.target.value <= 1 ? event.target.value : 0;
    setprobA(a);
  };
  return (
    <div className="box">
      <div className="title">8.1</div>
      <div className="variables_container">
        <div className="randomNum_box">Random Number: {random}</div>
        <div
          className={`start_button_box_off ${
            question && 'start_button_box_on'
          }`}
          onClick={() => {
            question && generateNumber();
          }}
        >
          START
        </div>
        <input
          type="text"
          className="question"
          placeholder="Type your question"
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
        />
      </div>
      <div className="options_box">
        <div className="option_1_box">
          <div
            className="option_1"
            style={{
              backgroundColor: isTrue && '#61ff00',
              boxShadow: isTrue && '2px 4px 1px #000000',
            }}
          >
            <input
              type="number"
              className="probabilty"
              placeholder={probA}
              value={probA}
              onChange={(event) => {
                handleProbabilty(event);
              }}
            />
            YES
          </div>
        </div>
        <div>
          <i
            className="fa-solid fa-arrow-left fa-3x"
            style={{
              transition: 'all 0.5s ease',
              transform: isTrue ? 'rotate(0deg)' : 'rotate(180deg)',
            }}
          />
        </div>
        <div className="option_2_box">
          <div
            className="option_2"
            style={{
              backgroundColor: isTrue === false && '#61ff00',
              boxShadow: isTrue === false && '2px 4px 1px #000000',
            }}
          >
            NO
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sim1;

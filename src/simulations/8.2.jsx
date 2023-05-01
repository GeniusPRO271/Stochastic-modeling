import { useState } from 'react';
import './8.2.css';

function Sim2() {
  const [random, setRandom] = useState(0);
  const [index, setIndex] = useState(-1);
  const [answer, setAnswer] = useState('Ask a question');
  const [question, setQuestion] = useState('');
  const generateNumber = () => {
    const items = [
      'It is certain',
      'It is decidedly so',
      'Without a doubt',
      'Very doubtful',
      'Outlook not so good',
      'My sources say no',
    ];
    const probabilities = [0.1, 0.2, 0.15, 0.25, 0.05, 0.25];
    const selectedItem = selectItem(items, probabilities);
    setAnswer(selectedItem);
  };

  function selectItem(items, probabilities) {
    let a = Math.random();
    setRandom(a);
    for (let k = 0; k < probabilities.length; k++) {
      a -= probabilities[k];
      if (a <= 0) {
        setIndex(k);
        return items[k];
      }
    }
  }

  const handleProbabilty = (event) => {
    let a = event.target.value <= 1 ? event.target.value : 0;
    setprobA(a);
  };
  return (
    <div className="box">
      <div className="title">8.2</div>
      <div className="variables_container">
        <div className="randomNum_box">
          Index: {index} <br /> Random Number: {random}
        </div>
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
        <div className="ball_container">
          <div
            className="ball_answer"
            style={{
              backgroundColor:
                answer != 'Ask a question' && index >= 0
                  ? index < 3
                    ? '#61ff00'
                    : 'red'
                  : 'white',
              boxShadow: answer != 'Ask a question' && '2px 4px 1px #000000',
            }}
          >
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sim2;

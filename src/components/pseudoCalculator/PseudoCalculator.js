import { useState } from 'react';

const PseudoCalculator = ({ initialValue }) => {
  const [firstNumber, setFirstNumber] = useState(initialValue || 0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [result, setResult] = useState(null);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '50px',
        marginTop: '50px',
        borderTop: '2px solid black',
      }}
    >
      <input
        type="number"
        value={firstNumber}
        onChange={e => setFirstNumber(Number(e.target.value))}
      />

      <input
        type="number"
        value={secondNumber}
        onChange={e => setSecondNumber(Number(e.target.value))}
      />
      <div style={{ marginTop: '10px' }}>
        <button onClick={() => setResult(firstNumber + secondNumber)}>+</button>
        <button onClick={() => setResult(firstNumber - secondNumber)}>-</button>
      </div>
      <p>{result}</p>
    </div>
  );
};

export default PseudoCalculator;

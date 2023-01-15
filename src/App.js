import './App.css';
import Counter from './components/counter/Counter';
import PseudoCalculator from './components/pseudoCalculator/PseudoCalculator';
import { useState } from 'react';

function App() {
  const [firstNumber, setFirstNumber] = useState(initialValue || 0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [result, setResult] = useState(null);

  return (
    <>
      <Counter />
      <PseudoCalculator
        firstNumber={firstNumber}
        secondNumber={secondNumber}
        setFirstNumber={setFirstNumber}
        setSecondNumber={setSecondNumber}
        result={result}
        setResult={setResult}
      />
    </>
  );
}

export default App;

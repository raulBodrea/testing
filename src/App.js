import './App.css';
import Counter from './components/counter/Counter';
import PseudoCalculator from './components/pseudoCalculator/PseudoCalculator';

function App() {
  return (
    <>
      <Counter />
      <PseudoCalculator initialValue={30} />
    </>
  );
}

export default App;

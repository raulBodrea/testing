import './App.css';
import Counter from './components/counter/Counter';
import PseudoCalculator from './components/pseudoCalculator/PseudoCalculator';
import TodoList from './components/todoList/TodoList';

function App() {
  return (
    <>
      <Counter />
      <PseudoCalculator />
      <TodoList initialTodos={['asd', 'def', 'todo', 'klsda']} />
    </>
  );
}

export default App;

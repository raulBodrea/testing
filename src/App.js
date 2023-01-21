import './App.css';
import Counter from './components/counter/Counter';
import PseudoCalculator from './components/pseudoCalculator/PseudoCalculator';
import TodoList from './components/todoList/TodoList';
import Blog from './components/blog/Blog';

function App() {
  return (
    <>
      <Counter />
      <PseudoCalculator />
      <TodoList initialTodos={['asd', 'def', 'todo', 'klsda']} />
      <Blog />
    </>
  );
}

export default App;

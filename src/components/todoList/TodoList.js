import { useState } from 'react';

const TodoList = ({ initialTodos }) => {
  const [todos, setTodos] = useState(
    initialTodos || ['Spala vasele', 'taie porcu']
  );
  const [newTodo, setNewTodo] = useState('');

  const handleCompleteTodo = idx => {
    const newState = todos.filter((_, currentIndex) => {
      return currentIndex !== idx;
    });
    setTodos(newState);
  };

  const addNewTodo = () => {
    if (newTodo) {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  return (
    <div
      data-testid="todoList"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '50px',
        marginTop: '50px',
        borderTop: '2px solid black',
      }}
    >
      <ul>
        {todos.map((todo, idx) => (
          <li data-testid="todo" onClick={() => handleCompleteTodo(idx)}>
            {todo}
          </li>
        ))}
      </ul>
      <input
        placeholder="Add new todo"
        style={{ marginBottom: '20px' }}
        value={newTodo}
        onChange={e => setNewTodo(e.target.value)}
      />
      <button onClick={addNewTodo}>Add todo</button>
    </div>
  );
};

export default TodoList;

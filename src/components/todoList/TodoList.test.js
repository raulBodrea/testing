import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoList from './TodoList';

describe('TodoList', () => {
  it('renders initial todos list', () => {
    render(<TodoList initialTodos={['todo_1', 'todo_2']} />);

    const todo1 = screen.queryByText('todo_1');
    const todo2 = screen.queryByText('todo_2');

    expect(todo1).not.toBeNull();
    expect(todo2).not.toBeNull();
  });

  it('renders a Add todo button', () => {
    render(<TodoList />);
    const addTodoButton = screen.queryByText('Add todo');
    expect(addTodoButton).not.toBeNull();
  });

  it('removes a completed todo', async () => {
    render(<TodoList initialTodos={['todo_1', 'todo_2']} />);
    const user = userEvent.setup();
    let todo2 = screen.queryByText('todo_2');
    await user.click(todo2);
    todo2 = screen.queryByText('todo_2');
    expect(todo2).toBeNull();
  });

  it('adds a new todo', async () => {
    render(<TodoList initialTodos={[]} />);
    const user = userEvent.setup();

    const inputField = screen.queryByPlaceholderText('Add new todo');
    await user.type(inputField, 'new_todo');

    const addTodoButton = screen.queryByText('Add todo');
    await user.click(addTodoButton);

    const newTodo = screen.queryByText('new_todo');
    expect(newTodo).not.toBeNull();
  });

  it('does not add a new todo if input field is empty', async () => {
    render(<TodoList initialTodos={[]} />);
    const user = userEvent.setup();

    const addTodoButton = screen.queryByText('Add todo');
    await user.click(addTodoButton);

    const todos = screen.queryAllByTestId('todo');
    expect(todos).toHaveLength(0);
  });
});

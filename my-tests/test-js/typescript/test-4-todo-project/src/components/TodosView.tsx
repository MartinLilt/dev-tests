import { useState, useEffect, useMemo } from 'react';
import shortid from 'shortid';
import TodoList from './TodoList';
import TodoEditor from './TodoEditor';
import Filter from './Filter';
import Stats from './Stats';
import ITodo from '../interfaces/Todo.Interface';

const barStyles = {
  display: 'flex',
  alignItems: 'flex-end',
  marginBottom: 20,
};

const getInitialTodosState = () => {
  const savedTodos = localStorage.getItem('todos');
  return savedTodos ? JSON.parse(savedTodos) : [];
};

const TodosView = () => {
  const [todos, setTodos] = useState<ITodo[]>(getInitialTodosState); /// !!! important
  const [filters, setFilters] = useState('');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    const todo: ITodo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    setTodos((todos) => [todo, ...todos]);
  };

  const deleteTodo = (todoId: string) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== todoId));
  };

  const toggleCompleted = (todoId: string) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const changeFilter = (filter: string) => {
    setFilters(filter);
  };

  const completedTodosCount = useMemo(() => {
    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );
  }, [todos]);

  const visibleTodos = useMemo(() => {
    const normalizedFilter = filters.toLowerCase();

    return todos.filter((todo) =>
      todo.text.toLowerCase().includes(normalizedFilter)
    );
  }, [filters, todos]);

  return (
    <>
      <TodoEditor onSubmit={addTodo} />

      <div style={barStyles}>
        <Filter value={filters} onChange={changeFilter} />
        <Stats total={todos.length} completed={completedTodosCount} />
      </div>

      <TodoList
        todos={visibleTodos}
        onDeleteTodos={deleteTodo}
        onToggleComplete={toggleCompleted}
      />
    </>
  );
};

export default TodosView;

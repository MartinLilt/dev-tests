import { useState } from 'react';
import { useAppDispatch } from './hook/hook';

import { addTodo } from './store/todoSlice';
import NewTodoForm from './components/NewTodoForm';
import TodoList from './components/TodoList';

const App = () => {
  const [title, setTitle] = useState('');
  const dispatch = useAppDispatch();

  const handleAction = () => {
    if (title.trim().length) {
      dispatch(addTodo(title));
      setTitle('');
    }
  };

  return (
    <div>
      <NewTodoForm
        value={title}
        updateTitle={setTitle}
        handleAction={handleAction}
      />
      <TodoList />
    </div>
  );
};

export default App;

import classNames from 'classnames';
import ITodo from '../interfaces/Todo.Interface';

interface Props {
  todos: ITodo[];
  onDeleteTodos: (todoId: string) => void;
  onToggleComplete: (todoId: string) => void;
}

const TodoList = ({ todos, onDeleteTodos, onToggleComplete }: Props) => (
  <ul>
    {todos.map(({ id, text, completed }) => {
      return (
        <li key={id}>
          <input
            type="checkbox"
            checked={completed}
            onChange={() => onToggleComplete(id)}
          />
          <p>{text}</p>
          <button type="button" onClick={() => onDeleteTodos(id)}>
            Delete
          </button>
        </li>
      );
    })}
  </ul>
);

export default TodoList;

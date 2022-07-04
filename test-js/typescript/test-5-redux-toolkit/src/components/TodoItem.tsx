import { toggleCompleted, removeTodo } from '../store/todoSlice';
import { useAppDispatch } from '../hook/hook';
import ITodo from '../interface/interface';

const TodoItem = ({ id, title, completed }: ITodo) => {
  const dispatch = useAppDispatch();
  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleCompleted(id))}
      />
      <span>{title}</span>
      <button type="button" onClick={() => dispatch(removeTodo(id))}>
        times
      </button>
    </li>
  );
};

export default TodoItem;

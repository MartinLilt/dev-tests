interface INewFormProps {
  value: string;
  updateTitle: (e: string) => void;
  handleAction: () => void;
}

const NewTodoForm = ({ value, updateTitle, handleAction }: INewFormProps) => {
  return (
    <label>
      <input
        placeholder="new todo"
        value={value}
        onChange={(e) => updateTitle(e.target.value)}
      />
      <button type="button" onClick={handleAction}>
        Add todo
      </button>
    </label>
  );
};

export default NewTodoForm;

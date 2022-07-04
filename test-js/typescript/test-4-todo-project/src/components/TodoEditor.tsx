import { useState } from 'react';

interface Props {
  onSubmit: (message: string) => void;
}

const TodoEditor = ({ onSubmit }: Props) => {
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(message);
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={message} onChange={handleChange}></textarea>
      <button type="submit">Save</button>
    </form>
  );
};

export default TodoEditor;

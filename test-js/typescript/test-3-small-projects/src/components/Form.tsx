import { useState, useRef } from 'react';

interface Props {
  onSubmit: (cred: { email: string; password: string }) => void;
}

export default function From({ onSubmit }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const formRef = useRef<HTMLFormElement | null>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        console.warn(`Invalid name - ${name}`);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <form onSubmit={handleSubmit} ref={formRef}>
      <label>
        Email
        <input
          type="email"
          name="email"
          value={email}
          onChange={onChange}
        ></input>
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
        ></input>
      </label>
      <button type="submit">LogIn</button>
    </form>
  );
}

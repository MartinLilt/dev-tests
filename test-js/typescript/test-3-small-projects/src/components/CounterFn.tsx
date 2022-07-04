import { useState } from 'react';

interface Props {
  initialState?: number;
  step?: number;
}

const CounterFn = ({ initialState = 0, step = 1 }: Props) => {
  const [value, setState] = useState(initialState);

  const increment = () => setState((value) => value + step);
  const decrement = () => setState((value) => value - step);

  return (
    <div>
      <span>{value}</span>
      <div>
        <button type="button" onClick={increment}>
          +{step}
        </button>
        <button type="button" onClick={decrement}>
          -{step}
        </button>
      </div>
    </div>
  );
};

export default CounterFn;

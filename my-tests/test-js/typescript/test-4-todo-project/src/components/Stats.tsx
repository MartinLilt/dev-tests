interface Props {
  total: number;
  completed: number;
}

const Stats = ({ total, completed }: Props) => {
  return (
    <div>
      <p>
        <span>{total}</span>
        <span>In total</span>
      </p>
      <p>
        <span>{completed}</span>
        <span>In completed</span>
      </p>
    </div>
  );
};

export default Stats;

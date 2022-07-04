interface Props {
  value: string;
  onChange: (filter: string) => void;
}

const Filter = ({ value, onChange }: Props) => {
  return (
    <div>
      <p>Content filter</p>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default Filter;

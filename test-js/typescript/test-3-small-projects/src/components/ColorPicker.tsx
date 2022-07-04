import { useState } from 'react';

type Options = { label: string; color: string };

interface Props {
  options: Options[];
  initialOpsPos?: number;
}

const ColorPicker = ({ options, initialOpsPos = 1 }: Props) => {
  const [activeOpsIndx, setActiveOpsIndx] = useState(initialOpsPos - 1);
  const { label } = options[activeOpsIndx];

  const setActiveIdx = (index: number) => setActiveOpsIndx(index);

  const makeOpsClassName = (index: number) => {
    const optionClasses = ['ColorPicker__option'];

    if (index === activeOpsIndx) {
      optionClasses.push('ColorPicker__option--active');
    }

    return optionClasses.join(' ');
  };

  return (
    <div>
      <h2>Color Picker</h2>
      <p>Choose color: {label}</p>
      <div>
        {options.map(({ label, color }, index) => {
          return (
            <button
              type="button"
              key={label}
              className={makeOpsClassName(index)}
              style={{
                backgroundColor: color,
                width: '50px',
                height: '50px',
                cursor: 'pointer',
              }}
              onClick={() => setActiveIdx(index)}
            ></button>
          );
        })}
      </div>
    </div>
  );
};

export default ColorPicker;

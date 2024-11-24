import React, { useState } from 'react';

interface RangeInputProps {
  options: any;
  step?: number;
  defaultValue?: number;
  handleFilter: (event: any) => void;
}

const RangeInput: React.FC<RangeInputProps> = ({
  options,
  step = 1,
  defaultValue = 0,
  handleFilter
}) => {
  const [value, setValue] = useState(defaultValue || options.min);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setValue(newValue);
    handleFilter(e);
  };

  return (
    <div>
      <input
        type="range"
        min={options.min}
        max={options.max}
        step={step}
        name='size'
        value={value}
        onChange={handleChange}
      />
      <span>{value}</span>
    </div>
  )
};

export default RangeInput;

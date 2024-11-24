import { FC } from "react";
import CheckBox from "shared/Checkbox";

interface CheckBoxListProps {
  options: { id: number; name: string }[];
  filterName: string;
  selectedOptions: Array<{}>;
  onOptionChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckBoxList: FC<CheckBoxListProps> = ({ options, filterName, selectedOptions, onOptionChange }) => {
  return (
    <>
      {options.map(({ id, name }) => (
        <CheckBox
          key={id}
          id={id}
          name={filterName}
          value={id.toString()}
          label={name}
          checked={selectedOptions.includes(id)}
          onChange={onOptionChange}
        />
      ))}
    </>
  );
};

export default CheckBoxList;

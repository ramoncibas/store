import { ChangeEventHandler, FC } from "react";
import {
  CheckBoxContainer,
  InputCheckBox,
  LabelCheckbox,
} from "./style";

interface CheckBoxProps {
  id: number;
  name: string;
  value: string;
  checked: boolean;
  label: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const CheckBox: FC<CheckBoxProps> = ({
  id,
  name,
  value,
  checked,
  label,
  onChange,
}): JSX.Element => (
  <CheckBoxContainer>
    <InputCheckBox
      name={name}
      type="checkbox"
      value={value}
      checked={checked}
      onChange={onChange}
      className="checkbox-items"
      data-label={label}
    />
    <LabelCheckbox htmlFor={name}>{label}</LabelCheckbox>
  </CheckBoxContainer>
);

export default CheckBox;
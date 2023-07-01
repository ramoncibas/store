import { ChangeEventHandler, FC } from "react";
import {
  CheckBoxContainer,
  InputCheckBox,
  LabelCheckbox,
} from "./style";

interface CheckBoxProps {
  name: string;
  value: string;
  checked: boolean;
  label: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const CheckBox: FC<CheckBoxProps> = ({
  name,
  value,
  checked,
  label,
  onChange,
}): JSX.Element => (
  <CheckBoxContainer>
    <InputCheckBox
      type="checkbox"
      name={name}
      id={name}
      className="checkbox-items"
      value={value}
      checked={checked}
      onChange={onChange}
      data-label={label}
    />
    <LabelCheckbox htmlFor="input">{label}</LabelCheckbox>
  </CheckBoxContainer>
);

export default CheckBox;
import { FC } from "react";

const CheckBox: FC<any> = ({ name, value, checked, label, onChange }) => (
  <li>
    <input
      type="checkbox"
      name={name}
      id={name}
      className="checkbox-items"
      value={value}
      checked={checked}
      onChange={onChange}
      data-label={label}
    />
    <label htmlFor="input">{label}</label>
  </li>
)


export default CheckBox;
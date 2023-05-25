import React, { FC } from "react";

import { Input } from "shared";
import { InputProps } from "view/Product/types";

const InputList = ({ fields }: { fields: InputProps[] }): JSX.Element => (
  <>
    {fields.map(
      ({
        id,
        name,
        label,
        type = "text",
        placeholder,
        value = "",
        handleChange,
      }, index) => (
        <Input
          id={id}
          key={Math.random() + index}
          name={name}
          label={label}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
      )
    )}
  </>
);

export default InputList;

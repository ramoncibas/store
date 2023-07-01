import React, { FC, ChangeEventHandler } from "react";
import { Form, FloatingLabel } from "react-bootstrap";

interface FloatingInputProps {
  id?: string;
  label?: string;
  className?: string;
  name?: string;
  type?: string;
  value?: string;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
  textMuted?: { className: string; labelMessage: string } | null;
}

const Input: FC<FloatingInputProps> = ({
  id = '',
  label = '',
  className = "mb-3",
  name = '',
  type = '',
  value = '',
  placeholder = '',
  onChange,
  required = false,
  textMuted = null
}) => (
  <FloatingLabel controlId={id} label={label} className={className}>
    <Form.Control
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      required={required}
    />

    {textMuted && (
      <Form.Text className={`text-muted ${textMuted.className}`}>
        {textMuted.labelMessage}
      </Form.Text>
    )}
  </FloatingLabel>
);

export default Input;
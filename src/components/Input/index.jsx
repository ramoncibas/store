import { Form, FloatingLabel } from "react-bootstrap";

const Input = (props) => (
  <>
    <FloatingLabel
      controlId={props.id}
      label={props.label}
      className={props.className || "mb-3"}
    >
      <Form.Control
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        required
      />
    </FloatingLabel>
  </>
);

export default Input;

import { Form, InputGroup } from "react-bootstrap";

const CheckBox = (props) => {
  const hasDiscount = !!props.discountPercentage
  const hasFreeShipping = !!props.freeShipping
    
  return (
    <Form.Group
      className="mb-3"
      id="props.id"
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        flexDirection: "column"
      }}
    >
      <Form.Check
        name={props.nameCheckBox}
        type="checkbox"
        label={props.labelCheckBox}
        onChange={props.onChange}
        checked={!!props.discountPercentage || !!props.freeShipping}
      />
      {
        hasDiscount === true && (
          <InputGroup controlid="hasDiscount" style={{ marginTop: "5px" }}>
            <Form.Control
              name={props.nameInput}
              type="number"
              placeholder={props.inputPlaceholder}
              onChange={props.onChange}
              value={props.discountPercentage}
            />
            {
              props.inputGroupText ? (
                <InputGroup.Text>{props.inputGroupValue}</InputGroup.Text>
              ) : <></>
            }
          </InputGroup>
        )
      }
      {
        // Render children component, like a button of "FRETE GRÁTIS"
        hasFreeShipping || hasDiscount
          ? (props.children)
          : <></>
      }
    </Form.Group>
  )
};

export default CheckBox;
import { Form, InputGroup } from "react-bootstrap";

const CheckBox = (props) => (
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
      checked={props.discount_percentage == true || props.free_shipping == true }
    />
    {
      props.hasDiscount === true && (
        <InputGroup controlid="hasDiscount" style={{marginTop:"5px"}}>
          <Form.Control
            name={props.nameInput}
            type="number"
            placeholder={props.inputPlaceholder}            
            onChange={props.onChange}
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
      props.hasFreeShipping  === true ? (
        props.children
      )
      : <></>
    }
  </Form.Group>
);

export default CheckBox;
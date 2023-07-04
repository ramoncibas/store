import styled from "styled-components";


export const CheckBoxContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;
export const InputCheckBox = styled.input.attrs({ type: "checkbox" })`
  position: relative;
  cursor: pointer;

  &:before {
    content: "";
    display: block;
    position: absolute;
    width: 20px;
    height: 20px;
    top: 0;
    left: 0;
    background-color:#e9e9e9;
  }

  &:checked {
    &:before {
      content: "";
      display: block;
      position: absolute;
      width: 20px;
      height: 20px;
      top: 0;
      left: 0;
      background-color:#000;
    }

    &:after {
      content: "";
      display: block;
      width: 5px;
      height: 10px;
      border: solid white;
      border-width: 0 2px 2px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
      position: absolute;
      top: 3px;
      left: 8px;
    }
  }
`;
export const LabelCheckbox = styled.div<{ htmlFor: string }>`
  margin-left: 24px;
`;
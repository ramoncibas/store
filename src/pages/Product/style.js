import styled from "styled-components";
import { Row as RowSC, Col as ColSC } from "react-bootstrap";


export const FreeShipping = styled.div`
  width: 100%;
  height: 40px;  
  margin-top: 5px;
  background: #673dff;
  color: #fff;
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Row = styled(RowSC)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const Col = styled(ColSC)``;

export const PreviewContainer = styled.div`
  display: grid;
  place-items: center;
  height: 100%;

  .content {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

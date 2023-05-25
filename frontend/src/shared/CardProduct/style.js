import styled from "styled-components";
import {
  Container as ContainerSC,
  Row as RowSC,
  Col as ColSC,
} from "react-bootstrap";

export const Container = styled(ContainerSC)`
  position: relative;

  background: #fff;
  width: 300px;
  height: 540px;
  border-radius: 10px;
  padding: 10px;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  .old-price {
    text-decoration: line-through;
    color: #767575;
  }
`;

export const Row = styled(RowSC)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  &.image-content {
    img{
      width: 270px;
      height: 160px;
      margin: 10px 0;
    }    
  }
`;

export const Col = styled(ColSC)``;

export const ActionContainer = styled(RowSC)`
  margin-left: 0;
  margin-right: 0;
  position: relative;  
  width: 100%;
  height: 60px;  
  
  button {    
    position: absolute;
    top: 0;
    left: .625rem;    
  }
`;

export const DiscountComponent = styled(ColSC)`
  position: absolute;
  right: .625rem;
  background: #${({ background }) => background};
  width: 60px;
  height: 60px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: end;    
  font-weight: bold;
  color: #fff; 
`

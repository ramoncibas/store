import styled from "styled-components";
import { Row as RowSC, Col as ColSC } from "react-bootstrap";
import px2vw from "../../utils/px2vw";

export const Banner = styled.div`
  width: 90vw;
  height: ${px2vw(450)};
  margin: 0 auto;
  display: flex;
  justify-items: start;
  align-items: center;

  .content {
    margin: auto;
    flex-direction: column;
    text-align: end;
    h1 {
      margin: 0;
      font-size: 124px;
    }
    span {
      font-size: 24px;
    }
  }
`;

export const Row = styled(RowSC)``;

export const Col = styled(ColSC)`
  margin-bottom: 40px;
`;

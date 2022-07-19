import styled from "styled-components";
import { Row as RowSC, Col as ColSC } from "react-bootstrap";

export const Row = styled(RowSC)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 1094px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const Col = styled(ColSC)`
  &.image {
    display: flex;
    justify-content: center;
    img {
      width: 300px;
      height: 300px;

      border-radius: 50%;
    }
  }
`;

export const PreviewContainer = styled.div`
  display: grid;
  place-items: center;
  height: 100%;

  .content {
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 1094px) {
      margin: 2rem auto;
      flex-direction: column;
    }
  }
`;

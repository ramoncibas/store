import styled from "styled-components";
import { Alert, AlertTitle } from "@mui/material";

export const ContainerProfile = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 90vh;
  background: #fff;
  border-radius: 10px;
`;

export const ContentProfile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  border-radius: 10px;

  @media (max-width: 768px) {
    display: grid;
  }
`;

export const AlertProfile = styled(Alert)`
  position: absolute;
  bottom: 10px;

  @media (min-width: 768px) {
    width: 300px;
    bottom: 50px;
    right: 20px;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const AlertTitleProfile = styled(AlertTitle)``;
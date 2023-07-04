import styled from "styled-components";
import { Nav } from "react-bootstrap";

export const NavBar = styled(Nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5vw;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  height: 100px;

  .right-menu {
    display: flex;
  }
`;

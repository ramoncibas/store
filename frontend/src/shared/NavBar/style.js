import styled from "styled-components";
import { Nav } from "react-bootstrap";

export const NavBar = styled(Nav)`
  height: 100px;
  padding: 0 5vw;
  
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  background: #fff;
  
  position: fixed;
  left: 0;
  right: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .right-menu {
    display: flex;
  }
`;
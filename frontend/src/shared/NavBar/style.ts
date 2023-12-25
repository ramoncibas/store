import styled from "styled-components";
import { Nav } from "react-bootstrap";

export const NavContainer = styled(Nav)`
  padding: 20px;
  
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  background: #fff;
  
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  z-index: 9999;

  display: flex;
  justify-content: space-between;

  .right-menu {
    display: flex;
    align-items: center;
  }
`;

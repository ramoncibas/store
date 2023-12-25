import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  height: 3.125rem;
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${({ background }) => (background ? `${background}` : "#04D483")};
  border-radius: 10px;
  border: none;
  color: #fff;
  transition: 0.3s all;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    filter: brightness(90%);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

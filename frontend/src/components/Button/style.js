import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  background: #${({ background }) => (background ? `${background}` : "04D483")};
  border-radius: 10px;
  border: none;
  color: #fff;
  transition: 0.3s all;
  text-transform: uppercase;

  &:hover {
    filter: brightness(90%);
  }
`;

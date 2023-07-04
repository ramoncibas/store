import styled from "styled-components";

interface IProps {
  background: string;
}

export const Container = styled.div<IProps>`
  width: 100%;
  height: 30px;
  padding: 5px 15px;
  margin-bottom: 5px;

  border-radius: 20px;
  background: ${({ background }) => (background ? `${background}` : "#ffefef")};

  display: flex;
  justify-content: space-between;
  align-items: center;

  & > button {
    color: #000;
    width: 20px;
    font-size: 14px;
  }

  &&&:hover {
    background: #e94e4e;
    transition: all 0.3s;
    & > * {
      color: #fff;
    }
  }

  transition: all 0.3s;
`;

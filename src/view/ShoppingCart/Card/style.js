import styled from "styled-components";

export const Container = styled.div`
  background: #fffafa;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;

  .content {
    display: flex;
    align-items: center;
    justify-items: center;

    @media (max-width: 720px) {
      flex-direction: column;
    }
  }
`;

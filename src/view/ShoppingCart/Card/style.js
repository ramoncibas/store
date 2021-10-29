import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;

  .content {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      max-width: 350px;
    }

    @media (max-width: 720px) {
      flex-direction: column;
      text-align: center;
    }
  }
`;

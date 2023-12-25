import styled from "styled-components";

export const Container = styled.div`
  width: 90vw;
  margin: ${({margin}) => (margin ? `0 ${margin}` : '2rem auto')};
  padding: 3.75rem;
  border-radius: 0.625rem;
  background: #ffefef;

  @media (max-width: 720px) {
    width: 100vw;
    padding: 1.25rem;
  }

  .buttons-container {
    display: flex;
    justify-content: center;
    align-items: center;

    & button:first-of-type {
      margin-right: 10px;
    }
  }
`;

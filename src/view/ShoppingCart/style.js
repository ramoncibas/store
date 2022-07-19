import styled from "styled-components";

export const ProductIsNull = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    width: 100%;
    height: 12.5rem;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' ry='10' stroke='%23D8C1C1FF' stroke-width='3' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    border-radius: 10px;    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .info-text {}
`;
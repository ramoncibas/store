import styled from "styled-components";

interface FilterProps {
  open: boolean;
}

export const Container = styled.div` 
  p {
    margin: 1rem 0;
    font-weight: 600;
  }  

  .search-box-brand,
  .search-box-color {
    margin-bottom: 1rem;
  } 

  ul {
    padding: 0;
    list-style: none;

    li {
      input[type=checkbox] {
        margin-right: 10px;
      }
    }            
  }

  div.ul-container::after {    
    content: "";

    height: 1px;
    width: 100%;
    
    top: -15px;

    margin: 0;
    padding: 0;

    display: inline-block;

    border-radius: 2px;
    border-bottom: 2px solid #dcdcdc;
  }
`;

export const FilterContent = styled.div<FilterProps>`
  padding: 16px 0;
  display: ${({ open }) => open ? 'block' : 'none'};
`;

export const FilterHeader = styled.div`
  button {
    border: none;
    background: none;
    width: 100%;
    display: flex;
    align-items: center;
  }
  span {
    margin-left: 20px;
  }
`;
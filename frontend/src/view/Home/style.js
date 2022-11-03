import styled from "styled-components";
import { Row as RowSC, Col as ColSC } from "react-bootstrap";
import px2vw from "../../utils/px2vw";
import { parsePath } from "react-router-dom";

export const Banner = styled.div`
  width: 90vw;
  height: ${px2vw(450)};
  margin: 0 auto;
  display: flex;
  justify-items: start;
  align-items: center;

  .content {
    margin: auto;
    flex-direction: column;
    text-align: end;
    h1 {
      margin: 0;
      font-size: 124px;
    }
    span {
      font-size: 24px;
    }
  }
`;

export const Main = styled.div`
  display: flex;
  justify-content: space-between;  
`;

export const Aside = styled.div`
  width: 12.5rem;
  height: 800px;    
  border-radius: 0 10px 10px 0;
  margin: 0 2rem;
  .filter-product {}
`;


export const Row = styled(RowSC)``;

export const Col = styled(ColSC)`
  margin-bottom: 40px;
`;



// product: {
//   name, price, dessNumber, category, gender, marca, color, price,
// }


// SELECT * 
// FROM product pg
// WHERE
//   pg.price LIKE ?
//   OR pg.dessNumber LIKE ?
//   OR pg.category LIKE ?
//   OR pg.gender IS ?
//   OR pg.brand IS ?
//   OR pg.color LIKE ?
//   OR pg.price LIKE ?

// criar tabelas auxiliares para: categoria, marca, genero
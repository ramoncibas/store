import * as S from "./style";

const Container = (props) => (
  <S.Container margin={props.margin}>{props.children}</S.Container>
);

export default Container;
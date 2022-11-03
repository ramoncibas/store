import * as S from "./style";

export const Container = (props) => (
  <S.Container margin={props.margin}>{props.children}</S.Container>
);

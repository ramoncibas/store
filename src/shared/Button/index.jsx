import * as S from "./style";

const Button = (props) => (
  <S.Button
    onClick={props.onClick}
    background={props.background}
    disabled={props.disabled}
    style={props.style}
  >
    {props.children}
  </S.Button>
);

export default Button;

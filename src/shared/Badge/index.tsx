import { FC } from "react";
import { Container } from "./style";

import Button from "shared/Button";

const Badge: FC<any> = ({ label, background, onClose }): JSX.Element => (
  <Container background={background}>
    <span>{label}</span>

    {onClose && <Button background='transparent' onClick={onClose}>X</Button>}
  </Container>
);

export default Badge;

import { Nav } from "react-bootstrap";
import Logo from "assets/img/logo.svg";

const NavLogo = () => (
  <Nav.Item>
    <Nav.Link href="/" style={{ padding: 0 }}>
      <img src={Logo} alt="Logo" />
    </Nav.Link>
  </Nav.Item>
)

export default NavLogo;
import { Nav } from "react-bootstrap";
import { BsPersonCircle, BsFillPlusCircleFill } from "react-icons/bs";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import * as S from "./style";
import Logo from "../../assets/img/logo.svg";

const NavBar = () => {
  return (
    <S.NavBar activeKey="/">
      <Nav.Item>
        <Nav.Link href="/" style={{ padding: 0 }}>
          <img src={Logo} alt="Logo" />
        </Nav.Link>
      </Nav.Item>
      <div className="right-menu">
        <Nav.Item>
          <Nav.Link href="/">
            <FaHome size={32} color="#323232" />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/profile">
            <BsPersonCircle size={32} color="#323232" />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/cart">
            <FaShoppingCart size={32} color="#323232" />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/add-product">
            <BsFillPlusCircleFill size={32} color="#323232" />
          </Nav.Link>
        </Nav.Item>
      </div>
    </S.NavBar>
  );
};

export default NavBar;

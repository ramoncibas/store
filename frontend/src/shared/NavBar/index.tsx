import * as S from "./style";
import NavLogo from "./components/NavLogo";
import NavItem from "./components/NavItem";
import useNavBar from "./useNavBar.hook";
import { NavItemProps } from "./navBar.types";

const NavBar = () => {
  const { navMenus } = useNavBar();

  return (
    <S.NavContainer activeKey="/">

      <NavLogo />

      <div className="right-menu">
        {navMenus.map((menu: NavItemProps, index: number) => (
          <NavItem
            key={index}
            icon={menu.icon}
            href={menu.href}
          />
        ))}
      </div>
    </S.NavContainer>
  );
};

export default NavBar;

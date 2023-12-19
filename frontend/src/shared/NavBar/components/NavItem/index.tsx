// NavItem.tsx
import React from "react";
import { Nav } from "react-bootstrap";
import * as Icons from "react-icons/bs";
import { NavItemProps } from "../../navBar.types";

const NavItem: React.FC<NavItemProps> = ({ href, icon }) => {
  const IconComponent = Icons[icon as keyof typeof Icons];

  return (
    <Nav.Item>
      <Nav.Link href={href}>
        <IconComponent size={32} color="#323232" />
      </Nav.Link>
    </Nav.Item>
  );
};

export default NavItem;

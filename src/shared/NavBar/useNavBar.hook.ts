const useNavBar = (): any => {
  const navMenus = [
    {
      href: "/",
      icon: "BsFillHouseDoorFill"
    },
    {
      href: "/cart",
      icon: "BsCartDashFill"
    },
    {
      href: "/product",
      icon: "BsFillPlusCircleFill"
    },
    {
      href: "/profile",
      icon: "BsFillPersonLinesFill"
    },
  ];

  return {
    navMenus,
  }
}

export default useNavBar;

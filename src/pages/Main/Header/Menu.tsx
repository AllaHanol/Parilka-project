import { Link, LinkProps } from "@mui/material";
import React, { PropsWithChildren } from "react";

interface MenuLinkProps extends LinkProps {}

const MenuLink: React.FC<PropsWithChildren<MenuLinkProps>> = (props) => {
  const { children, ...rest } = props;

  return (
    <Link
      underline="none"
      color="#fff"
      component="button"
      sx={{
        p: '10px 12px',
        borderRadius: '16px',
        border: '1px solid transparent',
        transition: 'border-color 0.4s ease-in-out',
        '&:hover': {
          borderColor: 'white',
        },
      }}
      {...rest}
    >
      {children}
    </Link>
  );
};

const Menu: React.FC = () => {
  return (
    <>
      <MenuLink onClick={() => console.log("Про нас")}>Про нас</MenuLink>
      <MenuLink onClick={() => console.log("Рідини")}>Рідини</MenuLink>
      <MenuLink onClick={() => console.log("Девайси")}>Девайси</MenuLink>
      <MenuLink onClick={() => console.log("Комплектуючі")}>
        Комплектуючі
      </MenuLink>
      <MenuLink onClick={() => console.log("Все для кальяну")}>
        Все для кальяну
      </MenuLink>
      <MenuLink onClick={() => console.log("+380 123 123 12 31")}>
        +380 123 123 12 31
      </MenuLink>
    </>
  );
};

export default Menu;

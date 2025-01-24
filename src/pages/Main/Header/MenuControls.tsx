import {Button} from "@mui/material";
import React from "react";
import SearchIcon from "../../../components/icons/SearchIcon";
import HeartIcon from "../../../components/icons/HeartIcon";
import CartIcon from "../../../components/icons/CartIcon";
import ProfileIcon from "../../../components/icons/ProfileIcon";

interface MenuIconButtonProps {
  onClick?: () => void;
}

const MenuIconButton: React.FC<React.PropsWithChildren<MenuIconButtonProps>> = (props) => {
  const {children, onClick} = props;

  return (
    <Button onClick={onClick} sx={{
      p: '3px 14px',
      width: "48px",
      height: "34px",
      minWidth: "34px",
        borderRadius: '22px',
        border: '1px solid transparent',
        transition: 'border-color 0.4s ease-in-out',
        '&:hover': {
          borderColor: 'white',
        },
    }}>
      {children}
    </Button>
  );
};

const MenuControls: React.FC = () => {
  return (
    <>
      <MenuIconButton onClick={() => console.log("Search clicked")}>
        <SearchIcon />
      </MenuIconButton>
      <MenuIconButton onClick={() => console.log("Favorites clicked")}>
        <HeartIcon />
      </MenuIconButton>
      <MenuIconButton onClick={() => console.log("Cart clicked")}>
        <CartIcon />
      </MenuIconButton>
      <MenuIconButton onClick={() => console.log("Profile clicked")}>
        <ProfileIcon />
      </MenuIconButton>
    </>
  );
};

export default MenuControls;

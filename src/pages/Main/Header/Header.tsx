import { AppBar, Stack } from "@mui/material";
import React from "react";
import LogoIcon from "../../../components/icons/LogoIcon";
import Menu from "./Menu";
import MenuControls from "./MenuControls";

const Header: React.FC = () => {
  return (
    <AppBar
      sx={{
        width: "100vw",
        padding: "1.25vw 8.33vw",
        height: "88px",
        display: "flex",
        bgcolor: "#181717",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack direction="row" justifyContent="space-between" width="100%">
        <Stack direction="row" alignItems="center">
          <LogoIcon />
        </Stack>
        <Stack direction="row" alignItems="center" gap="8px">
          <Menu />
          
        </Stack>
        <Stack direction="row" alignItems="center" gap="8px">
        <MenuControls />
          
        </Stack>
      </Stack>
    </AppBar>
  );
};

export default Header;

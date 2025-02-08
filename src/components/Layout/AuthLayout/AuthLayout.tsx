import { rem } from "@/utils/apptheme/themeUtils";
import {
  Box,
  Drawer,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../Sidebar";

import MenuIcon from '@mui/icons-material/Menu';

const AuthLayout = () => {

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        display: "flex",
        height: "100vh",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
        <Box sx={{ width: rem(300), flexShrink: 0, display: { xs: "none", md: "block" } }}>
          <Sidebar />
        </Box>
      <Box
        id="auth"
        sx={{
          padding: { xs: `${rem(16)} ${rem(24)}`, sm: `${rem(16)} ${rem(32)}` },
          flexShrink: 0,
          display: { xs: "flex", md: "none" },
          alignItems: "center",
          backgroundColor: "#44446F",
        }}
      >
        <Box>
          <Link href="#" sx={{ display: "flex" }}>
            <Typography sx={{ color: "white", textDecoration:"none" }}>Vaccine Tracker</Typography>
          </Link>
        </Box>
        <Box
          sx={{
            marginLeft: "auto",
          }}
        >
          <IconButton
            aria-label="open menu"
            onClick={toggleDrawer(true)}
            sx={{ color: "#fff" }}
          >
            <MenuIcon/>
          </IconButton>
        </Box>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          minWidth: 0,
          minHeight: 0,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Outlet />
      </Box>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Sidebar />
      </Drawer>
    </Box>
  );
};

export default AuthLayout;
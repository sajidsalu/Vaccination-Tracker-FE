import { rem } from "@/utils/apptheme/themeUtils";
import {
  Box,
  Link,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { menuItems } from "./Sidebar.config";
import { Link as RouterLink, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { clearStore  } from "@/store/userStore";

const Sidebar = () => {

  const user = useSelector((state:RootState)=>state.user.name);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(clearStore()); 
    navigate("/login"); 
  };
  return (
    <Box
      sx={{
        backgroundColor: "#1E1E2F",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "auto",
        "&::-webkit-scrollbar": {
          width: rem(8),
          height: rem(8),
          background: "#2A2A40",
          borderRadius: rem(8),
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#44446F",
          borderRadius: rem(8),
        },
      }}
    >
      {/* App Name */}
      <Box
        sx={{
          display: "flex",
          gap: rem(16),
          padding: { xs: rem(24), lg: rem(32) },
          backgroundColor: "#141421",
        }}
      >
        <Box sx={{ minWidth: 0, flexGrow: 1 }}>
          <Typography variant="h6" sx={{ color: "#FFFFFF" }}>
            Vaccination Tracker Portal
          </Typography>
          <Typography variant="body2" sx={{ color: "#D1D1E0" }}>
            Logged in as {user}
          </Typography>
        </Box>
      </Box>

      {/* Menu Items */}
      <List>
        {menuItems.map((item, index) => (
          <ListItem
            disablePadding
            key={index}
            sx={{
              transition: "background ease 0.2s",
              position: "relative",
              cursor: "pointer",
              "&:before": {
                content: "''",
                width: rem(3),
                height: 0,
                backgroundColor: "#FFD700",
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                margin: "auto",
                transition: "height ease 0.2s",
              },
              "&:hover": {
                backgroundColor: "#2A2A40",
                "&:before": { height: "100%" },
              },
            }}
          >
            <Link
              component={RouterLink}
              onClick={item.key === "logout" ? handleLogout : undefined} 
              to={item?.route ?? ""}
              aria-label={item.name}
              sx={{
                color: "#D1D1E0",
                gap: rem(8),
                minWidth: 0,
                padding: {
                  xs: `${rem(7)} ${rem(20)} ${rem(7)} ${rem(16)}`,
                  lg: `${rem(7)} ${rem(20)} ${rem(7)} ${rem(24)}`,
                  xl: `${rem(10)} ${rem(20)} ${rem(10)} ${rem(24)}`,
                },
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                flexGrow: 1,
                "&:hover": {
                  color: "#FFD700",
                },
              }}
            >
              <ListItemText primary={item.name} />
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;

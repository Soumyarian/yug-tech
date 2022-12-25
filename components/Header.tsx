import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { FiMenu } from "react-icons/fi";
import { menuData } from "../data/MenuData";
import { MenuItem } from "./MenuItem";

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

export const Header = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState);
  };

  const drawer = (
    <Box>
      <Typography variant="h6" sx={{ my: 2, px: 2 }}>
        YUJ Tech
      </Typography>
      <Divider />
      <List>
        {menuData.map((menu, index) => {
          return <MenuItem key={index} menu={menu} />;
        })}
      </List>
    </Box>
  );
  return (
    <>
      <AppBar
        component="nav"
        position="sticky"
        elevation={0}
        color="transparent">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}>
            <FiMenu />
          </IconButton>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
            YUJ Tech
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "flex" } }} gap={2}>
            {menuData.map(menu => {
              return <MenuItem menu={menu} />;
            })}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}>
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

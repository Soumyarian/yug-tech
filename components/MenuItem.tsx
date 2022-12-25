import React, { FC, useState } from "react";
import { MenuDataItem, SubMenuItem } from "../data/MenuData";
import { FiChevronRight, FiChevronUp } from "react-icons/fi";
import {
  Button,
  Collapse,
  ListItemIcon,
  ListItemText,
  Menu,
} from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import { useScreenSize } from "../hooks/useScreenSize";

const SubMenu: FC<{ title: string; subMenus: SubMenuItem[] }> = ({
  subMenus,
  title,
}) => {
  const { isMobile } = useScreenSize();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (open) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = subMenus.map((menu, index) => {
    return (
      <ListItemButton dense key={index}>
        <ListItemText
          primary={menu.title}
          secondary={menu.subtitle}
          primaryTypographyProps={{ variant: "subtitle1" }}
          secondaryTypographyProps={{
            variant: "body1",
            color: "textSecondary",
          }}
        />
      </ListItemButton>
    );
  });

  return (
    <>
      {isMobile ? (
        <ListItemButton onClick={handleClick}>
          <ListItemText primary={title} />
          <ListItemIcon>
            {open ? <FiChevronUp /> : <FiChevronRight />}
          </ListItemIcon>
        </ListItemButton>
      ) : (
        <Button
          onClick={handleClick}
          endIcon={open ? <FiChevronUp /> : <FiChevronRight />}>
          {title}
        </Button>
      )}
      {isMobile ? (
        <Collapse in={open}>{menuItems}</Collapse>
      ) : (
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          {menuItems}
        </Menu>
      )}
    </>
  );
};

export const MenuItem: FC<{ menu: MenuDataItem }> = ({
  menu: { title, dropdown, subMenus },
}) => {
  const { isMobile } = useScreenSize();
  return (
    <>
      {dropdown ? (
        <SubMenu title={title} subMenus={subMenus} />
      ) : isMobile ? (
        <ListItemButton sx={{ color: "inherit" }}>
          <ListItemText primary={title} />
        </ListItemButton>
      ) : (
        <Button>{title}</Button>
      )}
    </>
  );
};

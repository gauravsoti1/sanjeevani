import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link, Typography, ListItem, Drawer, List } from '@material-ui/core';
import styled from 'styled-components';
import AddIcCallIcon from '@material-ui/icons/AddIcCall';
import { useState } from 'react';
import { useCallback } from 'react';

const TelephoneLinkContainer = styled.div`
  display: flex;
  align-items: center;
`;

const menuItems = [
  <Link href="/" color="inherit">
    Home
  </Link>,
  // TODO: add tel href only when it is on mobile
  <TelephoneLinkContainer key="telephoneMenuItem">
    <AddIcCallIcon color="secondary" fontSize="small" />
    <Link color="secondary" href="tel:+919254344556">
      +91-9254344556
    </Link>
  </TelephoneLinkContainer>,
  <Link color="inherit" href="/team">
    Team
  </Link>,
  <Link color="inherit" href="/#specialities">
    Specialities
  </Link>,
  <Link color="inherit" href="/gallery">
    Gallery
  </Link>,
  <Link color="inherit" href="/blogs">
    Blog
  </Link>,
  <Link color="inherit" href="/#aboutUs">
    About Us
  </Link>,
];

export const menuItemsComponent = menuItems.map((menuItem, index) =>
  typeof menuItem === 'string' ? (
    <Typography key={index} display="inline" variant="body1">
      {menuItem}
    </Typography>
  ) : (
    menuItem
  )
);

const MenuListComponent = ({ onClick }) =>
  menuItems.map((menuItem, index) => (
    <ListItem key={index} onClick={onClick}>
      {typeof menuItem === 'string' ? (
        <Typography key={index} display="inline" variant="body1">
          {menuItem}
        </Typography>
      ) : (
        menuItem
      )}
    </ListItem>
  ));

export default function HamburgerDrawer() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleDrawer = useCallback(() => {
    setDrawerOpen((status) => !status);
  }, []);
  return (
    <>
      <IconButton
        color="primary"
        aria-label="open drawer"
        onClick={handleDrawer}
        edge="start"
        // className={clsx(classes.menuButton, open && classes.hide)}
      >
        <MenuIcon />
      </IconButton>
      <StyledDrawer anchor="right" open={drawerOpen} onClose={handleDrawer}>
        {/* <DrawerContent> */}
        {/* <Typography>Menu</Typography>
         */}
        <DrawerList>
          <MenuListComponent onClick={handleDrawer} />
        </DrawerList>
        {/* </DrawerContent> */}
      </StyledDrawer>
    </>
  );
}

const StyledDrawer = styled(Drawer)`
  width: 240px;
`;

const DrawerList = styled(List)`
  width: 240px;
`;

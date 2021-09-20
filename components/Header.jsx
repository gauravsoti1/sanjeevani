import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {
  AppBar,
  Drawer,
  Link,
  Toolbar,
  Typography,
  List,
  ListItem,
} from '@material-ui/core';
import styled from 'styled-components';
import Image from 'next/image';
import AddIcCallIcon from '@material-ui/icons/AddIcCall';
import { useState } from 'react';
import { Menu } from '@material-ui/core';
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

const menuItemsComponent = menuItems.map((menuItem, index) =>
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
    <ListItem onClick={onClick}>
      {typeof menuItem === 'string' ? (
        <Typography key={index} display="inline" variant="body1">
          {menuItem}
        </Typography>
      ) : (
        menuItem
      )}
    </ListItem>
  ));

function HamburgerDrawer() {
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

export default function Header() {
  // const classes = useStyles();
  const hambugerIcon = (
    <IconButton
      // className={classes.menuButton}
      edge="start"
      color="inherit"
      aria-label="menu"
    >
      <MenuIcon />
    </IconButton>
  );
  return (
    <Container>
      <LogoContainer>
        <Image
          width="1585"
          height="420"
          src="/logo.png"
          alt="Sanjeevani Logo"
          // layout="responsive"
          objectFit="contain"
          priority={true}
          // placeholder="blur"
          // blurDataUrl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8r8NQDwAFCQGsNA7jBAAAAABJRU5ErkJggg=="
        />
      </LogoContainer>
      <MenuItems>{menuItemsComponent}</MenuItems>
      <HamburgerContainer>
        <HamburgerDrawer />
      </HamburgerContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  height: 6vh;
  ${(props) => props.theme.breakpoints.up('lg')} {
    height: 10vh;
  }
  align-items: center;
  width: 100%;
  z-index: 5;
  padding-right: 1rem;
`;

const MenuItems = styled.div`
  display: none;
  ${(props) => props.theme.breakpoints.up('md')} {
    display: flex;
    flex-basis: 60%;
    justify-content: space-evenly;
  }
`;

const LogoContainer = styled.div`
  display: inline-block;
  width: 50%;
  ${(props) => props.theme.breakpoints.up('sm')} {
    width: 35%;
  }
  ${(props) => props.theme.breakpoints.up('md')} {
    width: 30%;
  }
  ${(props) => props.theme.breakpoints.up('lg')} {
    width: 20%;
  }
  position: relative;
  object-fit: contain;
  max-height: 100%;
  padding: 0.5rem 1rem;
`;

const HamburgerContainer = styled.div`
  ${(props) => props.theme.breakpoints.up('md')} {
    display: none;
  }
`;

const StyledDrawer = styled(Drawer)`
  width: 240px;
`;

const DrawerList = styled(List)`
  width: 240px;
`;

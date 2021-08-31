import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { AppBar, Link, Toolbar, Typography } from '@material-ui/core';
import styled from 'styled-components';
import Image from 'next/image';
import AddIcCallIcon from '@material-ui/icons/AddIcCall';

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
  <Link color="inherit" href="/blogList">
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
          layout="responsive"
          objectFit="contain"
          placeholder="blur"
        />
      </LogoContainer>
      <MenuItems>{menuItemsComponent}</MenuItems>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  height: 10vh;
  align-items: center;
  width: 100%;
  z-index: 5;
`;

const MenuItems = styled.div`
  display: flex;
  flex-basis: 60%;
  justify-content: space-evenly;
`;

const LogoContainer = styled.div`
  display: inline-block;
  width: 20%;
  position: relative;
  object-fit: contain;
  max-height: 100%;
  padding: 0.5rem 1rem;
`;

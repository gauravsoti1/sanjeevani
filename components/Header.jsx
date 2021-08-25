import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Link, Toolbar, Typography } from '@material-ui/core';
import styled from 'styled-components';
import Image from 'next/image';

const TelephoneLink = styled.a`
  color: ${({ theme }) => theme.palette.secondary.dark};
  text-decoration: none;
`;

const menuItems = [
  'Home',
  // TODO: add tel href only when it is on mobile
  <TelephoneLink href="tel:+919254344556">+91-9254344556</TelephoneLink>,
  'Team',
  'Specialities',
  'Gallery',
  'About Us',
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const menuItemsComponent = menuItems.map((menuItem, index) => (
  <Typography key={index} display="inline" variant="body2">
    {menuItem}
  </Typography>
));

export default function Header() {
  const classes = useStyles();
  const hambugerIcon = (
    <IconButton
      className={classes.menuButton}
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
        <Image src="/logo.svg" alt="Sanjeevani Logo" layout="fill" />
      </LogoContainer>
      <MenuItems>{menuItemsComponent}</MenuItems>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  height: 8vh;
  align-items: center;
  width: 100%;
`;

const MenuItems = styled.div`
  display: flex;
  flex-basis: 60%;
  justify-content: space-evenly;
`;

const LogoContainer = styled.div`
  display: inline-block;
  width: 30%;
  position: relative;
  height: 100%;
  object-fit: cover;
`;

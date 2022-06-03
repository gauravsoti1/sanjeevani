import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Drawer, List } from '@material-ui/core';
import styled from 'styled-components';
import Image from 'next/image';
import logo from '../public/logo.png';
import nabhLogo from '../public/nabhLogo.png';
import HamburgerDrawer, { menuItemsComponent } from './HamburgerDrawer';

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
      <Logos>
        <LogoContainer>
          <Image
            // height="420"
            // src="/logo.png"
            src={logo}
            alt="Sanjeevani Logo"
            // layout="responsive"
            objectFit="contain"
            priority={true}
            // placeholder="blur"
            // blurDataUrl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8r8NQDwAFCQGsNA7jBAAAAABJRU5ErkJggg=="
          />
        </LogoContainer>
        <NABHLogoContainer>
          <Image
            src={nabhLogo}
            alt="NABH Logo"
            objectFit="contain"
            priority={true}
          />
        </NABHLogoContainer>
      </Logos>
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
  height: 10vh;
  align-items: flex-start;
  ${(props) => props.theme.breakpoints.up('md')} {
    align-items: center;
  }
  ${(props) => props.theme.breakpoints.up('lg')} {
    height: 15vh;
  }
  width: 100%;
  z-index: 5;
  padding: 1rem;
`;

const Logos = styled.div`
  flex-basis: 80%;
  display: flex;
  align-items: center;
  ${(props) => props.theme.breakpoints.up('sm')} {
    flex-basis: 60%;
  }
  ${(props) => props.theme.breakpoints.up('md')} {
    flex-basis: 45%;
  }
  ${(props) => props.theme.breakpoints.up('lg')} {
    flex-basis: 30%;
  }
  padding: 0.5rem 1rem;
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
  margin-right: 1rem;
  // ${(props) => props.theme.breakpoints.up('sm')} {
  //   width: 35%;
  // }
  // ${(props) => props.theme.breakpoints.up('md')} {
  //   width: 30%;
  // }
  ${(props) => props.theme.breakpoints.up('lg')} {
    width: 70%;
  }
  position: relative;
  object-fit: contain;
  max-height: 100%;
  // padding: 0.5rem 1rem;
`;

const NABHLogoContainer = styled.div`
  display: inline-block;
  width: 12.5%;
  // ${(props) => props.theme.breakpoints.up('sm')} {
  //   width: 15%;
  // }
  ${(props) => props.theme.breakpoints.up('md')} {
    width: 15%;
  }

  position: relative;
  object-fit: contain;
  max-height: 100%;
  // padding: 0.5rem 1rem;
`;

const HamburgerContainer = styled.div`
  ${(props) => props.theme.breakpoints.up('md')} {
    display: none;
  }
`;

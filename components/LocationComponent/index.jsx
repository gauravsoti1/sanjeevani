import { Button, IconButton, Link, Typography } from '@material-ui/core';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import Section from '../Section';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';

const Address = () => (
  <AddressContainer>
    <Typography variant="h4"> Rohtak</Typography>
    <Typography color="textSecondary">
      Medical mor/ PGI chowk, Delhi Rd, Rohtak, Haryana, 124001
    </Typography>
    <Typography color="textSecondary">
      {/* <div> */}
      <Link variant="body1" href="tel:01262280006">
        01262-280006
      </Link>{' '}
      /{' '}
      <Link variant="body1" href="tel:+918750542999">
        +91-8750542999
      </Link>
      {/* </div> */}
    </Typography>
    <Link
      display="block"
      href="mailTo:sanjeevaniplushospital@gmail.com"
      gutterBottom
      variant="body1"
    >
      sanjeevaniplushospital@gmail.com
    </Link>
    <Button
      variant="contained"
      href="https://goo.gl/maps/9RYoQSYyZj8Ry1Kt6"
      target="_blank"
      color="secondary"
      disableElevation
    >
      Navigate
    </Button>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <IconButton href="https://www.linkedin.com/company/sanjeevaniplushospital">
        <LinkedInIcon />
      </IconButton>
      <IconButton href="https://www.facebook.com/SanjeevaniplusHospital">
        <FacebookIcon />
      </IconButton>
      <IconButton href="https://youtu.be/qtbjrMLzuKM">
        <YouTubeIcon />
      </IconButton>
      <IconButton href="https://www.instagram.com/invites/contact/?i=1uozm0n5x5o3l&utm_content=li1fly3">
        <InstagramIcon />
      </IconButton>
    </div>
  </AddressContainer>
);

export default function LocationComponent() {
  return (
    <StyledSection id="aboutUs">
      <Container>
        <Address />
        <MapContainer>
          {/* <MapImageContainer>
            <Image
              src="http://sanjeevani-gallery.s3.ap-south-1.amazonaws.com/3.jpg"
              // width="800"
              // height="499"
              layout="fill"
              objectFit="cover"
              // placeholder="blur"
            />
          </MapImageContainer> */}
          <MapIframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1746.6766529803897!2d76.60860015630972!3d28.887847482317703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d851db2f297e9%3A0xcb83b26cb001cd07!2sSanjeevani%20Plus%20Hospital!5e0!3m2!1sen!2sin!4v1630272372251!5m2!1sen!2sin"
            // width="600"
            // height="450"
            // style="border:0;"
            allowfullscreen=""
            loading="lazy"
          ></MapIframe>
        </MapContainer>
      </Container>
    </StyledSection>
  );
}

const StyledSection = styled(Section)`
  height: 90vh;
  min-height: 90vh;
  padding-top: 4rem;
`;

const Container = styled.div`
  padding-top: 2rem;

  ${(props) => props.theme.breakpoints.up('lg')} {
    display: flex;
    padding-top: 0rem;
  }
  // padding: 4rem;
  // height: 50vh;
  // border-top: 1px solid #ddd;
  height: 100%;
`;

const AddressContainer = styled.div`
  flex-basis: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: -4rem;
`;

const MapIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: 0px;
`;

const MapImageContainer = styled.div`
  height: 100%;
  width: 35%;
  position: relative;
  border-right: 4px solid white;
`;

const MapContainer = styled.div`
  position: relative;
  height: 40%;
  display: flex;
  margin-top: 2rem;
  ${(props) => props.theme.breakpoints.up('lg')} {
    margin-top: 0;
    height: 80%;
    padding-left: 5%;
    flex-basis: 70%;
  }
`;

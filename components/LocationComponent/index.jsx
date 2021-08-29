import { Button, Link, Typography } from '@material-ui/core';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import Section from '../Section';

export default function LocationComponent() {
  return (
    <StyledSection>
      <Container>
        <AddressContainer>
          <Typography variant="h4"> Rohtak</Typography>
          <Typography color="textSecondary">
            Medical mor/ PGI chowk, Delhi Rd, Rohtak, Haryana, 124001
          </Typography>
          <Typography color="textSecondary">
            <div>
              <Link variant="body1" href="tel:01262280006">
                01262-280006
              </Link>{' '}
              /{' '}
              <Link variant="body1" href="tel:+919254344556">
                +91-9254344556
              </Link>
            </div>
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
        </AddressContainer>
        <MapContainer>
          <MapImageContainer>
            <Image
              src="http://sanjeevani-gallery.s3.ap-south-1.amazonaws.com/3.jpg"
              // width="800"
              // height="499"
              layout="fill"
              objectFit="cover"
            />
          </MapImageContainer>
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
  height: 70vh;
`;

const Container = styled.div`
  display: flex;
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
  width: 65%;
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
  height: 80%;
  position: relative;
  display: flex;
  flex-basis: 70%;
  padding-left: 5%;
`;

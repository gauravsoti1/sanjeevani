import React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import Image from 'next/image';
import Section from './Section';

const BackgroundShadow = () => [
  <BackgroundShadowEllipseTop key="shadow1" />,
  <BackgroundShadowEllipseBottom key="shadow2" />,
];

export default function HeroSection() {
  return (
    <Section>
      <BackgroundShadow />

      <Container>
        <HeroTextContainer>
          <Typography
            gutterBottom={true}
            variant="h3"
            component="h1"
            color="primary"
          >
            Sanjeevani <PlusText> Plus </PlusText> Hospital
          </Typography>
          <Typography variant="subtitle1" component="h3" color="textSecondary">
            One of the leading specialty orthopedics
            units running successfully for over a decade. Our experienced and
            dedicated team endeavors to render quality healthcare service with a
            touch of personal compassionate care.
          </Typography>
        </HeroTextContainer>
        <HeroImageContainer>
          <Image src="/heroImage.svg" alt="Vercel Logo" layout="fill" />
        </HeroImageContainer>
      </Container>
    </Section>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  height: 80vh;
  align-items: center;
  justify-content: space-between;
  // background: linear-gradient(90deg, rgba(218, 242, 228, 0.5) 0%, #daf2e4 100%);
`;

const HeroTextContainer = styled.div`
  flex-basis: 50%;
`;

const HeroImageContainer = styled.div`
  position: relative;
  height: 70%;
  flex-basis: 50%;
`;

const PlusText = styled.span`
  color: red;
`;

const BackgroundShadowEllipseTop = styled.div`
  position: absolute;
  width: 50%;
  height: 70%;
  left: 45%;
  top: 4vh;
  background: #c1f5d7;
  filter: blur(600px);
`;

const BackgroundShadowEllipseBottom = styled.div`
  position: absolute;
  width: 55%;
  height: 50%;
  left: 50%;
  top: calc(4vh + 45%);
  background: #c1f5d7;
  filter: blur(800px);
  z-index: -1;
`;

import React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <Container>
      <Typography variant="h4" color="primary">
        Sanjeevani <PlusText> Plus </PlusText> Hospital
      </Typography>
      <HeroImageContainer>
        <Image src="/heroImage.svg" alt="Vercel Logo" layout="fill" />
      </HeroImageContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 80vh;
  align-items: center;
  justify-content: space-around;
  background: linear-gradient(90deg, rgba(218, 242, 228, 0.5) 0%, #daf2e4 100%);
`;

const HeroImageContainer = styled.div`
  position: relative;
  height: 70%;
  flex-basis: 50%;
`;

const PlusText = styled.span`
  color: red;
`;

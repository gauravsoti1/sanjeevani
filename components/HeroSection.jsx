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
      <Image src="/heroImage.svg" alt="Vercel Logo" width={240} height={240} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: linear-gradient(90deg, rgba(218, 242, 228, 0.5) 0%, #daf2e4 100%);
`;
const PlusText = styled.span`
  color: red;
`;

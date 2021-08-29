import { Grow, Typography } from '@material-ui/core';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

export default function ServiceDetail({
  img,
  imgWidth,
  imgHeight,
  name,
  details,
}) {
  return (
    <Container>
      <ImageContainer>
        <Image
          src={img}
          width={imgWidth}
          height={imgHeight}
          layout="responsive"
        />
      </ImageContainer>
      <Typography gutterBottom={true} align="center" variant="h4">
        {name}
      </Typography>
      <Typography color="textSecondary" align="center">{details}</Typography>
    </Container>
  );
}

const ImageContainer = styled.div`
  position: relative;
  width: 35%;
  object-fit: contain;
  margin: 0 auto;
  margin-bottom: 1rem;
  
`;

const Container = styled.div`
  flex-basis: 35%;
  tex-align: center;
  margin: 0 auto;
  padding-top: 2rem;
`;

import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

export default function Testimonial({
  className,
  imgSrc,
  patient,
  age,
  message,
}) {
  return (
    <Container>
      <ImageContainer>
        <Image src={imgSrc} layout="fill" />
      </ImageContainer>
      <Typography>{patient}</Typography>
      <Typography color="textSecondary">{age}</Typography>
      <Typography>{message}</Typography>
    </Container>
  );
}

const Container = styled.div`
  height: 80%;
  padding: 8rem 1rem 1rem 1rem;
  position: relative;
  background: white;
`;

const ImageContainer = styled.div`
  position: absolute;
  top: -3rem;
  left: 1.5rem;
  width: 6rem;
  height: 6rem;
`;

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

export default function BlogThumbnail({
  className,
  thumbnailUrl,
  title,
  description,
}) {
  const url = 'http://localhost:1337' + thumbnailUrl;
  console.log('url = ', url);
  return (
    <Container className={className}>
      <h3>{title}</h3>
      <h6>{description}</h6>
      <ImageContainer>
        <Image src={url} layout="fill" />
      </ImageContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 300px;
  height: 500px;
`;
const ImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 2 / 3;
  position: relative;
  object-fit: contain;
`;

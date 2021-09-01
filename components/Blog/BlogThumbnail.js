import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Typography } from '@material-ui/core';

export default function BlogThumbnail({
  className,
  thumbnailUrl,
  title,
  description,
  thumbnailHeight,
  thumbnailWidth,
  onClick,
}) {
  const url =
    process.env.CMS_MEDIA_URL || 'http://localhost:1337' + thumbnailUrl;
  console.log('url = ', url);
  return (
    <Container className={className} onClick={onClick}>
      <ImageContainer>
        <Image
          src={url}
          layout="responsive"
          height={thumbnailHeight}
          width={thumbnailWidth}
          objectFit="cover"
        />
      </ImageContainer>
      <Typography variant="h5">{title}</Typography>
      <Typography variant="body2">{description}</Typography>
    </Container>
  );
}

const Container = styled.div`
  width: 300px;
  height: 500px;
  cursor: pointer;
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 30vh;
  position: relative;
  object-fit: cover;
`;

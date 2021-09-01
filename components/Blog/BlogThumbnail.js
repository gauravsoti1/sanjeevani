import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';

export default function BlogThumbnail({
  className,
  thumbnailUrl,
  title,
  description,
  thumbnailHeight,
  thumbnailWidth,
  onClick,
}) {
  // const url =
  //   process.env.CMS_MEDIA_URL || 'http://localhost:1337' + thumbnailUrl;
  // console.log('url = ', url);
  return (
    <Container className={className} onClick={onClick}>
      <CardActionArea>
        <ImageContainer>
          <Image
            src={thumbnailUrl}
            layout="responsive"
            height={thumbnailHeight}
            width={thumbnailWidth}
            objectFit="cover"
          />
        </ImageContainer>
        <CardContent>
          <Typography variant="h6" gutterBottom>{title}</Typography>
          <Typography noWrap={true} color="textSecondary" variant="body2">
            {description}
          </Typography>
        </CardContent>
        {/* <CardMedia
            component={
              
            }
          /> */}
      </CardActionArea>
    </Container>
  );
}

const Container = styled(Card)`
  max-height: 400px;
  overflow: hidden;
  cursor: pointer;
`;
const ImageContainer = styled.div`
  width: 100%;
  // height: 30vh;
  position: relative;
  object-fit: cover;
`;

export function getStaticProps() {
  const cmsUrl = process.env.CMS_MEDIA_URL;
  console.log(
    '🚀 ~ file: BlogThumbnail.js ~ line 18 ~ getStaticProps ~ cmsUrl',
    cmsUrl
  );
}

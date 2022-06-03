import React from 'react';
import styled from 'styled-components';
import { Typography as MuiTypography } from '@material-ui/core';
import withCustomColor from '../withCustomColor';
import youtubeIcon from '../../public/youtubeIcon.png';
import Image from 'next/image';

const Typography = withCustomColor(MuiTypography);

export default function VideoCard({
  videoLink,
  thumbnailUrl,
  title,
  description,
}) {
  return (
    <Container>
      {/* <a href={videoLink}> */}
      <ImageContainer>
        <img src={thumbnailUrl} alt={title} />
        <YoutubeIconContainer href={videoLink} target="_blank">
          <Image
            width="60"
            height="60"
            src={youtubeIcon}
            alt="youtubeIcon"
            objectFit="contain"
          />
        </YoutubeIconContainer>
      </ImageContainer>
      <Typography variant="body1" color="white">
        {title}
      </Typography>
      <Typography variant="body2">{description} </Typography>
      {/* </a> */}
    </Container>
  );
}

const Container = styled.div`
  height: 70%;
  grid-row: 1;
  grid-column: auto;
  a {
    height: 100%;
  }
  ${(props) => props.theme.breakpoints.up('md')} {
    height: 50%;
  }
`;
const ImageContainer = styled.div`
  background: black;
  position: relative;
  height: 60%;
  img {
    object-fit: contain;
    max-height: 100%;
  }
`;

const YoutubeIconContainer = styled.a`
  display: block;
  position: relative;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    cursor: pointer;
  }
`;

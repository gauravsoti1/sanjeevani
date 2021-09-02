import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
// import galleryData from './galleryData';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { IconButton, Typography } from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

export default function GalleryComponent({ media = [] }) {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  });
  const isLast = currentSlide === media?.length - 1 || 0;

  const arrows = (
    <div>
      {slider && (
        <IconButton
          disabled={currentSlide === 0}
          variant="contained"
          size="large"
        >
          <ArrowBackIcon
            onClick={(e) => e.stopPropagation() || slider.prev()}
            disabled={currentSlide === 0}
          />
        </IconButton>
      )}
      {slider && (
        <IconButton size="large" disabled={isLast}>
          <ArrowForwardIcon
            onClick={(e) => e.stopPropagation() || slider.next()}
            disabled={currentSlide === slider.details().size - 1}
          />
        </IconButton>
      )}
    </div>
  );

  const dots = slider && (
    <div className="dots">
      {[...Array(slider.details().size).keys()].map((idx) => {
        return (
          <IconButton
            key={idx}
            size="small"
            onClick={() => {
              slider.moveToSlideRelative(idx);
            }}
            color={currentSlide === idx ? 'primary' : 'textSecondary'}
          >
            <FiberManualRecordIcon />
          </IconButton>
        );
      })}
    </div>
  );

  return [
    <LeftContainer>
      <Typography align="center" variant="h3" component="h1" color="primary">
        Our Gallery
      </Typography>
      {arrows}
      {dots}
    </LeftContainer>,
    <Container className="galleryComponent">
      <SliderAndIconsContainer>
        <SliderContainer ref={sliderRef} className="keen-slider">
          {media.map((m, index) => (
            <ThumbnailContainer
              className={`keen-slider__slide number-slide${index}`}
              key={'gallery' + index}
            >
              <Image
                // width={m.imageWidth}
                // height={m.imageHeight}
                src={m.imageUrl}
                layout="fill"
                objectFit="contain"
              />
            </ThumbnailContainer>
          ))}
        </SliderContainer>
      </SliderAndIconsContainer>
    </Container>,
  ];
}

const Container = styled.div`
  height: 80vh;
  // padding: 6rem;
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  flex-basis: 68%;
  margin: 0 auto;
`;

const SliderContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const SliderAndIconsContainer = styled.div`
  // display: flex;
  // align-items: center;
  height: 100%;
  position: relative;
`;

const LeftArrowContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 8rem;
  height: 100%;
  display: flex;
  align-items: center;
`;
const RightArrowContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 8rem;
  height: 100%;
  display: flex;
  align-items: center;
`;
const ThumbnailContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const LeftContainer = styled.div`
  flex-basis: 30%;
  margin-bottom: 4rem;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

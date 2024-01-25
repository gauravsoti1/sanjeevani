import React from "react";
import styled from "styled-components";
import Image from "next/image";
// import galleryData from './galleryData';
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { IconButton, Typography } from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

export default function GalleryComponent({ media = [] }) {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  });
  const isLast = currentSlide === media?.length - 1 || 0;
  const leftArrow = slider && (
    <LeftArrowContainer>
      <ArrowButton
        disabled={currentSlide === 0}
        variant="contained"
        // color="primary"
        size="large"
      >
        <ArrowBackIcon
          onClick={(e) => e.stopPropagation() || slider.prev()}
          disabled={currentSlide === 0}
        />
      </ArrowButton>
    </LeftArrowContainer>
  );

  const rightArrow = slider && (
    <RightArrowContainer>
      <ArrowButton
        variant="contained"
        size="large"
        // color="primary"
        disabled={isLast}
      >
        <ArrowForwardIcon
          onClick={(e) => e.stopPropagation() || slider.next()}
          disabled={currentSlide === slider.details().size - 1}
        />
      </ArrowButton>
    </RightArrowContainer>
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
            color={currentSlide === idx ? "primary" : "textSecondary"}
          >
            <FiberManualRecordIcon />
          </IconButton>
        );
      })}
    </div>
  );

  return [
    <Typography
      gutterBottom
      align="center"
      variant="h3"
      component="h1"
      color="primary"
    >
      Our Gallery
    </Typography>,

    <Container className="galleryComponent">
      <SliderAndIconsContainer>
        {leftArrow}
        <SliderContainer ref={sliderRef} className="keen-slider">
          {media.map((m, index) => (
            <ThumbnailContainer
              className={`keen-slider__slide number-slide${index}`}
              key={"gallery" + index}
            >
              <Image src={m.imageUrl} fill objectFit="contain" alt={m.alt} />
            </ThumbnailContainer>
          ))}
        </SliderContainer>
        {rightArrow}
      </SliderAndIconsContainer>
    </Container>,
  ];
}

const Container = styled.div`
  height: 100%;
  // padding: 6rem;
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  flex-basis: 68%;
  margin: 0 auto;
`;

const SliderAndIconsContainer = styled.div`
  // display: flex;
  // align-items: center;
  height: 100%;
  position: relative;
  ${(props) => props.theme.breakpoints.up("md")} {
    margin: 0 4rem;
  }
  background: rgba(0, 0, 0, 0.9);
`;

const SliderContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const LeftArrowContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 8rem;
  height: 100%;
  display: flex;
  align-items: center;
  // z-index: 5;
  padding-left: 1rem;
`;

const ThumbnailContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const RightArrowContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 8rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  z-index: 5;
  padding-right: 1rem;
`;

const ArrowButton = styled(IconButton)`
  &.MuiIconButton-root:hover,
  &.MuiIconButton-root:active {
    background-color: rgba(255, 255, 255, 0.4);
  }
  // &.MuiIconButton-root:not(.Mui-disabled) svg {
  //   color: rgba(255, 255, 255, 0.6);
  // }
  &.MuiIconButton-root:not(.Mui-disabled) svg {
    color: rgba(255, 255, 255, 0.6);
  }
  &.MuiIconButton-root.Mui-disabled svg {
    color: rgba(255, 255, 255, 0.3);
  }
  &.MuiIconButton-root {
    z-index: 5;
  }
`;

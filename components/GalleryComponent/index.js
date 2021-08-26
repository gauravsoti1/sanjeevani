import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import galleryData from './galleryData';
import { Carousel } from 'react-responsive-carousel';

const Thumbnails = () =>
  galleryData.map(({ src }, index) => (
    <ThumbnailContainer key={'gallery' + index}>
      <Image src={src} layout="fill" />
    </ThumbnailContainer>
  ));

export default function GalleryComponent() {
  return (
    <Container>
      <CarouselComponent />
      {/* <ThumbnailsContainer>
        <Thumbnails />
      </ThumbnailsContainer> */}
    </Container>
  );
}

function CarouselComponent() {
  return (
    <Carousel autoPlay>
      <div>
        <img
          alt=""
          src="http://sanjeevani-gallery.s3.ap-south-1.amazonaws.com/1.jpg"
        />
      </div>
      <div>
        <img
          alt=""
          src="http://sanjeevani-gallery.s3.ap-south-1.amazonaws.com/2.jpg"
        />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img
          alt=""
          src="http://sanjeevani-gallery.s3.ap-south-1.amazonaws.com/3.jpg"
        />
        <p className="legend">Legend 3</p>
      </div>
      <div>
        <img
          alt=""
          src="http://sanjeevani-gallery.s3.ap-south-1.amazonaws.com/4.jpg"
        />
        <p className="legend">Legend 4</p>
      </div>
    </Carousel>
  );
}

const Container = styled.div`
  height: 100vh;
  padding: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ThumbnailsContainer = styled.div`
  position: absolute;
  display: flex;
  bottom: 4rem;
`;

const ThumbnailContainer = styled.div`
  width: 15rem;
  height: 10rem;
  position: relative;
`;

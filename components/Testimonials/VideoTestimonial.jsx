import React from 'react';
import styled from 'styled-components';

export default function VideoTestimonial({ className, url }) {
  return (
    <Container className={className}>
      <video preload="none" poster="/testimonialPoster.png" controls>
        <source src={url} />
      </video>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  video {
    width: 80%;
    aspect-ratio: 3/2;
    height: 60vh;
    background: black;
  }
`;

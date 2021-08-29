import { Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import Section from '../Section';
import StyledTypography from '../StyledTypography';
import Testimonial from './Testimonial';
import VideoTestimonial from './VideoTestimonial';

const testimonial = {
  patient: 'Selena Gomz',
  age: '22 years',
  imgSrc: '/vercel.svg',
  message:
    "The salad is fresh!!! Don't ask about the sauce again, it's really delicious, it's going to be routine. I recommend this salad to all of you guys! because they really take care of the quality.",
};

export default function Testimonials() {
  return (
    <StyledSection>
      <Container>
        <ContentNavigation>
          <StyledTypography gutterBottom color="white" variant="h3">
            Patient's Experience
          </StyledTypography>
          <StyledTypography color="rgba(255,255,255, 0.9)" variant="h6">
            We are happy that you are satisfied with our services. Let's watch
            our patient's experience
          </StyledTypography>
        </ContentNavigation>
        <TestimonialsContainer>
          {/* <Testimonial {...testimonial} /> */}
          {/* <Testimonial {...testimonial} /> */}
          <VideoTestimonial url="https://sanjeevani-cms-media.s3.ap-south-1.amazonaws.com/video/testimonial-video.mp4" />
        </TestimonialsContainer>
      </Container>
    </StyledSection>
  );
}

const StyledSection = styled(Section)`
  background: ${(props) => props.theme.palette.secondary.main};
  height: 80vh;
  left: 0;
`;

const Container = styled.div`
  display: flex;
  height: 100%;
`;

const ContentNavigation = styled.div`
  flex-basis: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: -2rem;
`;

const TestimonialsContainer = styled.div`
  flex-basis: 60%;
  display: grid;
  // grid-template-columns: 1fr 1fr;
  // grid-column-gap: 5%;
`;

const PrimaryColorSpan = styled.span`
  color: ${({ theme }) => theme.palette.primary.dark};
`;

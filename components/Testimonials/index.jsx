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
          <StyledTypography gutterBottom color="textPrimary" variant="h3">
            Patient's Experience
          </StyledTypography>
          <StyledTypography color="textSecondary" variant="h6">
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
  // background: ${(props) => props.theme.palette.blue.main};
  background: linear-gradient(
    180deg,
    #daf2e4 0%,
    rgba(218, 242, 228, 0.5) 100%
  );
  // height: 80vh;
  left: 0;
  min-height: 90vh;
  padding-top: 4rem;
`;

const Container = styled.div`
  ${(props) => props.theme.breakpoints.up('lg')} {
    display: flex;
  }
  height: 100%;
`;

const ContentNavigation = styled.div`
  ${(props) => props.theme.breakpoints.up('lg')} {
    flex-basis: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }
  margin-top: -2rem;
`;

const TestimonialsContainer = styled.div`
  margin-top: 2rem;
  ${(props) => props.theme.breakpoints.up('lg')} {
    flex-basis: 60%;
    margin-top: 0;
  }
  display: grid;
  // grid-template-columns: 1fr 1fr;
  // grid-column-gap: 5%;
`;

const PrimaryColorSpan = styled.span`
  color: ${({ theme }) => theme.palette.primary.dark};
`;

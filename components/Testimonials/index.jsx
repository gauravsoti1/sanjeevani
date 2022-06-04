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

const StyledSection = styled.section`
  background: ${({ theme }) => theme.palette.primary.light};
  // background: linear-gradient(
  //   180deg,
  //   ${({ theme }) => theme.palette.primary.light} 0%,
  //   ${({ theme }) => theme.palette.primary.main} 100%
  // );
  left: 0;
  padding: 4rem;
`;

const Container = styled.div`
  ${(props) => props.theme.breakpoints.up('lg')} {
    display: flex;
  }
  height: 100%;
`;

const ContentNavigation = styled.div`
  ${(props) => props.theme.breakpoints.up('lg')} {
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: auto;
  }
  margin-top: -2rem;
`;

const TestimonialsContainer = styled.div`
  margin-top: 2rem;
  ${(props) => props.theme.breakpoints.up('lg')} {
    flex-basis: 50%;
    margin-top: 0;
    text-align: right;
  }
  display: grid;
  // grid-template-columns: 1fr 1fr;
  // grid-column-gap: 5%;
`;

const PrimaryColorSpan = styled.span`
  color: ${({ theme }) => theme.palette.primary.dark};
`;

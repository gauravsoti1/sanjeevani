import React from 'react';
import styled from 'styled-components';
import StyledTypography from './StyledTypography';

export default function Section({ className, children, id }) {
  return (
    <Container id={id} className={className}>
      {children}
    </Container>
  );
}

function Heading({ className, children, color = 'primary', ...props }) {
  return (
    <StyledTypography
      align="center"
      color={color}
      className={className}
      variant="h3"
      component="h2"
      {...props}
    >
      {children}
    </StyledTypography>
  );
}

Section.Heading = Heading;

const Container = styled.section`
  padding: 4rem 2rem;
  min-height: 90vh;
  position: relative;
`;

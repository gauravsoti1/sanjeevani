import { Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

export default function Section({ className, children }) {
  return <Container className={className}>{children}</Container>;
}

function Heading({ className, children, color = 'primary' }) {
  return (
    <Typography
      align="center"
      color={color}
      className={className}
      variant="h3"
      component="h2"
    >
      {children}
    </Typography>
  );
}

Section.Heading = Heading;

const Container = styled.div`
  padding: 4rem 2rem;
  min-height: 90vh;
  position: relative;
`;

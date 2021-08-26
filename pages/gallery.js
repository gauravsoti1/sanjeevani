import { Typography } from '@material-ui/core';
import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

export default function gallery() {
  const [selectedId, setSelectedId] = useState(0);

  return [
    <Header />,
    <Container>
      <Typography variant="h2" color="primary">
        Our Gallery
      </Typography>
    </Container>,
  ];
}

const Container = styled.div`
  margin-top: 10vh;
`;

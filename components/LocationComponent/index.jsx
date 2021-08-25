import { Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

export default function index() {
  return (
    <Container>
      <AddressContainer>
        <Typography variant="h4"> Rohtak</Typography>
        <Typography variant="h6">
          Medical mor/ PGI chowk, Delhi Rd, Rohtak, Haryana, 124001
        </Typography>
        <Typography variant="h6">
          Phone : 01262-280006 Mobile : +91-9254344556
        </Typography>
        <Typography variant="h6">sanjeevaniplushospital@gmail.com</Typography>
      </AddressContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  padding: 4rem;
  height: 50vh;
  border-top: 1px solid #ddd;
`;

const AddressContainer = styled.div`
  flex-basis: 30%;
`;

import { Fab, Link } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
// https://wa.me/1XXXXXXXXXX?text=I'm%20interested%20in%20your%20car%20for%20sale
export default function WhatsappFAB() {
  return (
    <Container>
      <Fab color="primary">
        <Link
          color="secondary"
          href="https://wa.me/919210918082?text=I'm%20interested%20in%20booking%20an%20appointment%20"
        >
          Whatsapp
        </Link>
      </Fab>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  right: 8rem;
  bottom: 8rem;
`;

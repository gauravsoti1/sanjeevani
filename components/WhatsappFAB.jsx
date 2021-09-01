import { Fab, Link } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import withCustomColor from './withCustomColor';
// https://wa.me/1XXXXXXXXXX?text=I'm%20interested%20in%20your%20car%20for%20sale

const CustomColorWhatsappIcon = withCustomColor(WhatsAppIcon);

export default function WhatsappFAB() {
  return (
    <Container>
      <Fab
        color="primary"
        href="https://wa.me/919254344556?text=I'm%20interested%20in%20booking%20an%20appointment%20"
      >
        <CustomColorWhatsappIcon color="white" />
      </Fab>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  right: 2rem;
  bottom: 2rem;
`;

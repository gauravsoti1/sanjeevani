import { Slide } from '@material-ui/core';
import { Grow, Typography } from '@material-ui/core';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useCallback } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Section from '../Section';
import ServiceDetail from './ServiceDetail';
import services from './servicesData';
import ServicesList from './ServicesList';

function getOrthoIndex(services) {
  const index = services.findIndex((s) => s.id === 'ortho');
  return index === -1 ? 0 : index;
}

export default function Services() {
  const [selectedServiceIndex, setSelectedServiceIndex] = useState(
    getOrthoIndex(services)
  );
  const onClick = useCallback((index) => {
    setSelectedServiceIndex(index);
  }, []);

  const selectedService = services[selectedServiceIndex];
  return (
    <Section id="specialities">
      <Section.Heading>Specialities</Section.Heading>
      <Container>
        <ServicesList
          selectedServiceIndex={selectedServiceIndex}
          onClick={onClick}
        />
        <Grow in={true}>
          <ServiceDetail {...selectedService} />
        </Grow>
      </Container>
    </Section>
  );
}

const Container = styled.div`
  padding-top: 4rem;
  display: flex;
  flex-direction: column-reverse;
  // height: 60vh;
  ${(props) => props.theme.breakpoints.up('md')} {
    flex-direction: row;
  }
`;

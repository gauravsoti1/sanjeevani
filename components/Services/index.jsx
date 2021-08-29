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

export default function Services() {
  const [selectedServiceIndex, setSelectedServiceIndex] = useState(0);
  const onClick = useCallback((index) => {
    setSelectedServiceIndex(index);
  }, []);

  const selectedService = services[selectedServiceIndex];
  return (
    <Section>
      <Section.Heading>Our Services</Section.Heading>
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
  // height: 60vh;
`;

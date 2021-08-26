import { Typography } from '@material-ui/core';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import services from './servicesData';

export default function Services() {
  const [selectedServiceIndex, setSelectedServiceIndex] = useState(0);
  function onClick(index) {
    setSelectedServiceIndex(index);
  }

  const selectedService = services[selectedServiceIndex];
  return (
    <Container>
      <ServicesList>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.4,
              },
            },
          }} 
        >
          <Typography variant="h3" color="primary">
            Our Services
          </Typography>
        </motion.div>

        {services.map((service, index) => (
          <Typography
            as="li"
            key={service.name + index}
            onClick={onClick.bind(null, index)}
          >
            {service.name}
          </Typography>
        ))}
      </ServicesList>
      <ServiceDetail>
        <ImageContainer>
          <Image src={selectedService.img} layout="fill" />
        </ImageContainer>
        <Typography variant="h4">{selectedService.name}</Typography>
        <Typography>{selectedService.details}</Typography>
      </ServiceDetail>
    </Container>
  );
}

const Container = styled.div`
  padding: 4rem;
  display: flex;
  height: 60vh;
`;

const ServicesList = styled.ul`
  flex-basis: 35%;
  decoration: none;
`;

const ServiceDetail = styled.div`
  flex-basis: 65%;
  tex-align: center;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 30%;
  height: 5rem;
  object-fit: contain;
`;

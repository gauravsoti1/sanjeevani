import { Typography } from '@material-ui/core';
import React from 'react';
import Section from '../Section';
import styled from 'styled-components';
import insuranceData from './insuranceData';
import Image from 'next/image';

export default function Insurances() {
  return (
    <Section>
      <Section.Heading gutterBottom={true} color="blue">
        Insurances
      </Section.Heading>
      <DescriptionContainer>
        <Typography color="textSecondary" variant="body2" align="center">
          Money shouldn't be a hindrance for you to avail the best Healthcare
          Facilities. We provide cashless facility to the insured patients
          through our associated TPAs.
        </Typography>
      </DescriptionContainer>
      <InsuranceIconsContainer>
        {insuranceData.map(({ src, width, height }) => (
          <Image
            src={src}
            width={width}
            height={height}
            // layout="responsive"
            objectFit="contain"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8r8NQDwAFCQGsNA7jBAAAAABJRU5ErkJggg=="
          />
        ))}
      </InsuranceIconsContainer>
    </Section>
  );
}

const DescriptionContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  ${(props) => props.theme.breakpoints.up('lg')} {
    width: 60%;
  }
`;

const InsuranceIconsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 4rem 0rem 0 0rem;
  ${(props) => props.theme.breakpoints.up('lg')} {
    padding: 6rem 4rem 0 4rem;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 200px 200px;
  }
  justify-content: space-evenly;
  grid-row-gap: 5vh;
  grid-column-gap: 5%;
`;

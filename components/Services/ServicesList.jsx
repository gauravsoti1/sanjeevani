import React from 'react';
import services from './servicesData';
import styled, { css } from 'styled-components';
import { Grow, List, ListItem, Typography } from '@material-ui/core';

export default function ServicesList({ onClick, selectedServiceIndex }) {
  return (
    <Container>
      <StyledList>
        {services.map((service, index) => (
          <StyledListItem
            button
            selected={selectedServiceIndex === index}
            className="serviceListItem"
            key={service.name + index}
            onClick={onClick.bind(null, index)}
          >
            {service.name}
          </StyledListItem>
        ))}
      </StyledList>
    </Container>
  );
}

const Container = styled.div`
  flex-basis: 35%;
  decoration: none;
  display: flex;
  justify-content: flex-end;
`;

const StyledList = styled(List)`
  width: 70%;
`;

const StyledListItem = styled(ListItem)`
  display: inline-block;
  text-align: right;
  background-color: ${({ theme, selected }) =>
    selected &&
    css`
      ${theme.palette.blue.light} !important
    `};
  color: ${({ theme, selected }) =>
    `${theme.palette.getContrastText(
      selected ? theme.palette.blue.light : '#fafafa'
    )}`};
`;

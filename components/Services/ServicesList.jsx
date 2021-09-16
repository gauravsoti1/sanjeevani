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
  margin-top: 2rem;
  ${(props) => props.theme.breakpoints.up('md')} {
    flex-basis: 35%;
    decoration: none;
    display: flex;
    justify-content: flex-end;
    margin-top: 0;
  }
`;

const StyledList = styled(List)`
  ${(props) => props.theme.breakpoints.up('md')} {
    width: 70%;
  }
`;

const StyledListItem = styled(ListItem)`
  text-align: center;
  justify-content: center;
  ${(props) => props.theme.breakpoints.up('md')} {
    display: inline-block;
    text-align: right;
    justify-content: flex-end;
  }
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

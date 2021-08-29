import { Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

function getColorFromKey(key, theme) {
  switch (key) {
    case 'primary':
    case 'secondary':
    case 'blue':
      return theme.palette[key]?.main;
    default:
      return key;
  }
}

const StyledTypography = styled(Typography)`
  color: ${({ theme, color }) => getColorFromKey(color, theme)};
`;

export default StyledTypography;

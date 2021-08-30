import { Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import withCustomColor from './withCustomColor';

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

const StyledTypography = withCustomColor(Typography);
  
export default StyledTypography;

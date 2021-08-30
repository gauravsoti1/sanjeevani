import { makeStyles } from '@material-ui/core';
import React from 'react';
import { forwardRef } from 'react';

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

const useStyles = (key) =>
  makeStyles((theme) => ({
    customColor: {
      color: getColorFromKey(key, theme),
    },
  }));

export default function withCustomColor(Component) {
  return forwardRef(function (props, ref) {
    const { color, className = '', ...restProps } = props;
    const classes = useStyles(color)();
    return (
      <Component
        ref={ref}
        className={classes.customColor + ' ' + className}
        {...restProps}
      />
    );
  });
}

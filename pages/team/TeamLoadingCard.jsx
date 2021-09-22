import { Skeleton } from '@material-ui/lab';
import React from 'react';

export default function TeamLoadingCard() {
  return (
    <div>
      <Skeleton variant="rect" height="30vh" style={{ marginBottom: '1rem' }} />
      <Skeleton animation="wave" variant="text" />
      <Skeleton animation="wave" variant="text" width="90%" />
      <Skeleton animation="wave" variant="text" width="80%" />
    </div>
  );
}

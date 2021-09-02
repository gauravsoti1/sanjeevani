import { Typography } from '@material-ui/core';
import React, { useState } from 'react';
import styled from 'styled-components';
import GalleryComponent from '../components/GalleryComponent';
import Header from '../components/Header';
import { useGallery } from '../lib/swr-hooks';

export default function gallery() {
  const { data, isLoading, error } = useGallery();

  if (isLoading) return <Typography>Loading</Typography>;
  if (error) return <Typography>Error</Typography>;

  return (
    <Container>
      <GalleryComponent media={data.media} />
    </Container>
  );
}

const Container = styled.div`
  padding-top: 14vh;
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

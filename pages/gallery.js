import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import styled from "styled-components";
import GalleryComponent from "../components/GalleryComponent";
import Header from "../components/Header";
import { useGallery } from "../lib/swr-hooks";
import PageBreadcrumbs from "../components/PageBreadcrumbs";

export default function gallery() {
  const { data, isLoading, error } = useGallery();

  if (isLoading) return <Typography>Loading</Typography>;
  if (error) return <Typography>Error</Typography>;

  return (
    <Container>
      <BreadcrumbsContainer>
        <PageBreadcrumbs
          links={[
            { label: "Home", href: "/", isCurrentPage: false },
            { label: "Gallery", isCurrentPage: true },
          ]}
        />
      </BreadcrumbsContainer>
      <GalleryComponent media={data.media} />
    </Container>
  );
}

const Container = styled.div`
  padding-top: 8vh;
  height: 85vh;
  ${(props) => props.theme.breakpoints.up("sm")} {
    // padding-top: 10vh;
  }
  ${(props) => props.theme.breakpoints.up("md")} {
    padding-top: 10vh;
    // display: flex;
    // align-items: center;
  }
  ${(props) => props.theme.breakpoints.up("lg")} {
    padding-top: 14vh;
    // min-height: 100vh;
  }
`;

const BreadcrumbsContainer = styled.div`
  padding: 0 4rem;
`;

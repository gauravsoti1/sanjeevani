import React from "react";
import styled from "styled-components";
import Image from "next/image";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

export default function BlogThumbnail({
  className,
  thumbnailUrl,
  title,
  description,
  thumbnailHeight,
  thumbnailWidth,
  onClick,
}) {
  return (
    <Container className={className} onClick={onClick}>
      <CardActionArea>
        <ImageContainer>
          <Image src={thumbnailUrl} layout="fill" objectFit="cover" />
        </ImageContainer>
        <CardContent>
          <Typography noWrap={true} variant="h6" gutterBottom>
            {title}
          </Typography>
          <DescriptionBox fontSize="body2.fontSize" component="div">
            {description}
          </DescriptionBox>
        </CardContent>
      </CardActionArea>
    </Container>
  );
}

const Container = styled(Card)`
  // max-height: 400px;
  overflow: hidden;
  cursor: pointer;
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 30vh;
  position: relative;
`;

const TextBox = styled(Box)`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const DescriptionBox = styled(TextBox)`
  -webkit-line-clamp: 3;
  height: calc(3 * ${(props) => props.theme.typography.body2.lineHeight}rem);
  line-height: ${(props) => props.theme.typography.body2.lineHeight}rem;
`;

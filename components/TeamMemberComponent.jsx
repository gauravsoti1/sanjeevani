import { Card, CardActions, CardContent, Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import Image from "next/image";

export default function TeamMemberComponent({
  name,
  qualifications,
  imageUrl,
  imageWidth,
  imageHeight,
  description,
  onClick,
}) {
  console.log("imageUrl", imageUrl);
  return (
    <Container onClick={onClick}>
      {/* <CardActions> */}
      <ImageContainer>
        <Image src={imageUrl} layout="fill" objectFit="contain" />
      </ImageContainer>
      <CardContent>
        <Typography align="center" variant="h6" component="h2">
          {name}
        </Typography>
        <Typography gutterBottom align="center" color="primary">
          {qualifications}
        </Typography>
        <Typography align="justify" variant="body2" color="textSecondary">
          {description}
        </Typography>
      </CardContent>
      {/* </CardActions> */}
    </Container>
  );
}

const Container = styled(Card)`
  // display: flex;
  // flex-direction: column;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  height: 30vh;
  ${(props) => props.theme.breakpoints.up("md")} {
    height: 20vh;
  }
  ${(props) => props.theme.breakpoints.up("lg")} {
    height: 40vh;
  }
  position: relative;
  background: black;
`;

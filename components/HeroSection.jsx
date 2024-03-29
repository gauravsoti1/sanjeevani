import React from "react";
import styled from "styled-components";
import { Typography } from "@material-ui/core";
import Image from "next/image";
import Section from "./Section";
import heroImage from "../public/heroImage.svg";
import drNarender from "../public/drnarender.jpeg";

const BackgroundShadow = () => [
  <BackgroundShadowEllipseTop key="shadow1" />,
  <BackgroundShadowEllipseBottom key="shadow2" />,
];

export default function HeroSection() {
  return (
    <StyledSection>
      <BackgroundShadow />

      <Container>
        <HeroTextContainer>
          <Typography
            gutterBottom={true}
            variant="h3"
            component="h1"
            color="primary"
          >
            Sanjeevani <PlusText> Plus </PlusText> Hospital
          </Typography>
          <Typography variant="subtitle1" component="h3" color="textSecondary">
            One of the leading specialty orthopedics units running successfully
            for over a decade. Our experienced and dedicated team endeavors to
            render quality healthcare service with a touch of personal
            compassionate care.
          </Typography>
        </HeroTextContainer>
        <HeroImageContainer>
          <Image
            priority={true}
            src={drNarender}
            alt="Dr Narender"
            layout="fill"
            objectFit="contain"
          />
        </HeroImageContainer>
      </Container>
    </StyledSection>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  ${(props) => props.theme.breakpoints.up("sm")} {
    height: 85vh;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  // background: linear-gradient(90deg, rgba(218, 242, 228, 0.5) 0%, #daf2e4 100%);
`;

const HeroTextContainer = styled.div`
  width: 100%;
  text-align: center;
  ${(props) => props.theme.breakpoints.up("sm")} {
    text-align: left;
    flex-basis: 50%;
  }
`;

const HeroImageContainer = styled.div`
  // display: none;
  height: 35vh;
  position: relative;
  ${(props) => props.theme.breakpoints.up("sm")} {
    display: block;
    height: 70%;
    flex-basis: 50%;
  }
`;

const PlusText = styled.span`
  color: red;
`;

const BackgroundShadowEllipseTop = styled.div`
  position: absolute;
  top: 4vh;
  height: 40%;
  ${(props) => props.theme.breakpoints.up("sm")} {
    top: 4vh;
    height: 70%;
  }
  width: 50%;
  left: 45%;
  background: #c1f5d7;
  filter: blur(600px);
`;

const BackgroundShadowEllipseBottom = styled.div`
  position: absolute;
  width: 55%;
  height: 30%;
  top: calc(4vh + 35%);
  ${(props) => props.theme.breakpoints.up("sm")} {
    height: 50%;
    top: calc(4vh + 45%);
  }
  left: 50%;
  background: #c1f5d7;
  filter: blur(800px);
  z-index: -1;
`;

const StyledSection = styled(Section)`
  overflow-x: clip;
  padding-top: 10vh;
  ${(props) => props.theme.breakpoints.up("lg")} {
    padding-top: 15vh;
    overflow-x: inherit;
  }
`;

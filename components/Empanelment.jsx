import React from "react";
import Image from "next/image";
import styled from "styled-components";
import Section from "./Section";
import { Typography } from "@material-ui/core";

const empanelmentData = [
  {
    key: "haryanaGov",
    src: "/empanalment/haryanaGovernmentLogo.png",
    width: "220",
    height: "310",
  },
  {
    key: "ayushmanBharat",
    src: "/empanalment/ayushmanBharatLogo.png",
    width: "316",
    height: "316",
  },
];

const Empanelment = () => {
  return (
    <StyledSection>
      <EmpanelmentContainers>
        <div></div>
        {empanelmentData.map(({ key, width, height, src }) => (
          <ImageContainer>
            <Image
              key={key}
              src={src}
              layout="fill"
              objectFit="contain"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8r8NQDwAFCQGsNA7jBAAAAABJRU5ErkJggg=="
            />
          </ImageContainer>
        ))}
        <div></div>
      </EmpanelmentContainers>
      <Typography align="center" variant="h4">
        We are empaneled with Haryana Government and Ayushman Bharat
      </Typography>
    </StyledSection>
  );
};

const StyledSection = styled(Section)`
  min-height: 45vh;
  ${(props) => props.theme.breakpoints.up("lg")} {
    min-height: 80vh;
  }
`;

const EmpanelmentContainers = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 1fr;
  grid-column-gap: 5%;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 20vh;
  padding-bottom: 16px;
  ${(props) => props.theme.breakpoints.up("lg")} {
    height: 40vh;
    padding-bottom: 48px;
  }
`;

const ImageContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 100%;
`;

export default Empanelment;

import React from "react";

import dynamic from "next/dynamic";
import { Box } from "@material-ui/core";
import styled from "styled-components";
import Image from "next/image";
import MarkdownDisplay from "../MarkdownDisplay";

// const ReactMarkdown = dynamic(
//   () => import('react-markdown').then((module) => module),
//   { ssr: false }
// );
// const remarkGfm = dynamic(() => import('remark-gfm').then((module) => module), {
//   ssr: false,
// });

export default function BlogView({
  content,
  title,
  description,
  imageUrl,
  imageWidth,
  imageHeight,
}) {
  return (
    <Container>
      <Box
        textAlign="center"
        fontSize="h4.fontSize"
        mb="2rem"
        fontWeight="fontWeightBold"
      >
        {title}
      </Box>
      <ImageContainer>
        <Image
          width={imageWidth}
          height={imageHeight}
          src={imageUrl}
          layout="responsive"
        />
      </ImageContainer>
      <MarkdownDisplay content={content} />
    </Container>
  );
}

const Container = styled.div`
  padding: 0 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ImageContainer = styled.div`
  width: 70%;
  margin: 5vh auto;
`;

import React from 'react';
import { getTeamMemberPath } from '../../lib/swr-hooks';
import TeamMember from '../../models/TeamMember';
import fetchApi from '../../lib/fetchApi';
import Seo from '../../components/Seo';
import styled from 'styled-components';
import Image from 'next/image';
import MarkdownDisplay from '../../components/MarkdownDisplay';
import { Box, Typography } from '@material-ui/core';
import StyledTypography from '../../components/StyledTypography';

export default function TeamDetail({ teamMember }) {
  console.log(teamMember);
  const { imageUrl, imageWidth, imageHeight } = teamMember.media[0];

  return (
    <Container>
      <Seo
        title={`Sanjeevani Plus Doctor: ${teamMember.name}`}
        shareImage={imageUrl}
        description={teamMember.description}
      />
      <StyledTypography gutterBottom variant="h4" color="blue" align="center">
        Doctor's Profile
      </StyledTypography>
      <DoctorInformationContainer>
        <div>
          <ImageContainer>
            <Image
              src={imageUrl}
              height={imageHeight}
              width={imageWidth}
              // layout="fill"
              objectFit="contain"
            />
          </ImageContainer>
          <Typography align="center" color="primary">
            {' '}
            {teamMember.qualifications}
          </Typography>
        </div>
        <div>
          <MarkdownDisplay content={teamMember.about} />
        </div>
      </DoctorInformationContainer>
    </Container>
  );
}

export async function getServerSideProps(context) {
  const teamMember = await fetchApi(getTeamMemberPath(context.query.id));
  return {
    props: { teamMember: TeamMember(teamMember) }, // will be passed to the page component as props
  };
}

const PageContainer = styled.div``;

const Container = styled.div`
  padding: 10vh 5% 5vh 5%;

  ${(props) => props.theme.breakpoints.up('lg')} {
    padding-top: 18vh;
  }
`;

const ImageContainer = styled.div`
  // height: 50vh;
  position: relative;
  // background: black;
  text-align: center;
`;

const DoctorInformationContainer = styled.div`
  ${(props) => props.theme.breakpoints.up('md')} {
    display: grid;
    grid-template-columns: 2fr 6fr;
    grid-column-gap: 5%;
  }
  padding-top: 2rem;
`;

import React from 'react';
import { getTeamMemberPath } from '../../lib/swr-hooks';
import TeamMember from '../../models/TeamMember';
import fetchApi from '../../lib/fetchApi';
import Seo from '../../components/Seo';
import styled from 'styled-components';
import Image from 'next/image';
import MarkdownDisplay from '../../components/MarkdownDisplay';
import { Typography } from '@material-ui/core';

export default function TeamDetail({ teamMember }) {
  console.log(teamMember);
  const { imageUrl, imageWidth, imageHeight } = teamMember.media[0];

  return (
    <div>
      <Seo
        title={`Sanjeevani Plus Doctor: ${teamMember.name}`}
        shareImage={imageUrl}
        description={teamMember.description}
      />
      <Container>
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
      </Container>
    </div>
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
  display: grid;
  grid-template-columns: 2fr 6fr;
  // padding-top: 18vh;
  grid-column-gap: 5%;
  padding: 18vh 5% 5vh 5%;
`;

const ImageContainer = styled.div`
  // height: 50vh;
  position: relative;
  // background: black;
  text-align: center;
`;

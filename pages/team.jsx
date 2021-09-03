import { Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import TeamMemberComponent from '../components/TeamMemberComponent';
import { useTeamMembers } from '../lib/swr-hooks';

export default function team() {
  const { team, isLoading, isError } = useTeamMembers();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;
  return (
    <Container>
      <Typography align="center" variant="h3" component="h1" color="primary">
        Our Team
      </Typography>
      <TeamContainer>
        {team.map((teamMember) => (
          <TeamMemberComponent
            name={teamMember.name}
            qualifications={teamMember.qualifications}
            imageUrl={teamMember.media[0].imageUrl}
            imageWidth={teamMember.media[0].imageWidth}
            imageHeight={teamMember.media[0].imageHeight}
            description={teamMember.description}
          />
        ))}
      </TeamContainer>
    </Container>
  );
}

const Container = styled.div`
  padding-top: 15vh;
`;

const TeamContainer = styled.div`
  margin-top: 5vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5%;
  grid-row-gap: 5vh;
`;

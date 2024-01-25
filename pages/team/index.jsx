import { Typography } from "@material-ui/core";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import TeamMemberComponent from "../../components/TeamMemberComponent";
import { useTeamMembers } from "../../lib/swr-hooks";
import TeamLoadingCard from "./TeamLoadingCard";
import PageBreadcrumbs from "../../components/PageBreadcrumbs";

export default function team() {
  const { team, isLoading, isError } = useTeamMembers();
  const router = useRouter();

  if (isError) return <div>Error...</div>;

  function onClick(path) {
    router.push(path);
  }

  return (
    <Container>
      <PageBreadcrumbs
        links={[
          { label: "Home", href: "/", isCurrentPage: false },
          { label: "Team", isCurrentPage: true },
        ]}
      />
      <Typography align="center" variant="h3" component="h1" color="primary">
        Our Team
      </Typography>
      <TeamContainer>
        {isLoading ? (
          <>
            <TeamLoadingCard />
            <TeamLoadingCard />
            <TeamLoadingCard />
          </>
        ) : (
          team.map((teamMember) => (
            <TeamMemberComponent
              name={teamMember.name}
              onClick={onClick.bind(null, `/team/${teamMember.id}`)}
              qualifications={teamMember.qualifications}
              imageUrl={teamMember.media[0].imageUrl}
              imageWidth={teamMember.media[0].imageWidth}
              imageHeight={teamMember.media[0].imageHeight}
              description={teamMember.description}
            />
          ))
        )}
      </TeamContainer>
    </Container>
  );
}

const Container = styled.div`
  padding: 15vh 2rem 2rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const TeamContainer = styled.div`
  margin-top: 5vh;
  display: grid;
  grid-template-columns: 1fr;
  padding: 0 2rem;
  ${(props) => props.theme.breakpoints.up("sm")} {
    grid-template-columns: 1fr 1fr;
  }
  ${(props) => props.theme.breakpoints.up("md")} {
    grid-template-columns: 1fr 1fr 1fr;
  }
  ${(props) => props.theme.breakpoints.up("lg")} {
    padding: 0;
  }
  grid-column-gap: 5%;
  grid-row-gap: 5vh;
`;

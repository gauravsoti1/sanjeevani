import React from "react";
import { useBlogs } from "../../lib/swr-hooks";
import styled from "styled-components";
import BlogThumbnail from "../../components/Blog/BlogThumbnail";
import { useRouter } from "next/router";
import PageBreadcrumbs from "../../components/PageBreadcrumbs";
import TeamLoadingCard from "../team/TeamLoadingCard";

export default function BlogList() {
  // const [session, loading] = useSession();
  const router = useRouter();
  const { blogs = [], isLoading } = useBlogs();

  function onClick(path) {
    router.push(path);
  }

  return (
    <Container>
      <PageBreadcrumbs
        links={[
          { label: "Home", href: "/", isCurrentPage: false },
          { label: "Blog", isCurrentPage: true },
        ]}
      />
      <BlogsContainer>
        {isLoading ? (
          <>
            <TeamLoadingCard />
            <TeamLoadingCard />
            <TeamLoadingCard />
          </>
        ) : (
          blogs.map((blog) => (
            // <Link href={}>
            <BlogThumbnail
              onClick={onClick.bind(
                null,
                `/blogs/${encodeURIComponent(blog.slug)}`
              )}
              {...blog}
            />
            // </Link>
          ))
        )}
      </BlogsContainer>
    </Container>
  );
}

const Container = styled.div`
  padding: 2rem;
  padding-top: 14vh;
  max-width: 1200px;
  margin: 0 auto;
`;

const BlogsContainer = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr;

  ${(props) => props.theme.breakpoints.up("sm")} {
    grid-template-columns: 1fr 1fr;
  }

  ${(props) => props.theme.breakpoints.up("md")} {
    grid-template-columns: 1fr 1fr 1fr;
  }

  grid-column-gap: 5%;
  grid-row-gap: 5vh;
`;

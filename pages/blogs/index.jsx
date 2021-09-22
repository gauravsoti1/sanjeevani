import React from 'react';
// import { signIn, useSession } from 'next-auth/client';
import { useBlogs } from '../../lib/swr-hooks';
// import BlogView from '../components/Blog/BlogView';
import styled from 'styled-components';
import BlogThumbnail from '../../components/Blog/BlogThumbnail';
import { Typography } from '@material-ui/core';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function BlogList() {
  // const [session, loading] = useSession();
  const router = useRouter();
  const { blogs = [], isLoading } = useBlogs();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  function onClick(path) {
    router.push(path);
  }

  return (
    <Container>
      <BlogsContainer>
        {blogs.map((blog) => (
          // <Link href={}>
          <BlogThumbnail
            onClick={onClick.bind(
              null,
              `/blogs/${encodeURIComponent(blog.slug)}`
            )}
            {...blog}
          />
          // </Link>
        ))}
      </BlogsContainer>
    </Container>
  );
}

const Container = styled.div`
  padding: 2rem;
  padding-top: 14vh;
`;

const BlogsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  ${(props) => props.theme.breakpoints.up('sm')} {
    grid-template-columns: 1fr 1fr;
  }

  ${(props) => props.theme.breakpoints.up('md')} {
    grid-template-columns: 1fr 1fr 1fr;
  }

  grid-column-gap: 5%;
  grid-row-gap: 5vh;
`;

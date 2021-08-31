import React from 'react';
import { signIn, useSession } from 'next-auth/client';
import { useBlogs } from '../lib/swr-hooks';
import BlogView from '../components/Blog/BlogView';
import styled from 'styled-components';
import BlogThumbnail from '../components/Blog/BlogThumbnail';
import { Typography } from '@material-ui/core';

export function BlogListContent() {}

export default function BlogList() {
  // const [session, loading] = useSession();

  const { blogs = [], isLoading } = useBlogs();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      {blogs.map((blog) => (
        <div>
          <Typography variant="h3" align="center">
            {blog.title}
          </Typography>
          <BlogView {...blog} />
          <hr />
          {/* <BlogThumbnail
            title={blog.title}
            thumbnailUrl={blog?.image?.formats?.thumbnail?.url}
            description={blog.description}
          /> */}
        </div>
      ))}
    </Container>
  );
}

const Container = styled.div`
  padding: 2rem;
  padding-top: 10vh;
`;

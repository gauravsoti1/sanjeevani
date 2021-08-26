import React from 'react';
import { signIn, useSession } from 'next-auth/client';
import { useBlogs } from '../lib/swr-hooks';
import BlogView from '../components/Blog/BlogView';
import styled from 'styled-components';

export function BlogListContent() {
  const { blogs, isLoading } = useBlogs();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return blogs.map((blog) => (
    <div>
      <h1> {blog.title}</h1>
      <BlogView {...blog} />
    </div>
  ));
}

export default function BlogList() {
  const [session, loading] = useSession();

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      {session ? (
        <BlogListContent />
      ) : (
        <p>
          <p>You are not permitted to see this page.</p>
          <button onClick={signIn}>Sign in</button>
        </p>
      )}
    </Container>
  );
}

const Container = styled.div`
  padding: 2rem;
`;

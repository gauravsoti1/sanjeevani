import React from 'react';
import { signIn, useSession } from 'next-auth/client';
import { useBlogs } from '../lib/swr-hooks';

export function BlogListContent() {
  const { blogs, isLoading } = useBlogs();

  console.log(blogs);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return blogs.map((blog) => <h1> {blog.title}</h1>);
}

export default function BlogList() {
  const [session, loading] = useSession();

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {session ? (
        <BlogListContent />
      ) : (
        <p>
          <p>You are not permitted to see this page.</p>
          <button onClick={signIn}>Sign in</button>
        </p>
      )}
    </>
  );
}

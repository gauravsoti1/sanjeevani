import React from 'react';
import BlogView from '../../components/Blog/BlogView';
import { useBlog } from '../../lib/swr-hooks';
import { useRouter } from 'next/router';

export default function BlogDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const { blog = {}, isLoading } = useBlog(slug);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <BlogView
      content={blog.content}
      title={blog.title}
      description={blog.description}
    />
  );
}

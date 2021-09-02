import React from 'react';
import BlogView from '../../components/Blog/BlogView';
import { getBlogPathname, useBlog } from '../../lib/swr-hooks';
import { useRouter } from 'next/router';
import Head from 'next/head';
import fetchApi from '../../lib/fetchApi';
import Blog from '../../models/Blog';
import Seo from '../../components/Seo';

export default function BlogDetail({ blog }) {
  // const router = useRouter();
  // const { slug } = router.query;

  // const { blog = {}, isLoading } = useBlog(slug);

  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }

  return (
    <div>
      <Seo
        title={blog.title}
        shareImage={blog.imageUrl}
        description={blog.description}
        keywords={blog.keywords}
      />
      <Head>
        <title>{blog.title}</title>
        <meta name="description" content={blog.description} />
      </Head>
      <BlogView {...blog} />,
    </div>
  );
}

export async function getServerSideProps(context) {
  const blog = await fetchApi(getBlogPathname(context.query.slug));
  return {
    props: { blog: Blog(blog) }, // will be passed to the page component as props
  };
}

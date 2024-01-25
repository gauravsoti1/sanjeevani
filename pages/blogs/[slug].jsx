import React from "react";
import BlogView from "../../components/Blog/BlogView";
import { getBlogPathname, useBlog } from "../../lib/swr-hooks";
import { useRouter } from "next/router";
import Head from "next/head";
import fetchApi from "../../lib/fetchApi";
import Blog from "../../models/Blog";
import Seo from "../../components/Seo";
import styled from "styled-components";
import PageBreadcrumbs from "../../components/PageBreadcrumbs";

export default function BlogDetail({ blog }) {
  // const router = useRouter();
  // const { slug } = router.query;

  // const { blog = {}, isLoading } = useBlog(slug);

  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }

  return (
    <Container>
      <Seo
        title={blog.title}
        shareImage={blog.imageUrl}
        description={blog.description}
        keywords={blog.keywords}
      />
      <BreadcrumbsContainer>
        <PageBreadcrumbs
          links={[
            { label: "Home", href: "/", isCurrentPage: false },
            { label: "Blog", href: "/blogs", isCurrentPage: false },
            {
              label: blog.title,
              href: `/blogs/${blog.slug}`,
              isCurrentPage: true,
            },
          ]}
        />
      </BreadcrumbsContainer>
      <BlogView {...blog} />,
    </Container>
  );
}

export async function getServerSideProps(context) {
  const blog = await fetchApi(getBlogPathname(context.query.slug));
  return {
    props: { blog: Blog(blog) }, // will be passed to the page component as props
  };
}

const Container = styled.div`
  padding-top: 18vh;
`;

const BreadcrumbsContainer = styled.div`
  margin: 0rem 0rem 2rem 3rem;
`;

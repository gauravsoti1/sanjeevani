import useSWR from 'swr';
import Blog from '../models/Blog';
import { isEmptyObject } from './helper';

export function getStrapiURL(path = '') {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'
  }${path}`;
}

function fetcher(url) {
  return window.fetch(url).then((res) => res.json());
}

export function useBlogs() {
  const url = getStrapiURL('/articles');
  const { data = [], error } = useSWR(url, fetcher);

  return {
    blogs: data.map((blog) => Blog(blog)),
    isLoading: !error && !data,
    isError: error,
  };
}

export function getBlogPathname(slug) {
  return `/articles/${slug}`;
}

export function useBlog(slug) {
  const url = getStrapiURL(getBlogPathname(slug));

  const { data, error } = useSWR(url, fetcher);
  const isDataPresent = !isEmptyObject(data);
  return {
    blog: isDataPresent ? Blog(data) : data,
    isLoading: !error && !isDataPresent,
    isError: error,
  };
}

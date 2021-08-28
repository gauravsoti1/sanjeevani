import useSWR from 'swr';

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
  const { data, error } = useSWR(url, fetcher);

  return {
    blogs: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function useBlog(id) {
  return useSWR(`/api/get-blog?id=${id}`, fetcher);
}

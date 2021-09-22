import useSWR from 'swr';
import Blog from '../models/Blog';
import { Image, Thumbnail } from '../models/Media';
import TeamMember from '../models/TeamMember';
import { isEmptyObject } from './helper';

export function getStrapiURL(path = '') {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'
  }${path}`;
}

function fetcher(url) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      window
        .fetch(url)
        .then((res) => res.json())
        .then((data) => resolve(data));
    }, 2000);
  });

  return promise;
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

function parseGalleryData(data) {
  const { seo, media } = data;
  console.log(data);
  return {
    seo,
    media: media.map((m) => ({
      ...Image(m),
      // ...Thumbnail(m.image),
    })),
  };
}

export function useGallery() {
  const url = getStrapiURL('/gallery');

  const { data, error } = useSWR(url, fetcher);
  const isDataPresent = !isEmptyObject(data);
  return {
    data: isDataPresent ? parseGalleryData(data) : data,
    isLoading: !error && !isDataPresent,
    isError: error,
  };
}

export function useTeamMembers() {
  const url = getStrapiURL('/team-members');
  const { data = [], error } = useSWR(url, fetcher);

  return {
    team: data.map((teamMember) => TeamMember(teamMember)),
    isLoading: !error && data.length === 0,
    isError: error,
  };
}

export function getTeamMemberPath(id) {
  return `/team-members/${id}`;
}

export function useTeamMember(id) {
  const url = getStrapiURL(`/team-members/${id}`);
  const { data = [], error } = useSWR(url, fetcher);
  const isDataPresent = !isEmptyObject(data);
  return {
    blog: isDataPresent ? TeamMember(data) : data,
    isLoading: !error && !isDataPresent,
    isError: error,
  };
}

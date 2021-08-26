import useSWR from 'swr'

function fetcher(url) {
  return window.fetch(url).then((res) => res.json())
}

export function useBlogs() {
  const { data, error } = useSWR(`/api/get-blogs`, fetcher)

  return {
    blogs: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export function useBlog(id) {
  return useSWR(`/api/get-blog?id=${id}`, fetcher)
}

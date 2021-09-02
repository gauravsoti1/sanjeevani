import { Image, Thumbnail } from './Media';

export default function Blog(blogData, mediaDomain) {
  return {
    slug: blogData.slug,
    title: blogData.title,
    content: blogData.content,
    description: blogData.description,
    ...Image(blogData.image),
    ...Thumbnail(blogData.image),
  };
}

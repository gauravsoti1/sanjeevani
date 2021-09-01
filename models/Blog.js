function BlogThumbnail(blog) {
  const image = blog.image.formats.small;

  return {
    thumbnailUrl: process.env.NEXT_PUBLIC_CMS_MEDIA_URL + image.url,
    thumbnailWidth: image.width,
    thumbnailHeight: image.height,
  };
}

function BlogImage(blog) {
  const image = blog.image;

  return {
    imageUrl: process.env.NEXT_PUBLIC_CMS_MEDIA_URL + image.url,
    imageWidth: image.width,
    imageHeight: image.height,
  };
}

export default function Blog(blogData, mediaDomain) {
  return {
    slug: blogData.slug,
    title: blogData.title,
    content: blogData.content,
    description: blogData.description,
    ...BlogThumbnail(blogData, mediaDomain),
    ...BlogImage(blogData, mediaDomain),
  };
}

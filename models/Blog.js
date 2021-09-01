function BlogThumbnail(blog) {
  const image = blog.image.formats.small;

  return {
    thumbnailUrl: image.url,
    thumbnailWidth: image.width,
    thumbnailHeight: image.height,
  };
}

function BlogImage(blog) {
  const image = blog.image;

  return {
    imageUrl: image.url,
    imageWidth: image.width,
    imageHeight: image.height,
  };
}

export default function Blog(blogData) {
  return {
    slug: blogData.slug,
    title: blogData.title,
    content: blogData.content,
    description: blogData.description,
    ...BlogThumbnail(blogData),
    ...BlogImage(blogData),
  };
}

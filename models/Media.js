export function Image(image) {
  return {
    imageUrl: process.env.NEXT_PUBLIC_CMS_MEDIA_URL + image.url,
    imageWidth: image.width,
    imageHeight: image.height,
    alt: image.alternativeText,
  };
}

export function Thumbnail(image) {
  const thumbnail = image.formats.small;

  return {
    thumbnailUrl: process.env.NEXT_PUBLIC_CMS_MEDIA_URL + thumbnail.url,
    thumbnailWidth: thumbnail.width,
    thumbnailHeight: thumbnail.height,
    alt: thumbnail.alternativeText,
  };
}

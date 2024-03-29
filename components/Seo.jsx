import Head from 'next/head';

const Seo = ({
  title,
  description,
  url,
  shareImage,
  keywords,
  preventIndexing,
}) => {
  // const { title, description, url, shareImage, keywords, preventIndexing } =
  //   useContext(SeoContext);
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} key="description" />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta
        name="twitter:card"
        content="summary_large_image"
        key="twitter:card"
      />
      {url && <meta property="og:url" content={url} key="og:url" />}
      <meta property="og:title" content={title} key="og:title" />
      <meta
        property="og:description"
        content={description}
        key="og:description"
      />
      {shareImage && (
        <meta property="og:image" content={shareImage} key="og:image" />
      )}
      {/* <link rel="canonical" href={url} /> */}
      {/* {preventIndexing && (
        <>
          <meta name="robots" content="noindex"></meta>
          <meta name="googlebot" content="noindex"></meta>
        </>
      )} */}
    </Head>
  );
};

export default Seo;

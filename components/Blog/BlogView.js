import React from 'react';
// import ReactMarkdown from 'react-markdown';
// import remarkGfm from 'remark-gfm';
import dynamic from 'next/dynamic';
import { Typography } from '@material-ui/core';

const ReactMarkdown = dynamic(
  () => import('react-markdown').then((module) => module),
  { ssr: false }
);
const remarkGfm = dynamic(() => import('remark-gfm').then((module) => module), {
  ssr: false,
});

export default function BlogView({ content, title, description }) {
  return (
    <div>
      <Typography variant="h1" component="h4">
        {title}
      </Typography>
      <ReactMarkdown
        skipHtml={false}
        remarkPlugins={[remarkGfm]}
        // skipHtml={false}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

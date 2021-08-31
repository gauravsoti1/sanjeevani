import React from 'react';
// import ReactMarkdown from 'react-markdown';
// import remarkGfm from 'remark-gfm';
import dynamic from 'next/dynamic';

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
      <ReactMarkdown remarkPlugins={[remarkGfm]} skipHtml={false}>
        {content}
      </ReactMarkdown>
    </div>
  );
}

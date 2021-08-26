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
    <div style={{ border: '1px solid grey' }}>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
}

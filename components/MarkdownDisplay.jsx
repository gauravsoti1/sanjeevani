import React from 'react';
import remarkGfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';

export default function MarkdownDisplay({ content }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      // skipHtml={false}
    >
      {content}
    </ReactMarkdown>
  );
}

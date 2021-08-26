import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import React from 'react';
import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';

const toolbarOptions = [
  'bold',
  'code',
  'italic',
  'heading',
  '|',
  'quote',
  'horizontal-rule',
  'clean-block',
  'side-by-side',
  'preview',
  'table',
  'link',
  'ordered-list',
  'fullscreen',
  'guide',
];

export default function Blog() {
  const textareaRef = useRef();
  const [instance, setInstance] = useState();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [submitting, setSubmitting] = useState(false);

  async function submitHandler(e) {
    setSubmitting(true);
    e.preventDefault();
    try {
      const res = await fetch('/api/create-blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          content,
        }),
      });
      setSubmitting(false);
      const json = await res.json();
      console.log('json = ', json);
      if (!res.ok) throw Error(json.message);
      Router.push('/blogList');
    } catch (e) {
      throw Error(e.message);
    }
  }

  function onChange() {
    console.log(instance?.value());
  }

  useEffect(() => {
    if (textareaRef?.current && !instance) {
      const SimpleMDE = require('simplemde');
      var simplemde = new SimpleMDE({
        element: textareaRef.current,
        toolbar: toolbarOptions,
      });
      simplemde.value('Initial text');
      setInstance(simplemde);
      simplemde.codemirror.on('change', () => {
        console.log(simplemde.value());
        setContent(simplemde.value());
      });
    }
  }, [textareaRef?.current]);

  return (
    <form onSubmit={submitHandler}>
      <TextField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea ref={textareaRef} />
      <Button disabled={submitting} type="submit">
        {submitting ? 'Creating ...' : 'Create'}
      </Button>
    </form>
  );
}

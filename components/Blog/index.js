import React from 'react';
import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';

export default function Blog() {
  const textareaRef = useRef();
  const [instance, setInstance] = useState();
  const [value, setValue] = useState('');

  function onChange() {
    console.log(instance?.value());
  }

  useEffect(() => {
    if (textareaRef?.current && !instance) {
      const SimpleMDE = require('simplemde');
      var simplemde = new SimpleMDE({
        element: textareaRef.current,
        toolbar: [
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
        ],
      });
      simplemde.value('Initial text');
      setInstance(simplemde);
      simplemde.codemirror.on('change', () => {
        console.log(simplemde.value());
        setValue(simplemde.value());
      });
    }
  }, [textareaRef?.current]);

  return (
    <div>
      <textarea ref={textareaRef} />
    </div>
  );
}

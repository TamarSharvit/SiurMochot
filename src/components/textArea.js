import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

 const TextArea=(props)=> {
  return <TextareaAutosize aria-label="minimum height" rowsMin={3} placeholder={props.text} />;
}

export default TextArea;
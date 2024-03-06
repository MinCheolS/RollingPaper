import React from 'react';
import PropTypes from 'prop-types';
import 'react-quill/dist/quill.snow.css';
import { StyledQuillEditor } from '../../styles/RollingToMsgPage/TextEditor.style';

function TextEditor({ quillValue, onChange }) {
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image'],
      [{ align: [] }, { color: [] }, { background: [] }],
      ['clean'],
    ],
  };

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'align',
    'color',
    'background',
  ];

  const onQuillChangeHandle = (content) => {
    onChange(content);
  };

  return (
    <StyledQuillEditor
      theme="snow"
      modules={modules}
      formats={formats}
      value={quillValue || ''}
      onChange={onQuillChangeHandle}
    />
  );
}

TextEditor.propTypes = {
  quillValue: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextEditor;

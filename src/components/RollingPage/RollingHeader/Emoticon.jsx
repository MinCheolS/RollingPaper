import React from 'react';
import PropTypes from 'prop-types';
import {
  EmoticonFrameDiv,
  EmoticonSpan,
} from '../../../styles/RollingPage/RollingHeader.style';

export default function Emoticon({ emoticon, count }) {
  return (
    <EmoticonFrameDiv>
      <EmoticonSpan>
        <span>{emoticon}</span>
        {count}
      </EmoticonSpan>
    </EmoticonFrameDiv>
  );
}

Emoticon.propTypes = {
  emoticon: PropTypes.string,
  count: PropTypes.number,
};

Emoticon.defaultProps = {
  emoticon: '',
  count: 0,
};

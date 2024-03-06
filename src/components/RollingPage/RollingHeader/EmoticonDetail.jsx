import React from 'react';
import { PropTypes } from 'prop-types';
import Emoticon from './Emoticon';
// import emojiList from '../../../constants/EmojiList';
import {
  EmoticonDetaiDiv,
  EmoticonsDiv,
} from '../../../styles/RollingPage/RollingHeader.style';

export default function EmoticonDetail({ isVisible, emojilist }) {
  return (
    <EmoticonDetaiDiv $isVisible={isVisible}>
      <EmoticonsDiv>
        {emojilist.map((emoji) => (
          <Emoticon key={emoji.id} emoticon={emoji.emoji} count={emoji.count} />
        ))}
      </EmoticonsDiv>
    </EmoticonDetaiDiv>
  );
}

EmoticonDetail.propTypes = {
  isVisible: PropTypes.bool,
  emojilist: PropTypes.arrayOf(
    PropTypes.shape({
      count: PropTypes.number,
      emoji: PropTypes.string,
      id: PropTypes.number,
    }),
  ),
};

EmoticonDetail.defaultProps = {
  isVisible: false,
  emojilist: [],
};

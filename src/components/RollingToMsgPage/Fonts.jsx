import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Select from './Select';
import { fontsList } from '../../utils/SelectList';
import { FontsContentDiv } from '../../styles/RollingToMsgPage/Fonts.style';

const Fonts = forwardRef(
  (
    {
      isOpenFont,
      setIsOpenFont,
      isOpenRelationship,
      fontpValue,
      onFontValueHandle,
    },
    ref,
  ) => {
    return (
      <FontsContentDiv $isOpen={(isOpenRelationship, isOpenFont)} ref={ref}>
        <span>폰트 선택</span>
        <Select
          SelectList={fontsList}
          isOpen={isOpenFont}
          setIsOpen={setIsOpenFont}
          value={fontpValue}
          onChange={onFontValueHandle}
        />
      </FontsContentDiv>
    );
  },
);

Fonts.propTypes = {
  isOpenFont: PropTypes.bool.isRequired,
  setIsOpenFont: PropTypes.func.isRequired,
  isOpenRelationship: PropTypes.bool.isRequired,
  fontpValue: PropTypes.string.isRequired,
  onFontValueHandle: PropTypes.func.isRequired,
};

export default Fonts;

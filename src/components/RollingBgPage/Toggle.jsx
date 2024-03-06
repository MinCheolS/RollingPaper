import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  SelectTxt,
  SubTxt,
  TextWrapper,
  ToggleButton,
  ToggleWrapper,
  TotalWrapper,
} from '../../styles/RollingToBgPage/Toggle.style';

function Toggle({ onToggle, toggleValue }) {
  const [selected, setSelected] = useState(toggleValue);

  const onClickHandle = (value) => {
    setSelected(value);
    onToggle(value);
  };

  return (
    <TotalWrapper>
      <TextWrapper>
        <SelectTxt>배경화면을 선택해 주세요.</SelectTxt>
        <SubTxt>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</SubTxt>
      </TextWrapper>
      <ToggleWrapper>
        <ToggleButton
          selected={selected === 'color'}
          onClick={() => onClickHandle('color')}
        >
          컬러
        </ToggleButton>
        <ToggleButton
          selected={selected === 'img'}
          onClick={() => onClickHandle('img')}
        >
          이미지
        </ToggleButton>
      </ToggleWrapper>
    </TotalWrapper>
  );
}

Toggle.propTypes = {
  onToggle: PropTypes.func.isRequired,
  toggleValue: PropTypes.string,
};

Toggle.defaultProps = {
  toggleValue: '',
};

export default Toggle;

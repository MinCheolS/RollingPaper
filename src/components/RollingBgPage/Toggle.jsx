import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

const TotalWrapper = styled.div`
  width: 100%;
  margin-bottom: 45px;
  @media (min-width: 360px) and (max-width: 767px) {
    margin-bottom: 28px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 100%;
  margin-bottom: 24px;
  font-family: Pretendard;
`;

const SelectTxt = styled.h2`
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  margin-bottom: 8px;
  @media (min-width: 360px) and (max-width: 768px) {
    margin-bottom: 4px;
  }
`;

const SubTxt = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
`;

const ToggleWrapper = styled.div`
  display: flex;
  width: 244px;
  height: 40px;
  border-radius: 6px;
  background-color: #f6f6f6;
`;

const ToggleButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding: 10px;
  font-family: Pretendard;
  font-weight: ${(props) => (props.selected ? '700' : '400')};
  font-size: 16px;
  border-radius: 6px;
  border: 2px solid ${(props) => (props.selected ? '#9935ff' : '#f6f6f6')};
  color: ${(props) => (props.selected ? '#861dee' : '#000')};
  background-color: ${(props) => (props.selected ? '#fff' : '#f6f6f6')};
  cursor: pointer;
`;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SelectedImg from '../../assets/images/selectedBgImg.png';

function BgImg({ color, onSelectColor, isSelected, onSelectedColor }) {
  const onClickColorHandle = (value) => {
    onSelectColor(value);
    onSelectedColor(value);
  };

  return (
    <BgImgWrapper color={color} onClick={() => onClickColorHandle(color)}>
      {isSelected && (
        <SelectedLayer>
          <img src={SelectedImg} alt="selectIcon" />
        </SelectedLayer>
      )}
    </BgImgWrapper>
  );
}

BgImg.propTypes = {
  color: PropTypes.string,
  onSelectColor: PropTypes.func,
  isSelected: PropTypes.bool,
  onSelectedColor: PropTypes.func,
};

BgImg.defaultProps = {
  color: '',
  onSelectColor: () => {},
  isSelected: false,
  onSelectedColor: () => {},
};

export default BgImg;

const BgImgWrapper = styled.div`
  position: relative;
  width: 168px;
  height: 168px;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background-color: ${({ color }) => color};
  @media (min-width: 360px) and (max-width: 767px) {
    width: 154px;
    height: 154px;
  }
`;

const SelectedLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  > img {
    width: 44px;
    height: 44px;
  }
`;

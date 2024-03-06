import React from 'react';
import PropTypes from 'prop-types';
import SelectedImg from '../../assets/images/selectedBgImg.png';
import {
  BgImgWrapper,
  SelectedLayer,
} from '../../styles/RollingToBgPage/BgColor.style';

function BgColor({ color, onSelectColor, isSelected, onSelectedColor }) {
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

BgColor.propTypes = {
  color: PropTypes.string,
  onSelectColor: PropTypes.func,
  isSelected: PropTypes.bool,
  onSelectedColor: PropTypes.func,
};

BgColor.defaultProps = {
  color: '',
  onSelectColor: () => {},
  isSelected: false,
  onSelectedColor: () => {},
};

export default BgColor;

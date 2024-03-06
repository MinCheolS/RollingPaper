import React from 'react';
import PropTypes from 'prop-types';
import SelectedImg from '../../assets/images/selectedBgImg.png';
import {
  BgImgWrapper,
  BgItemWrapper,
  SelectedLayer,
} from '../../styles/RollingToBgPage/BgImg.style';

function BgImg({ img, onSelectImg, isSelected, onSelectedImg }) {
  const onClickImgHandle = (value) => {
    onSelectImg(value);
    onSelectedImg(value);
  };
  return (
    <BgItemWrapper onClick={() => onClickImgHandle(img)}>
      <BgImgWrapper src={img} alt={img} />
      {isSelected && (
        <SelectedLayer>
          <img src={SelectedImg} alt="selectIcon" />
        </SelectedLayer>
      )}
    </BgItemWrapper>
  );
}

BgImg.propTypes = {
  img: PropTypes.string,
  onSelectImg: PropTypes.func,
  isSelected: PropTypes.bool,
  onSelectedImg: PropTypes.func,
};

BgImg.defaultProps = {
  img: '',
  onSelectImg: () => {},
  isSelected: false,
  onSelectedImg: () => {},
};

export default BgImg;

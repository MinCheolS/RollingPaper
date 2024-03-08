import React, { useState, useEffect } from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import PropTypes from 'prop-types';
import SelectedImg from '../../assets/images/selectedBgImg.png';
import {
  BgImgWrapper,
  BgItemWrapper,
  SelectedLayer,
  BgImgWrapperSkeleton,
} from '../../styles/RollingToBgPage/BgImg.style';

function BgImg({ img, onSelectImg, isSelected, onSelectedImg }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const image = new Image();
    image.src = img;
    image.onload = () => setLoading(false);

    return () => {
      image.onload = null;
    };
  }, [img]);

  const onClickImgHandle = (value) => {
    onSelectImg(value);
    onSelectedImg(value);
  };

  return (
    <BgItemWrapper onClick={() => onClickImgHandle(img)}>
      {loading ? (
        <BgImgWrapperSkeleton height={168} borderRadius={16} />
      ) : (
        <BgImgWrapper src={img} alt={img} />
      )}
      {isSelected && !loading && (
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

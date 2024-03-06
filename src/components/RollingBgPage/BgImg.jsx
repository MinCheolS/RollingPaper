import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SelectedImg from '../../assets/images/selectedBgImg.png';

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

const BgItemWrapper = styled.div`
  position: relative;
  width: 168px;
  height: 168px;
  @media (min-width: 360px) and (max-width: 767px) {
    width: 154px;
    height: 154px;
  }
`;

const BgImgWrapper = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.08);
`;

const SelectedLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  > img {
    width: 44px;
    height: 44px;
  }
`;

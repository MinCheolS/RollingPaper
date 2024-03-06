import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BgImg from './BgImg';
import BgColor from './BgColor';

function BgList({ images, onSelectColor, onSelectImg, selectedColor }) {
  const [selectedImg, setSelectedImg] = useState('');
  const [userSelectedColor, setUserSelectedColor] = useState(selectedColor);

  const onSelectedImgHandle = (img) => {
    setSelectedImg(img);
  };

  const onSelectedColorHandle = (color) => {
    setUserSelectedColor(color);
  };
  return (
    <BgListWrapper>
      {images.map((image) =>
        image.startsWith('http') ? (
          <BgImg
            key={image}
            img={image}
            onSelectImg={onSelectImg}
            isSelected={selectedImg === image}
            onSelectedImg={onSelectedImgHandle}
          />
        ) : (
          <BgColor
            key={image}
            color={image}
            onSelectColor={onSelectColor}
            isSelected={userSelectedColor === image}
            onSelectedColor={onSelectedColorHandle}
          />
        ),
      )}
    </BgListWrapper>
  );
}

BgList.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
  onSelectColor: PropTypes.func,
  onSelectImg: PropTypes.func,
  selectedColor: PropTypes.string,
};

BgList.defaultProps = {
  images: [],
  onSelectColor: () => {},
  onSelectImg: () => {},
  selectedColor: 'beige',
};

export default BgList;

const BgListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 69px;
  @media (min-width: 360px) and (max-width: 767px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    margin-bottom: 58px;
  }
`;
